import React from 'react';
import './MainInfo.css'
import { Row, Col } from 'react-bootstrap';
import BootstrapModal from './Modal';

const MainInfo = () => (
  <div className="MainPosition" >
    <div className="text">
      <div className="container">
        <Row>
          {/* <Col></Col> */}
          <Col>

            <h1 className="titleaboutinfo">RefCar - ГРУЗОВОЙ СЕРВИС ПОЛНОГО ЦИКЛА</h1>
          </Col>
        </Row>
      </div>
      <div className="opacityf">
        <div className="container aboutinfocontainer">
          <Row>
            {/* <Col></Col> */}
            <Col >
              {/* <p className="abouts">Сервисный центр Рефкар это команда, которая осуществляет грузовой сервис полного цикла:</p> */}
            </Col>
          </Row>
          <div class="container">

            <div class="space"></div>
            <div class="row textinfos">
              <div class="col-md-4 line">
                <p className="aboutinfos">Ремонт и ТО грузовых автомобилей прицепов и полуприцепов</p>
              </div>
              <div class="col-md-4 line">
                <p className="aboutinfos">Монтаж и установка дополнительного оборудования </p>
              </div>
              <div class="col-md-4">
                <p className="aboutinfos">Ремонт и обслуживание автомобильных рефрижераторов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="buttoncall">
      <div className="sendcontainer">
        <BootstrapModal/>
      </div>
    </div>
    <div className="container">
      <div class="section-title">
        <h2 className="titleinfo">Работаем на совесть!</h2>
      </div>
      <div class="container">
        <div class="space"></div>
        <div class="row">
          <div class="col-md-4">
            <h4 className="titles">Надежно</h4>
            <p className="aboutinfo">Используем современные методы и оборудование, компьютерную диагностику, оригинальные запчасти от проверенных поставщиков</p>
          </div>
          <div class="col-md-4">
            <h4 className="titles">Качественно</h4>
            <p className="aboutinfo"> Более 10 лет работы и квалификация мастеров позволяют обеспечить высокий уровень сервиса. Нас рекомендуют своим друзьям </p>
          </div>
          <div class="col-md-4">
            <h4 className="titles">Выгодно</h4>
            <p className="aboutinfo">Благодаря отлаженным процессам обеспечиваем доступные цены, что привлекает к нам все больше клиентов</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MainInfo;