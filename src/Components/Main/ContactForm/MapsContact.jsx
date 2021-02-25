import React from 'react';
import {Col , Row} from 'react-bootstrap';
import './ContactForm.css'

const MapsContact = () => (
    <div className="ContactForm">
        <Row className="ContactContainer">
            <Col  lg>
            <div className="MapsRef">
        <iframe className="MapsForm" src="https://yandex.ru/map-widget/v1/-/CCgp5V6m" frameborder="1"    allowfullscreen="true"></iframe>
        </div>
        </Col>
        <Col>
        <Row className="FormYa">
        <Col  lg="4">
                 <div className="container">                   
                     <h3 className="TitleContact">Наш адрес</h3>
                     <p className="contactTitle">г. Краснодар
                        ул. Большевистская 324 <br/>
                     </p>
                     <p className="contactTitle"> Ростовское шоссе, район «Катюши» </p>
                 </div>
             </Col>
             <Col lg="4">
                 <div className="container">
                     <h3 className="TitleContact">Наш номер</h3>
                    <a href="tel:8 (800) 234-78-58 "> <p className="contactTitle" >8 (800) 234-78-58 <br/> (звонок бесплатный)</p></a>
                    <a href="tel:8 (900) 271-54-33"><p className="contactTitle">8 (900) 271-54-33 </p></a>
                 </div>
             </Col>
             <Col lg="4">
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
        </Col>
        </Row>
        
    </div>
)

export default MapsContact;