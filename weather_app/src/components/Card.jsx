import styled from '@emotion/styled';


const Card = () => {
    return (
        <>
        <div className="Card">
            <div>
                <span style={{'font-size':'100px'}}>&#127783;</span>
                <p>30 °</p>
                <p>Rio de Janeiro</p>
                <p>Few clouds</p>
            </div>
        </div>
         {/* card shadow */}
         <div className="Card-Shadow"/>
        </>
    )
}


export default Card;