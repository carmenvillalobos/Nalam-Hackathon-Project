import React from 'react';
import './DonatePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../Components/HomePage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Components/HomePage.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const DonatePage = () => {
  return (
    <div>
		<div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="/">
        <img src="https://assets-global.website-files.com/651eac31835f453a27bb7c5a/651eaf8dda4d313d93565f20_Nalam%20Logo.svg" loading="lazy" width="87" height="23" alt="" />
        </Navbar.Brand>

          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/DonatePage">Donate</Navbar.Brand>
            
        </Container>
      </Navbar>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
    </div>

			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
<div class="container">
    <div class="row text-center">
        <div class="col-lg-3">
            <div class="card plan-card">
                <div class="card-block">
                    <div class="pt-3 pb-3">
                        <h1><i class="fa fa-plane plan-icon"></i></h1>
                        <h6 class="text-uppercase text-primary">Higher Education</h6>
                    </div>
                    <div>
                        <h1 class="plan-price padding-b-15">$125<span class="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                        <div class="plan-div-border"></div>
                    </div>
                    <div class="plan-features pb-3 mt-3 text-muted padding-t-b-30">
                        <p>18 to 24 years typical age</p>
                        <p>Cancel anytime</p>
                        <p>$1,499 per year</p>
                        <p>Avg. 3-6y duration</p>
                        <a href="#/" class="btn btn-primary">Donate</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="card plan-card">
                <div class="card-block">
                    <div class="pt-3 pb-3">
                        <h1><i class="fa fa-trophy plan-icon bg-dark"></i></h1>
                        <h6 class="text-uppercase text-primary">Vocational</h6>
                    </div>
                    <div>
                        <h1 class="plan-price padding-b-15">$117<span class="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                        <div class="plan-div-border"></div>
                    </div>
                    <div class="plan-features pb-3 mt-3 text-muted padding-t-b-30">
                        <p>16 to 18 years typical age</p>
                        <p>Cancel anytime</p>
                        <p>$1,399 per year</p>
                        <p>Avg. 1-3y duration</p>
                        <a href="#/" class="btn btn-primary">Donate</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3">
            <div class="card plan-card">
                <div class="card-block">
                    <div class="pt-3 pb-3">
                        <h1><i class="fa fa-umbrella plan-icon bg-pink"></i></h1>
                        <h6 class="text-uppercase text-pink">Orphanage</h6>
                    </div>
                    <div>
                        <h1 class="plan-price padding-b-15">$34<span class="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                        <div class="plan-div-border"></div>
                    </div>
                    <div class="plan-features pb-3 mt-3 text-muted padding-t-b-30">
                        <p>4 to 16 years typical age</p>
                        <p>Cancel anytime</p>
                        <p>$399 per year</p>
                        <p>Ongoing</p>
                        <a href="#/" class="btn btn-pink">Donate</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3">
            <div class="card plan-card">
                <div class="card-block">
                    <div class="pt-3 pb-3">
                        <h1><i class="fa fa-cube plan-icon bg-teal"></i></h1>
                        <h6 class="text-uppercase text-teal">One Time Donation</h6>
                    </div>
                    <div>
                        <h1 class="plan-price padding-b-15">One Time<span class="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                        <div class="plan-div-border"></div>
                    </div>
                    <div class="plan-features pb-3 mt-3 text-muted padding-t-b-30">
                        <p>All ages and projects</p>
                        <p>One time</p>
                        <p>All durations</p>
                        <p>You choose the amount</p>
                        <a href="#/" class="btn btn-teal">Donate</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
		</div>
    
  );
};

export default DonatePage;