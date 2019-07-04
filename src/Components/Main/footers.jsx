import React from 'react';
import './Main.css'
import {FaFacebook} from 'react-icons/fa'
import {FaVk} from 'react-icons/fa'
import {FaYandex} from 'react-icons/fa'
import GisLogo from './Logo/gis.svg'


const Footers = () => (
  <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container">
          <div class="row row-30">
            <div class="col-md-4 col-xl-5">
              <div class="pr-xl-4">
                <p>Сервисный центр «Рефкар» это широкий выбор услуг от прохождения сервисного ТО грузового автомобиля и установки  дополнительного оборудования, до ремонта и холодильного оборудования и систем управления автомобилем.</p>
                <br/>
                <a href="https://www.facebook.com/RefCar.Russia" className="fa"><FaFacebook  className="fa"/ ></a>
                <a href=" https://vk.com/refcar_krasnodar" className="fa"><FaVk className="fa" /></a>
                <a href="https://yandex.ru/maps/org/1357447726" className="faya"> <FaYandex className="faya" />  </a>
                <a href="https://2gis.ru/krasnodar/firm/70000001018796423?fa821dba_ipp_key=v1561570610517%2Fv3394bdbf9a433ef5952ea5163aeca6afa04ab3%2F7oB7ygEPTeMY4gT%2Fjdgy2A%3D%3D&fa821dba_ipp_uid=1561570610516%2F8YU4OLABFFhQrP8I%2F9dsib5pW7evM8IQQYZoaYg%3D%3D&fa821dba_ipp_uid2=8YU4OLABFFhQrP8I%2F9dsib5pW7evM8IQQYZoaYg%3D%3D&fa821dba_ipp_uid1=1561570610516"  > <img src={GisLogo} alt="" className="icogisactive"/> </a>
              </div>
            </div>
            <div class="col-md-4">
             
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Контакты</h5>
              <dl className="contact-list">
                {/* <dt>ИНН</dt> */}
                <dd>ИНН - 2312226769</dd>
              </dl>
              <dl class="adress">
                {/* <dt>Адрес:</dt> */}
                <dd>г.Краснодар, ул.Большевистская 324</dd>
              </dl>
              <dl class="contact-list">
                {/* <dt>Телефон:</dt> */}
                <dd>+7 900 271-54-33                   
                  <br/>
                  {/* <dd>8 (800) 234-78-58  </dd> */}
                </dd>
              </dl>
              <dl class="">
                {/* <dt>Электроная почта:</dt> */}
                <a className="linkactive" href="mailto:#">info@refcar.ru</a>
              </dl>
            </div>
          </div>
        </div>
        <div class="row no-gutters social-container">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
  <div class="container text-center">
    <small>Copyright &copy; Your Website</small>
  </div>
</footer>
  );


export default Footers;  