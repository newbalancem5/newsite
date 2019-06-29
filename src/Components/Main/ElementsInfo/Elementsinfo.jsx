import React, {Component} from 'react'  
import './ElementsInfo.css'
import NewElement from './NewElements';


class ElementsInfo extends Component{
    render(){
        return(
            <div className="ElementsPosition">
               <div class="section-title">
      <h2 className="titleinfo">Преимущества компании</h2>
    </div>
                <div class="container">
    
    <div class="space"></div>
    <div class="row">
      <div class="col-md-4">
        <h4 className="titles">Опыт</h4>
        <p className="aboutinfo">Команда опытных механиков и автоэлектриков нашего сервиса,
                                проведут осмотр вашего автомобиля и ответят на интересующие вопросы.</p>
      </div>
      <div class="col-md-4">
        <h4 className="titles">Качество</h4>
        <p className="aboutinfo">Использование расходных материалов и запчастей от надежных партнеров и официальных поставщиков помогает вам быть уверенным в качестве работ и надежности вашего автомобиля.</p>
      </div>
      <div class="col-md-4">
        <h4 className="titles">Личный менеджер</h4>
        <p className="aboutinfo">Опытные менеджеры согласуют удобную дату ТО или сроки ремонтных работ.</p>
      </div>
    </div>
  </div>
  <div className="container">
    <NewElement/>
  </div>
            </div>
        )
    }
}



export default ElementsInfo;