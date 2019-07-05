import React, { Component } from 'react';
import ElementsInfo from './Main/ElementsInfo/Elementsinfo';
import Ads from '../Components/Main/Ads';
import Form from '../Components/Main/FirstForm/FirstForm'
import LogoAds from '../Components/Main/Logo/LogoAds'
import Footers from './Main/footers'
import MainInfo from './Elements/MainInfo';
import './App.css'
import ContactForm from './Main/ContactForm/Contact';


class Main extends Component {
    render(){
        return(
            <div>
                <div className="AboutFirm">
                    <MainInfo/>
                </div>
                <div>
                    <ContactForm/>
                </div>
                <div className="">
                    <ElementsInfo/>
                </div>
                <div className="">
                    <Ads/>
                </div>
                <div className="">
                    <LogoAds/>
                </div>
                <div className="">
                    <Form />
                </div>
                <Footers/>
                </div>
        )
    }
}

export default Main;