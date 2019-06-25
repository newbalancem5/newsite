import React,{Component} from 'react'
import './ElementsInfo.css'
import { Row, Col } from 'react-bootstrap';


class NewElement extends Component{
    render(){
        return(
            <div className="about">
                <div className="container">
                    <h2 className="titleabout">Услуги компании</h2>
                </div>
                <div className="container">
                    <Row>
                        <Col>
                            <div className="container">
                                <p className="lineabout">Техническое обслуживание</p>
                                <p className="lineabout">Работа с корпоративными клиентами</p>
                                <p className="lineabout">Регламентные работы по техобслуживанию</p>
                                <p className="lineabout">Установка и обслуживание доп. оборудования</p>
                                <p className="lineabout">Ремонт ходовой части автомобиля</p>
                                <p className="lineabout">Ремонт тормозной системы</p>
                                <p className="lineabout">Замена деталей узлов ходовой части и подвески</p>
                            </div>
                        </Col>
                        <Col>
                        <div className="container">
                            <p className="lineabout">Замена узлов рулевого управления</p>
                            <p className="lineabout">Обслуживание и ремонт АКБ</p>
                            <p className="lineabout">Ремонт КПП ZF</p>
                            <p className="lineabout">Ремонт ДВС</p>
                            <p className="lineabout">Ремонт и тех. обслуживание авторефрижераторов</p>
                            <p className="lineabout">Ремонт и тех. обслуживание кондиционеров</p>
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>
           
        )
    }
}


export default NewElement;