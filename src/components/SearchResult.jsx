export default function SearchResult({item}) {
    const {title, description} = item.data[0]
    const {href} = item.links[0]
    return (
        <li className="search-result">
            <div className="search-result__image">
                <img src={href} alt="" />
            </div>
            <div className="search-result___desc">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    )
}