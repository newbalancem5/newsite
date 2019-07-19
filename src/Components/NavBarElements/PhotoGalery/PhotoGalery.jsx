import React,{Component} from 'react'
import {Carousel} from 'react-bootstrap'
import '../PhotoGalery/Title.css'
import Footers from '../../Main/footers'
import Transport1 from './Images/1.png'
import Transport2 from './Images/2.png'
import Transport3 from './Images/3.png'
import Transport4 from './Images/4.png'
import Transport5 from './Images/5.png'
import Transport6 from './Images/6.png'
import Transport7 from './Images/7.png'
import Transport8 from './Images/8.png'
import Transport9 from './Images/9.png'
import Transport10 from './Images/11.png'
import Transport11 from './Images/12.png'
import Transport12 from './Images/10.png'
import Transport13 from './Images/13.png'



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
            <div className="GalleryPhone">
              <div className="container">
              <div className="TitleGalery">
                    <h1>Фото галерея</h1>
                </div>
              </div>
                <div className="gallery">
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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport5}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport6}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport7}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport8}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport9}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport10}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport11}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport12}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport13}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>      
                </div>
                </div>
                <Footers/>
            </div>
        )
    }
}
export default PhotoGalery;