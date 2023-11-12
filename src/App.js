import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import DonatePage from './Components/DonatePage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HomePage />
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 
        <Router>
          <Link to="/DonatePage">DonatePage</Link>
        </Router>
 
 
      </header>
    </div>
  );
}

export default App;
