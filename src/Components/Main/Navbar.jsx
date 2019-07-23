import React, {Component} from 'react';
import {Navbar, Nav, Image } from 'react-bootstrap';
import {Link, Switch, Route} from 'react-router-dom';
import './Main.css'
import Logo from './ref.svg'
import Main from '../Main';
import AboutCompany from '../NavBarElements/AboutCompany/AboutCompany';
import PhotoGalery from '../NavBarElements/PhotoGalery/PhotoGalery';
import Price from '../NavBarElements/Price/Price';

class NavigationBar extends Component {
    render(){
        return(
          <div>
          <Navbar collapseOnSelect expand="lg" bg="" sticky="top" inline className="navbar">
  <Navbar.Brand href="#home" className="Brand" ><Link to="/"><Image src={Logo} width="120" /></Link></Navbar.Brand>
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
<Switch>
<Route exact path="/" component={Main} />
    <Route path="/AboutCompany" component={AboutCompany} />
    <Route path="/PhotoGalery" component={PhotoGalery} />
    <Route path="/Price" component={Price} />
</Switch>
</div>

        );
    }
}
export default NavigationBar;

