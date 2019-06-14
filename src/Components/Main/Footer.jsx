import React, {Component} from 'react'
import '../Main/Main.css'


class Footer extends Component {
    render(){
        return(
            <footer>
                <div class="container-fluid text-center text-md-left" className="footer">


<div class="row">

  
  <div class="col-md-6 mt-md-0 mt-3">

    
    <h5 class="text-uppercase">Footer Content</h5>
    <p>Here you can use rows and columns to organize your footer content.</p>

  </div>
  

  <hr class="clearfix w-100 d-md-none pb-3"/>

  
  <div class="col-md-3 mb-md-0 mb-3">

    
    <h5 class="text-uppercase">О компании</h5>

    <ul class="list-unstyled">
      <li>
        <a href="#!">О компании</a>
      </li>
      <li>
        <a href="#!">Наши приемущества</a>
      </li>
      <li>
        <a href="#!">Связаться с нами</a>
      </li>
      <li>
        <a href="#!">Контакты</a>
      </li>
      <li>
        <a href="#!">Фотогалерея</a>
      </li>
    </ul>

  </div>
  <div class="col-md-3 mb-md-0 mb-3">
    <h5 class="text-uppercase">Контактные данные</h5>

    <ul class="list-unstyled">
      <li>
        <a href="#!">ООО «Рефкар»</a>
      </li>
      <li>
        <a href="#!">ИНН 2312226769</a>
      </li>
      <li>
        <a href="#!">2015 - 2019 гг</a>
      </li>
      <li>
        <a href="#!">Большевистская 324 <br/>
info@refcar.ru
</a>
      </li>
      <li>
      8 (800) 234-78-58 <br/>
ПН-ПТ с 09:00 до 18:00 <br/>
СБ-ВС - выходные<br/>

      </li>
    </ul>

  </div>
  

</div>
</div>




            </footer>
        )
    }
} 

 export default Footer;