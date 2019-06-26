import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {FaPhone} from 'react-icons/fa'
import './ContactForm.css'

const ContactForm = () => (
    <div className="ContactForm">
        <div className="container">
            <Row>
                <Col>
                <div className="container">
                    <div className="blockphone">
                        <Row>
                            
                        <Col><p>8(800)234-78-58</p></Col> 
                        <Col><FaPhone/></Col>                   
                        </Row>
                
                </div>
                </div>
                </Col>
            </Row>

        </div>
    </div>
)

export default ContactForm;