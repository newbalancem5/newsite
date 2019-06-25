import React, { Component } from 'react';
import ElementsInfo from './Main/ElementsInfo/Elementsinfo';
import Ads from '../Components/Main/Ads';
import Form from '../Components/Main/FirstForm/FirstForm'
// import Logo from './Main/LogoCarousel/LogoCarousel'
import LogoAds from '../Components/Main/Logo/LogoAds'
// import Footer from './Main/Footer';
import Footers from './Main/footers'
import MainInfo from './Elements/MainInfo';
// import PhotoGalery from './NavBarElements/PhotoGalery/PhotoGalery';
import './App.css'


class Main extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <MainInfo/>
                </div>
                <div className="">
                    <ElementsInfo/>
                </div>
                <div className="container">
                    <Ads/>
                </div>
                <div className="container">
                    <LogoAds/>
                </div>
                <div className="container">
                    {/* <Logo/> */}
                </div>
                <div className="">
                    <Form />
                </div>
                <div className="container">
                    <Footers />
                </div>
                </div>
        )
    }
}

export default Main;