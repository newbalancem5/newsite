import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
// import '../NavBarElements/AboutCompany/Aboutcompany/About.css'


class AboutCompany extends Component{
    render(){
        return(
            <div>
            <Container>
  <Row>
    <Col >
    <div className="Container">
    <h1>О компании</h1>
    </div>
            
    </Col>
    
  </Row>
  </Container>
  <div className="container">
  <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
  </div>
  </div>
        )
    }
}

export default AboutCompany;