import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Slideshow from './Slideshow';
import '../Components/HomePage.css'
import '../App.css';


const HomePage = () => {

  return (
    <div>
      <div>
      <Navbar bg="white" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="/">
        <img src="https://assets-global.website-files.com/651eac31835f453a27bb7c5a/651eaf8dda4d313d93565f20_Nalam%20Logo.svg" loading="lazy" width="87" height="23" alt="" />
        </Navbar.Brand>
          <Navbar.Brand style = {{color: 'black'}} class= "changeText" href="/">Home</Navbar.Brand>
          <Navbar.Brand style = {{color: 'black'}} class= "changeText" href="/DonatePage">Donate</Navbar.Brand>
        </Container>
      </Navbar>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
    </div>

      <Slideshow/> 

      <Button variant="success" size="lg" className="btn-block" href="/DonatePage">
          Donate
      </Button>

      

    </div>
  );
};

export default HomePage;
