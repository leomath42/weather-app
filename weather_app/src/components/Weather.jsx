import React from "react";
import Card from "./Card";

/* accuweather icons */
const wi_weather = {
    1: "wi-day-sunny",
    2: "wi-day-cloudy",
    3: "wi-day-cloudy",
    4: "wi-day-cloudy-high",
    5: "wi-day-fog",
    6: "wi-day-cloudy",
    7: "wi-cloudy",
    8: "wi-day-sunny-overcast",
    11: "wi-fog",
    12: "wi-showers",
    13: "wi-day-showers",
    14: "wi-day-showers",
    15: "wi-thunderstorm",
    16: "wi-day-thunderstorm",
    17: "wi-day-thunderstorm",
    18: "wi-rain",
    19: "wi-snow",
    20: "wi-day-snow",
    21: "wi-day-snow",
    22: "wi-snow",
    23: "wi-day-snow",
    24: "wi-snowflake-cold",
    25: "wi-sleet",
    26: "wi-hail",
    29: "wi-rain-mix",
    30: "wi-thermometer",
    31: "wi-thermometer-exterior",
    32: "wi-cloudy-windy",
    33: "wi-night-clear",
    34: "wi-night-alt-cloudy",
    35: "wi-night-alt-cloudy",
    36: "wi-night-alt-cloudy",
    37: "wi-night-fog",
    38: "wi-night-alt-cloudy",
    39: "wi-night-alt-showers",
    40: "wi-night-alt-showers",
    41: "wi-night-alt-thunderstorm",
    42: "wi-night-alt-thunderstorm",
    43: "wi-night-alt-snow",
    44: "wi-night-alt-snow",   
}

const Weather = ({weatherCondition}) => {
    const [cardWeather, setCardWeather] =  React.useState(null);;

    React.useEffect(()=>{

        if(weatherCondition){
            var weather = {
                temperature: weatherCondition.weatherCondition[0].Temperature.Metric.Value,
                description: weatherCondition.weatherCondition[0].WeatherText,
                icon: wi_weather[weatherCondition.weatherCondition[0].WeatherIcon],
                name: weatherCondition.LocalizedName +  (weatherCondition.ParentName !== undefined ?  ", " +weatherCondition.ParentName   : "" ),
                isDayTime: weatherCondition.weatherCondition[0].IsDayTime,
            }

            setCardWeather(weather);
        }
      }, [weatherCondition]);

    return (
        cardWeather && <Card {...cardWeather}/>
    )
}


export default Weather;