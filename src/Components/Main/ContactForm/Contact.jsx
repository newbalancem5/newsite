import React from 'react'
import { Row, Col} from 'react-bootstrap'
import './ContactForm.css'

const ContactForm = () => (
    <div className="ContactForm">
            <div className="container">
            <Row>
             <Col xs={6} md={4}>
                 <div className="container">                   
                     <h3 className="TitleContact">Наш адресс</h3>
                     <p className="contactTitle">г. Краснодар
                        ул. Большевистская 324 <br/>
                     </p>
                     <p className="contactTitle"> бывший сервисный центр «Volvo» </p>
                 </div>
             </Col>
             <Col xs={6} md={4}>
                 <div className="container">
                     <h3 className="TitleContact">Наш номер</h3>
                     <p className="contactTitle">8 (900) 271-54-33</p>
                     <p className="contactTitle">8 (800) 234-78-58</p>
                 </div>
             </Col>
             <Col xs={6} md={4}>
                 <div className="container">
                 <h3 className="TitleContact">Время работы</h3>
                     <p className="contactTitle">
                     Пн – Пт    9:00–18:00
                     </p>
                     <p className="contactTitle">
                     Сб – Вс    выходные
                     </p>
                 </div>
             </Col>
            </Row>
            </div>
    </div>
)

export default ContactForm;