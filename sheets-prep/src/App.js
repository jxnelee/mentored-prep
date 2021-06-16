import logo from './logo.svg';
import './App.css';
import Row from './Row'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          berkeley boba shops
        </h1>
        <Row 
          name={"Boba Ninja"} 
          rating={2}>
        </Row>
        <Row 
          name={"Feng Cha"} 
          rating={4}>
        </Row>
        <Row 
          name={"TP Tea"} 
          rating={3}>
        </Row>
      </header>
    </div>
  );
}

export default App;
