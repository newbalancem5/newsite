import React, {Component} from 'react'
import { Row, Col, FormControl, Form, Button } from 'react-bootstrap';
import './Form.css' 


class FirstForm extends Component{
    render(){
        return(
            <div className="firstform">
            <div className="title">
            <h1 className="titleForm">Форма обратной связи</h1>
            </div>
        <div className="inputgroup">
        <div className="container">
            <Row>
                <Col>
                <div className="Name">
            
            <Form.Label>Ф.И.О</Form.Label>
        <FormControl placeholder="Ф.И.О" />
        </div>
                </Col>
                <Col>
            <div className="keks">
                <Form.Label>Номер телефона  </Form.Label>
                <input class="form-control" type="tel"  id="example-tel-input" placeholder="8 999 999 99 99"></input>
                </div> 
            
                </Col>
            </Row>
       
            </div>
            <div className="container">
            <div className="mail">
                <Form.Label>Введите Email</Form.Label>
                <FormControl type="email"  placeholder="Email" aria-label="With textarea" />
            </div>
            </div>
           
            <div className="container">
            <div className="mail">
                <Form.Label>Комментарий</Form.Label>
                <FormControl as="textarea" aria-label="With textarea" />
            </div>
            </div>
            
           
        </div>
        <div className="sendcontainer">
            <Button className="Send">Отправить</Button>
        </div>
        </div>
            
        )
    }
}

export default FirstForm;