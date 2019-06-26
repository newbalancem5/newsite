import React,{Component} from 'react'
import {Carousel} from 'react-bootstrap'
import '../PhotoGalery/Title.css'
import Transport1 from './2.jpg'
import Transport2 from './3.jpg'
import Transport3 from './10.jpg'
import Footers from '../../Main/footers';

class PhotoGalery extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
    }
    render()
    {
        const { index, direction } = this.state;
        return(
            <div className="Container">
              <div className="container">
              <div className="TitleGalery">
                    <h1>Фото галерея</h1>
                </div>
              </div>
                
                <div className="container">
                <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport1}
            alt="First slide"
          />
    
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport2}
            alt="Third slide"
          />

         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport3}
            alt="Third slide"
          />

       
        </Carousel.Item>
      </Carousel>
                </div>
                <Footers/>
            </div>
        )
    }
}
export default PhotoGalery;