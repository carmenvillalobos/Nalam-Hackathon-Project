import logo from './logo.svg';
import './App.css';
import './Components/DonatePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
import DonatePage from './Components/DonatePage';
import Slideshow from './Components/Slideshow';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (

    <div className="App">
      <header className="App-header">

        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/DonatePage' element={<DonatePage/>} />
          </Routes>
        </Router>

      
        </header>
    </div>
    
  );
}

export default App;
