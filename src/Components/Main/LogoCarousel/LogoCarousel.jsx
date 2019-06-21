import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Logotip from "../Logo/isuzus.png"
import Daf from '../Logo/dafs.png'
import Hino from '../Logo/Hinos.png'
import Hynday from '../Logo/Hyunday.png'
import Iveco from '../Logo/ivss.png'
import Merin from '../Logo/Mercedess.png'


const Logo = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <div className="container">
    <AliceCarousel 
    autoPlayInterval={3000}
    autoPlay={true}
    fadeOutAnimation={true}
    mouseDragEnabled={true}
    disableAutoPlayOnAction={true}
     >
      <img  src={Logotip} onDragStart={handleOnDragStart}  />
      <img  src={Daf} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img  src={Hino} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img  src={Logotip} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img  src={Iveco} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img  src={Hynday} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img  src={Merin} onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>
    </div>
  )
}
export default Logo;