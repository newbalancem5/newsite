import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../Main/Main.css'


class ElementsInfo extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col className="infoelements">
                        <div >
                            <h1>Опыт</h1>
                            <div>
                                <p>команда опытных механиков и автоэлектриков нашего сервиса,
                                проведут осмотр вашего автомобиля и ответят на интересующие вопросы</p>
                            </div>
                        </div>
                        </Col>
                        <Col className="infoelements">
                        <div>
                            <h1>Гарантия</h1>
                            <div>
                                <p>На все выполненные операции дается гарантия, информация о них заносится в сервисную книжку</p>
                            </div>
                        </div>
                        </Col>
                        <Col className="infoelements">
                        <div>
                            <h1>Качество</h1>
                            <div>
                                <p>Использование расходных материалов и запчастей от надежных партнеров и официальных поставщиков помогает вам быть уверенным в качестве работ и надежности вашего автомобиля </p>
                            </div>
                        </div>
                        
                        </Col >
                        <Col className="infoelements">
                        <div>
                            <h1>Личный менеджер</h1>
                            <div>
                                <p>(Опытные менеджеры согласуют удобную дату ТО или сроки ремонтных работ</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}



export default ElementsInfo;