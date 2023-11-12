import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Slideshow from './Slideshow';
import '../Components/HomePage.css'


const HomePage = () => {
    

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" style={{ marginLeft: '200px', marginRight: '200px' }}>
        <Container className="centered-container">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/DonatePage">Donate</Nav.Link>
          </Nav>
        </Container>
      </Navbar>    

      <Slideshow/> 

      <Button variant="info" size="lg" className="btn-block" href="/DonatePage">
          Donate
      </Button>
    </div>
  );
};

export default HomePage;
