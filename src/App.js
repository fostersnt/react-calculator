import logo from './logo.svg';
import './App.css';
import Home from './views/home.tsx';

function App() {
  const data = {
    name: 'Calculator',
    cost: 150.00
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home {...data}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
