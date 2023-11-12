import logo from './logo.svg';
import './App.css';
import Slideshow from './Components/Slideshow';
import DonatePage from './Components/DonatePage';
import NavBar from './Components/NavBar';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import Button from 'react-bootstrap/Button';

const handleClick = () => {
  alert('Button Clicked!');
};

function App() {
  return (

    <div className="App">
      <header className="App-header">
      
        <NavBar />

        <Slideshow/>

        {/* <Router>
        <Switch>
        <Route path="/DonatePage" component={DonatePage} />
        </Switch>
        </Router> */}

        {/* <Link to="/DonatePage"> */}
        <Button variant="success" size="lg" className="btn-block">Donate</Button>
        {/* </Link> */}

      </header>
    </div>
  );
}

export default App;
