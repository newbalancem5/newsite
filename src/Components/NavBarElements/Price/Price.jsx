import React , {Component} from 'react';
import Price1 from './PDF/trailerrepairPRISE.pdf'
import Price2 from './PDF/price2.pdf'
import {Col , Row, ListGroup} from 'react-bootstrap'
import Footers from '../../Main/footers'
import './footer.css'


class Price extends Component {
    render(){
        return(
            <div className="Price">
            <div className="container">
                <div className="container">
                    <h1 className="title">Прайс компании</h1>
                </div>
                <div className="container">
                    <Row>
                        <Col>
                        
                        <ListGroup className="all" >
                            <ListGroup.Item className="listgroup"><a  className="PriceItem">Прайсы находятся в разработке. Вся информация по номеру</a></ListGroup.Item>
                            <ListGroup.Item className="listgroup"><a   className="PriceItem">8 900 271 54 33</a></ListGroup.Item>
                            {/* <ListGroup.Item className="listgroup"><a href = {Price1} target="_blank"  className="PriceItem">Ремонт прицепов</a></ListGroup.Item>
                            <ListGroup.Item className="listgroup"><a href = {Price2} target="_blank" className="PriceItem" >Полуприцепы</a></ListGroup.Item> */}
                        </ListGroup>
                        </Col>
                    </Row>
                </div>                
            </div>   
            <div className="footer">
            <Footers />
            </div>          
            </div>
            
        )
    }
} 
export default Price;