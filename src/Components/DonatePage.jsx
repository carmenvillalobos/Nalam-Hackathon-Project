import React from 'react';
import './DonatePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../Components/HomePage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Components/HomePage.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import '../App.css';


const DonatePage = () => {
  return (

   

    
    
    <div >
		<div>
      <Navbar bg="white" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="/">
        <img src="https://assets-global.website-files.com/651eac31835f453a27bb7c5a/651eaf8dda4d313d93565f20_Nalam%20Logo.svg" loading="lazy" width="87" height="23" alt="" />
        </Navbar.Brand>

          <Navbar.Brand style = {{color: 'black'}} class= "changeText" href="/" >Home</Navbar.Brand>
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

        

    <div className='bigdiv' color='black'>
        
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
<div class="container">
    <div class="row text-center">
        <div class="col-lg-3">
            <div class="card plan-card">
                <div class="card-block">
                    <div class="pt-3 pb-3">
                        <h1><img src="data:image/png;base64,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" loading="lazy" width="80" height="80" alt="" ></img></h1>
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
                        <h1><img src="https://cdn-icons-png.flaticon.com/512/3526/3526227.png" loading="lazy" width="80" height="80" alt=""></img></h1>
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
                        <h1><img src="https://t4.ftcdn.net/jpg/02/04/63/89/360_F_204638958_xyjfyRaBbKlVX0OdP357fkgjUpYOlb7Z.jpg" loading="lazy" width="80" height="80" alt=""></img></h1>
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
                        <h1><img src="https://media.istockphoto.com/id/1352857325/vector/glass-money-jar-full-of-coins-with-dollar-sign-i.jpg?s=612x612&w=0&k=20&c=m8eDuiu1K19OlfkcM-uTNRk6w_DAUf17pJplMCZKFOQ=" loading="lazy" width="80" height="80" alt=""></img></h1>
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

        
        </div>
  );
};

export default DonatePage;