import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Main.css'
class NavigationBar extends Component {
    render(){
        return(
            <Navbar bg="transparent" sticky="top" inline>            
            <Navbar.Brand inline>
              <Link to="/">RefCar</Link>
              </Navbar.Brand>
            <Nav className="left">
              <Nav.Link><Link to="/AboutCompany">О компании</Link></Nav.Link>
              <Nav.Link > <Link to="/PhotoGalery" > Фото Галерея</Link></Nav.Link>
            </Nav>
            
          </Navbar>


        );
    }
}
export default NavigationBar;