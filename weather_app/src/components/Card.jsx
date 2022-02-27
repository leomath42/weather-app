import React from "react";
import PropTypes from "prop-types";


const Card = ({icon, temperature, name, description, isDayTime}) => {

    const cardColor  = isDayTime ? "deep-day" : "deep-night";

    return (
        <>
        <div className="Card">
            <div className={"Card-Main " + cardColor}>
                <div>
                <div>
                    <span className={"wi " + icon}/>
                    <p>{temperature} <sup>°C</sup></p>
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                </div>
            </div>
            {/* card shadow */}
            <div className="Card-Shadow-1"/>
            <div className="Card-Shadow-2"/>
        </div>
        </>
    )
}

Card.propTypes = {
    icon: PropTypes.string,
    temperature: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
}


export default Card;