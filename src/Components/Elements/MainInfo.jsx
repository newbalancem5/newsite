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
            
            <h1 className="titleaboutinfo">RefCar</h1>
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
        <div className="container">
                            <div class="section-title">
      <h2 className="titleinfo">Преимущества компании</h2>
    </div>
                <div class="container">
    
    <div class="space"></div>
    <div class="row">
      <div class="col-md-4">
        <h4 className="titles">Опыт</h4>
        <p className="aboutinfo">Команда опытных механиков и автоэлектриков нашего сервиса,
                                проведут осмотр вашего автомобиля и ответят на интересующие вопросы.</p>
      </div>
      <div class="col-md-4">
        <h4 className="titles">Качество</h4>
        <p className="aboutinfo">Использование расходных материалов и запчастей от надежных партнеров и официальных поставщиков помогает вам быть уверенным в качестве работ и надежности вашего автомобиля.</p>
      </div>
      <div class="col-md-4">
        <h4 className="titles">Личный менеджер</h4>
        <p className="aboutinfo">Опытные менеджеры согласуют удобную дату ТО или сроки ремонтных работ.</p>
      </div>
    </div>
  </div> 
        </div>
        </div>
)

export default MainInfo;