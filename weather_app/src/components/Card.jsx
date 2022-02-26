import React from "react";
import styled from '@emotion/styled';
import PropTypes from "prop-types";


const Card = ({icon, temperature, name, description}) => {
    return (
        <>
        <div className="Card">
            <div className="Card-Main">
                <div>
                <div>
                    <span>{icon}</span>
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
    icon: PropTypes.symbol,
    temperature: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
}


export default Card;