import React from "react";
import './Navs.css';
import { Navbar , Nav , Container } from "react-bootstrap";
import logo from './../../assets/logo.png';


const Navs = ()=>{
    return(
              <Navbar expand="lg">
                <Container>
                  <Navbar.Brand href="#home">
                    <img src={logo} title="logo"/>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">about us</Nav.Link>
                      <Nav.Link href="#link">explore food</Nav.Link>
                      <Nav.Link href="#link">Review</Nav.Link>
                      <Nav.Link href="#link">faq</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link id="lastnav">0234569</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            )
          }
          


export default Navs;