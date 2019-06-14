import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import AboutCompany from '../NavBarElements/AboutCompany';

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
            {/* <Router> 
              <Switch>
                <Route to="/" component={AboutCompany}/>

              </Switch>
            </Router> */}
          </Navbar>


        );
    }
}
export default NavigationBar;