import logo from './logo.svg';
import Search from './components/Search';
import Card from './components/Card';

import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <div className="container-flex main">

        <div className="col-left">
          <div className="container-block">
            <Title textColor="white" className="Title"> Weather App</Title>
            <Search/>
          </div>  
        </div>
        <div className="col-right">
          <div className="container-block">
              {/* <Title textColor="white" className="Title"> Weather App</Title>
              <Search/> */}
              <Card/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
