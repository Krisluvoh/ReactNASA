import { useState, useEffect } from 'react'

function Form({
    setLoading,
    setData
}) {
      // Define the API key
    const apiKey = 'UwGrHIlcKVfa2EnNfJgSY6BxkTy7S6TTpvbnoJZf';

    const [searchQuery, setSearchQuery] = useState("")

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    };


  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct the API URL with the search term and API key
    const apiUrl = `https://images-api.nasa.gov/search?q=${searchQuery}`;
    

    try {
      // Set loading to true while fetching data
      setLoading(true);

      // Make the API request
      const response = await fetch(apiUrl);

      // Check if the request was successful
      if (response.ok) {
        // Parse the JSON response
        const result = await response.json();
        console.log(result)
        // Update the state with the data
        setData(result.collection.items);
      } else {
        // Handle errors if the request was not successful
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      // Handle any network or unexpected errors
      console.error('Error:', error);
    } finally {
      // Set loading back to false after the request is complete
      setLoading(false);
    }
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name="searchterm"
            onChange={handleChange}
            />
            <input type='submit'
            value="submit" />
        </form>
    </div>
  )
}

export default Form