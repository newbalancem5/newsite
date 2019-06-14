import React, { Component } from 'react';
import ElementsInfo from '../Components/Main/Elementsinfo';
import Ads from '../Components/Main/Ads';


class Main extends Component {
    render(){
        return(
            <div className="container">
                <h1>Main site</h1>
                <div>
                    <ElementsInfo/>
                </div>
                <div className="container">
                    <Ads/>
                </div>
            </div>
        )
    }
}

export default Main;