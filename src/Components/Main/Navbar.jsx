import React, {Component} from 'react';
import {Navbar, Nav, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Main.css'
import Logo from './ref.svg'

class NavigationBar extends Component {
    render(){
        return(
          <Navbar collapseOnSelect expand="lg" bg="" sticky="top" inline className="navbar">
  <Navbar.Brand href="#home" className="Brand" ><Image src={Logo} width="120" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto itemsbrand">
    <Nav.Link href="#"><Link to="/" className="navitem">Главная</Link></Nav.Link >
    <Nav.Link href="#" > <Link to="/PhotoGalery" className="navitem"  >Галерея</Link></Nav.Link>
              <Nav.Link href="#"><Link to="/Price" className="navitem"> Стоимость работ </Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="tel:89002715433"  className=" phonebrand"> 8 (900) 271-54-33</Nav.Link>
      <Nav.Link eventKey={1} >
      
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        );
    }
}
export default NavigationBar;