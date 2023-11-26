import { useState } from 'react';
import Form from '../components/Form'
import SearchResult from '../components/SearchResult'

function NasaList() {

  // Set up state for data and loading status
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  return (
    <div>
      <h1>NASA List</h1>
      <Form setData={setData} setLoading={setLoading}/>

      {/* Display loading message if data is still being fetched */}
      {loading && <p>Loading...</p>}

      {/* Display the data */}
      {data && (
        <ul>
          {data.filter((item) => {
            return item.hasOwnProperty('data') &&
                    item.data.length > 0 &&
                    item.hasOwnProperty('links') &&
                    item.links.length > 0
          }).map((item, i) => (
            <SearchResult key={`search-result-`+i} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default NasaList;
