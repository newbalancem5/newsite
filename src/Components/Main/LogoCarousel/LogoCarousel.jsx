import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

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
      <img src="/isuzu" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>
    </div>
  )
}
export default Logo;