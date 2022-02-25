import "./Search.css"

const Search = () => {
    return (
        <div className="Search">
            <div>
                <input placeholder="Search here !"></input>
            </div>
            <div>
                <button onClick={()=>console.count()}>Submit !</button>
            </div>

        </div>
    )
}

export default Search;