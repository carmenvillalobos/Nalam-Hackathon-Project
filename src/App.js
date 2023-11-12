import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import DonatePage from './Components/DonatePage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {

  return (

    <div className="App">
      <header className="App-header">
      
        <HomePage />
 
        <Router>
          <Link to="/DonatePage">DonatePage</Link>
        </Router>
 
 
      </header>
    </div>
  );
}

export default App;
