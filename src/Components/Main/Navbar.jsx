import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Main.css'
class NavigationBar extends Component {
    render(){
        return(
            <Navbar bg="white" sticky="top" inline>            
            <Navbar.Brand inline>
            
              </Navbar.Brand>
            <Nav className="left">
            <Nav.Link ><Link to="/">Главная</Link></Nav.Link >
              {/* <Nav.Link><Link to="/AboutCompany">Контакты</Link></Nav.Link> */}
              <Nav.Link > <Link to="/PhotoGalery" >Галерея</Link></Nav.Link>
              <Nav.Link><Link to="/Price" > Стоимость работ </Link></Nav.Link>
            </Nav>
            
          </Navbar>


        );
    }
}
export default NavigationBar;