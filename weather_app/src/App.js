import Search from './components/Search';
import React from 'react';
import Weather from './components/Weather';

import './App.css';
import Title from './components/Title';

function App() {

  const [search, setSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [weatherCondition, setWeatherCondition] = React.useState(null);

  async function searchCity(name) {
    if(name.length > 0){
      var urlLoaction = `http://dataservice.accuweather.com/locations/v1/search?apikey=1OHFIiYJApxdbcQsOr8FnOAdbD3BJQSA&q=${name}&language=pt-br`
      
      var response = await fetch(urlLoaction, { mode:'cors',});
      var locationData = await response.json();
      
      setSearchResult(locationData);

      if(locationData.length > 0){
        var locationKey = locationData[0].Key
        var urlLoaction = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=1OHFIiYJApxdbcQsOr8FnOAdbD3BJQSA&language=pt-br&details=false`
        
        var response = await fetch(urlLoaction, { mode:'cors',});
        var weatherData = await response.json();

        var weather = {
          LocalizedName: locationData[0].LocalizedName,
          ParentName: locationData[0]?.ParentCity?.LocalizedName,
          weatherCondition:[...weatherData]
        }

        setWeatherCondition(weather);

      }
    }
  
  }

  return (
    <div className="App">
      <div className="container-flex main">

        <div className="col-left">
          <div className="container-block">
            <Title textColor="white" className="Title"> Weather App</Title>
            <Search onSearch={(e) => searchCity(e.target.value)}/>
          </div>  
        </div>
        <div className="col-right">
          <div className="container-block">
              <Weather weatherCondition={weatherCondition}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
