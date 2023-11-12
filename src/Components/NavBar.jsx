import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NavBar = () => {
    

  return (
    <div>
        <nav>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/DonatePage">Donate</Link></li> */}
            </ul>
        </nav>  
    </div>
  );
};

export default NavBar;
