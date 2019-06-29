import React,{Component} from 'react'
import {Carousel} from 'react-bootstrap'
import '../PhotoGalery/Title.css'
import Footers from '../../Main/footers'
import Transport1 from './2.jpg'
import Transport2 from './3.jpg'
import Transport3 from './10.jpg'
import Transport4 from './Images/4.jpg'
import Transport5 from './Images/5.jpg'
import Transport6 from './Images/6.jpg'
import Transport7 from './Images/7.jpg'
import Transport8 from './Images/8.jpg'
import Transport9 from './Images/9.jpg'
import Transport10 from './Images/11.jpg'
import Transport11 from './Images/12.jpg'
import Transport12 from './Images/14.jpg'
import Transport13 from './Images/15.jpg'
import Transport14 from './Images/16.jpg'
import Transport15 from './Images/17.jpg'


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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport14}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Transport15}
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