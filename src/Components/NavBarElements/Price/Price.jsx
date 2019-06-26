import React , {Component} from 'react';
import Price1 from './PDF/trailerrepairPRISE.pdf'
import {Col , Row, ListGroup} from 'react-bootstrap'
import Footers from '../../Main/footers';


class Price extends Component {
    render(){
        return(
            <div>
            <div className="container">
                <div className="container">
                    <h1 className="title">Прайс компании</h1>
                </div>
                <div className="container">
                    <Row>
                        <Col>
                        
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href = {Price1} target="_blank">Ремонт прицепов</a></ListGroup.Item>
                            <ListGroup.Item>Прайс№2</ListGroup.Item>
                           
                        </ListGroup>
                        </Col>
                    </Row>
                </div>
            </div>            
            <Footers/>  
            </div>
        )
    }
} 
export default Price;