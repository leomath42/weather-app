import "./Search.css"
import RoundButton from './RoundButton';
import InputLine from './InputLine';

const Search = () => {
    return (
        <div className="Search">
            <div>
                <InputLine  color='orange' textColor="white" placeholder="Search here !"/>
            </div>
            <div>
                <RoundButton onClick={()=>console.count()} color='red'>Submit !!</RoundButton>
            </div>

            
        </div>
    )
}

export default Search;