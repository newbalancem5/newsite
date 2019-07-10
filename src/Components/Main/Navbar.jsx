import React, {Component} from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Main.css'
class NavigationBar extends Component {
    render(){
        return(
          <Navbar collapseOnSelect expand="lg" bg="" sticky="top" inline className="navbar">
  <Navbar.Brand href="#home" className="Brand" >Refcar</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link ><Link to="/" className="navitem">Главная</Link></Nav.Link >
    <Nav.Link > <Link to="/PhotoGalery" className="navitem"  >Галерея</Link></Nav.Link>
              <Nav.Link><Link to="/Price" className="navitem"> Стоимость работ </Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link  className="navitem"> 8 (900) 271-54-33</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
                 

        );
    }
}
export default NavigationBar;