import React from 'react';
import './MainInfo.css'
import { Row, Col, Button } from 'react-bootstrap';

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
        <div className="container">
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
                <p className="aboutinfos">Ремонт и ТО грузовых автомобилейБ прицепов и полуприцепов</p>

              </div>
              <div class="col-md-4 line">
                <p className="aboutinfos">Монтаж и оформление дополнительного оборудования </p>
              </div>
              <div class="col-md-4">
                <p className="aboutinfos">Ремонт и обслуживание автомобильных и рефрижераторов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="buttoncall">
      <div className="sendcontainer">
        <Button className="SignUp" href="#signup" type="submit">ЗАПИСАТЬСЯ</Button>
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
            <p className="aboutinfo">Используем современные методы и оборудование, компьютерную диагностику, оригинальные запчасти от пров поставщиков</p>
          </div>
          <div class="col-md-4">
            <h4 className="titles">Качественно</h4>
            <p className="aboutinfo"> Более 10 лет работы и кфалификация мастеров позволяют обеспечить выскоий уровень сервиса. Нас рекомендуют своим друзьям </p>
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