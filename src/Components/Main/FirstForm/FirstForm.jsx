import React, {Component} from 'react'
import { Row, Col, FormControl, Form, Button } from 'react-bootstrap';
import './Form.css' 


class FirstForm extends Component{
    render(){
        return(
            <form className="firstform" id="fs-frm" name="complaint-form" accept-charset="utf-8" action="https://formspree.io/info@refcar.ru" method="post">
            <div className="title" id="signup">
            <h1 className="titleForm">Форма обратной связи</h1>
            </div>
            <div className="container">
            <p className="aboutText">Команда опытных механиков и автоэлектриков нашего сервиса, <br></br> проведут осмотр вашего автомобиля и ответят на интересующие вопросы.</p>
        </div>
        <div className="inputgroup">
        <div className="container">
            <Row>
                <Col>
                <div className="Name">
            <Form.Label>Ф.И.О</Form.Label>
        <FormControl placeholder="Ф.И.О" name="name" id="full-name" required/>
        </div>
                </Col>
                <Col>
            <div className="keks">
                <Form.Label>Номер телефона  </Form.Label>
                <input class="form-control" type="tel"   placeholder="8 999 999 99 99"  name="telephone" id="telephone" required></input>
                </div> 
            
                </Col>
            </Row>
       
            </div>
            <div className="container">
            <div className="mail">
                <Form.Label>Введите Email</Form.Label>
                <FormControl type="email"  placeholder="Email" aria-label="With textarea"  name="_replyto" id="email-address"  required/>
            </div>
            </div>
           
            <div className="container">
            <div className="mail">
                <Form.Label>Комментарий</Form.Label>
                <FormControl as="textarea" aria-label="With textarea" name="complaint" id="complaint" required="" />
            </div>
            </div>
            
           
        </div>
        <div className="sendcontainer">
            <Button className="Send" variant="primary" type="submit">Отправить</Button>
        </div>
        
        </form>
            
        )
    }
}

export default FirstForm;