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
                <a href="https://www.facebook.com/RefCar.Russia" target="_blank" className="fa"><FaFacebook  className="fa"/ ></a>
                <a href=" https://vk.com/refcar_krasnodar" target="_blank" className="fa"><FaVk className="fa" /></a>
                <a href="https://yandex.ru/maps/org/1357447726" target="_blank" className="faya"> <FaYandex className="faya" />  </a>
                <a href="https://2gis.ru/krasnodar/firm/70000001018796423?fa821dba_ipp_key=v1561570610517%2Fv3394bdbf9a433ef5952ea5163aeca6afa04ab3%2F7oB7ygEPTeMY4gT%2Fjdgy2A%3D%3D&fa821dba_ipp_uid=1561570610516%2F8YU4OLABFFhQrP8I%2F9dsib5pW7evM8IQQYZoaYg%3D%3D&fa821dba_ipp_uid2=8YU4OLABFFhQrP8I%2F9dsib5pW7evM8IQQYZoaYg%3D%3D&fa821dba_ipp_uid1=1561570610516" target="_blank"  > <img src={GisLogo} alt="" className="icogisactive"/> </a>
              </div>
            </div>
            <div class="col-md-4">
            {/* <iframe src="https://yandex.ru/map-widget/v1/-/CCgp5V6m" width="350" height="200" frameborder="1" allowfullscreen="true"></iframe> */}
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Контакты</h5>
              <dl className="contact-list">
                <dd>ИНН - 2312226769</dd>
              </dl>
              <dl class="adress">
                <dd>г.Краснодар, ул.Большевистская 324</dd>
              </dl>
              <dl class="contact-list">
                <dd>+7 900 271-54-33                   
                  <br/>
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
          <div class="col">
            
          </div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
  <div class="container text-center">
  <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ada543b2d9609f17dc561ef070614a33944f05d077f66ba003797e97c31570a19&amp;width=320&amp;height=320&amp;lang=ru_RU&amp;scroll=true"></script>
    <small>Copyright &copy; Your Website</small>
  </div>
</footer>
  );

export default Footers;