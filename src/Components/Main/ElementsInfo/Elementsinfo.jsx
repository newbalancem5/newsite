import React, {Component} from 'react'  
import './ElementsInfo.css'
import NewElement from './NewElements';


class ElementsInfo extends Component{
    render(){
        return(
            <div className="ElementsPosition">
    <NewElement/>
            </div>
        )
    }
}



export default ElementsInfo;