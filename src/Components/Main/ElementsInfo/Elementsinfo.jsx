import React, {Component} from 'react'  
import './ElementsInfo.css'


class ElementsInfo extends Component{
    render(){
        return(
            <div className="ElementsPosition">
               
                <div class="container">
    <div class="section-title">
      <h2 className="title">Преимущества компании</h2>
    </div>
    <div class="space"></div>
    <div class="row">
      <div class="col-md-4">
        <h4 className="titles">Опыт</h4>
        <p>Команда опытных механиков и автоэлектриков нашего сервиса,
                                проведут осмотр вашего автомобиля и ответят на интересующие вопросы.</p>
      </div>
      <div class="col-md-4">
        <h4 className="titles">Качество</h4>
        <p>Использование расходных материалов и запчастей от надежных партнеров и официальных поставщиков помогает вам быть уверенным в качестве работ и надежности вашего автомобиля.</p>
      </div>
      <div class="col-md-4">
        <h4 className="titles">Личный менеджер</h4>
        <p>Опытные менеджеры согласуют удобную дату ТО или сроки ремонтных работ.</p>
      </div>
    </div>
  </div>
            </div>
        )
    }
}



export default ElementsInfo;