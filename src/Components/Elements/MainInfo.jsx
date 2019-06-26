import React from 'react';
import './MainInfo.css'
import {Row , Col} from 'react-bootstrap';

const MainInfo = () => (
    <div className="MainPosition" >
        <div className="text">
            <div className="container">
            <Row>
            {/* <Col></Col> */}
            <Col>
            <h1 className="titleaboutinfo">Мы предоставляем</h1>
            </Col>  
            </Row>
            </div>    
        <div className="container">
        <Row>
            {/* <Col></Col> */}
    <Col >       
    <p className="abouts">Сервисный центр «Рефкар» это широкий выбор услуг от прохождения сервисного ТО грузового автомобиля и установки  дополнительного оборудования, до ремонта и холодильного оборудования и систем управления автомобилем.</p>
    </Col>
  </Row>
        {/* <h1 className="title">Мы предоставляем</h1>
        </div>        
        <div className="container">
            <p className="CenterTextInfo">
            Сервисный центр «Рефкар» это широкий выбор услуг от прохождения сервисного ТО грузового автомобиля и установки  дополнительного оборудования, до ремонта и холодильного оборудования и систем управления автомобилем.
            </p> */}
            </div>
        </div>
        </div>
)

export default MainInfo;