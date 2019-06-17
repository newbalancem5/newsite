import React, {Component} from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';



class FirstForm extends Component{
    render(){
        return(
            <div className="container">
                <div className="title">
                <h1>Форма обратной связи</h1>
                </div>
            <div className="inputgroup">
            <div className="container">
                <div className="Name">
                <InputGroup className="mb-3">
                    <Form.Label>Ф.И.О</Form.Label>
                <FormControl placeholder="Ф.И.О" />
                    </InputGroup>
                </div>
                </div>
                <div className="container">
                <div className="Mail">
                    <Form.Label>Номер телефона  </Form.Label>
                    <FormControl placeholder="введите номер" />
                    </div> 
                </div>
                <div className="Mail">
                </div>
                <div className="Number">
                    <FormControl />
                </div>
            </div>
            <div className="container">
                <Button variant="primary">Отправить</Button>
            </div>
            </div>
        )
    }
}

export default FirstForm;