import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (

    <div className="App">

        <HomePage />
        {/* <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/donate" component={DonatePage} />
        </Switch>
      </Router> */}

    </div>
  );
}

export default App;
