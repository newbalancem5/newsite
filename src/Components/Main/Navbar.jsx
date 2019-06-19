import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">            
            <Navbar.Brand>
              <Link to="/">RefCar</Link>
              </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to="/AboutCompany">О компании</Link></Nav.Link>
              <Nav.Link > <Link to="/PhotoGalery" > Фото Галерея</Link></Nav.Link>
            </Nav>
          </Navbar>


        );
    }
}
export default NavigationBar;