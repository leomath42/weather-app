import logo from './logo.svg';
import Search from './components/Search';
import InputLine from './components/InputLine';

import './App.css';
import RoundButton from './components/RoundButton';

function App() {
  return (
    <div className="App">
      <Search/>
      <InputLine  color='orange' placeholder="teste"/>
      <RoundButton color='red'>Submit !!</RoundButton>
    </div>
  );
}

export default App;
