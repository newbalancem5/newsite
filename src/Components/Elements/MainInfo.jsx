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
            <div className="opacityf">
        <div className="container">
        <Row>
            {/* <Col></Col> */}
    <Col >       
    <p className="abouts">Сервисный центр Рефкар это команда, которая осуществляет грузовой сервис полного цикла:</p>
    </Col>
  </Row>
  <div class="container">
    
    <div class="space"></div>
    <div class="row textinfos">
      <div class="col-md-4 line">
        <p className="aboutinfos">Ремонт и обслуживание коммерческого транспорта, среднетоннажных и грузовых автомобилей</p>
        
      </div>
      <div class="col-md-4 line">
        <p className="aboutinfos">Монтаж и оформление дополнительного оборудования </p>
      </div>
      <div class="col-md-4">
        <p className="aboutinfos">Ремонт и обслуживание прицепов и полуприцепов</p>
      </div>
    </div>
  </div> 
            </div>
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
        <p className="aboutinfo">Опыт сотрудников подтвержден отзывами наших клиентов, квалификацией мастеров и успешной работы компании на протяжении 10 лет</p>
      </div>
      <div class="col-md-4">
        <h4 className="titles">Качество</h4>
        <p className="aboutinfo"> Использование расходных материалов и запчастей от проверенных партнеров и официальных поставщиков помогает вам быть уверенным в качестве работ и надежности вашего автомобиля</p>
      </div>
      <div class="col-md-4">
        <h4 className="titles">Личный менеджер</h4>
        <p className="aboutinfo">Опытные менеджеры согласуют удобную дату ТО или сроки ремонтных работ</p>
      </div>
    </div>
  </div> 
        </div>
        </div>
)

export default MainInfo;