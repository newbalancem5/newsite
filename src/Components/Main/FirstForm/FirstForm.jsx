import React, {Component} from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import './Form.css' 


class FirstForm extends Component{
    render(){
        return(
            <div className="container">
                <div className="firstform">
                <div className="title">
                <h1 className="title">Форма обратной связи</h1>
                </div>
            <div className="inputgroup">
            <div className="container">
                <div className="Name">
                
                    <Form.Label>Ф.И.О</Form.Label>
                <FormControl placeholder="Ф.И.О" />
  
                </div>
                </div>
                <div className="container">
                <div className="Mail">
                    <Form.Label>Номер телефона  </Form.Label>
                    <FormControl placeholder="введите номер" />
                    </div> 
                </div>
                <div className="container">
                <div className="Mail">
                    <Form.Label>Комментарий</Form.Label>
                    <FormControl/>
                </div>
                </div>
                
               
            </div>
            <div className="sendcontainer">
                <Button className="Send">Отправить</Button>
            </div>
            </div>
            </div>
        )
    }
}

export default FirstForm;