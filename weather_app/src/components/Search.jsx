import "./Search.css"
import RoundButton from './RoundButton';
import InputLine from './InputLine';

const Search = ({value, onChange, onSearch}) => {
    const onKeyPress = (event) =>{
        if(event.key.toUpperCase() === 'ENTER'){
            onSearch(event);
        }
    }
    return (
        <div className="Search">
            <div>
                <InputLine value={value} onKeyPress={onKeyPress} onChange={onChange} color='orange' textColor="white" placeholder="Search here !"/>
            </div>
            <div>
                <RoundButton onClick={onSearch}  color='red'>Submit !!</RoundButton>
            </div>

            
        </div>
    )
}

export default Search;