import React, { Component } from 'react'
import './ElementsInfo.css'
import { Row, Col, Card, Accordion } from 'react-bootstrap';


class NewElement extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <h2 className="titleinfo">Услуги компании</h2>
        </div>
        <div className="container">
          <Row>
            <Col lg className="paddingelement">
              <div className="CompanyServices">
                <Accordion defaultActiveKey="0">
                  <Card className="CardElementsInfo">
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                      <p className="lineabout">Регулярное (плановое) обслуживание</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="container">
                          <p className="elementsinfotitle">– Замена масла</p>
                          <p className="elementsinfotitle">– Замена топливных, масляных и воздушных фильтров</p>
                          <p className="elementsinfotitle">– Контрольно-диагностические работы</p>
                          <p className="elementsinfotitle">– Прочие виды работ, рекомендованные производителем при проведении регламентного обслуживания</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Card className="CardElementsInfo">
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                      <p className="lineabout">Ремонт ходовой части и трансмиссии</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="container">
                          <p className="elementsinfotitle">– Ремонт рулевого управления</p>
                          <p className="elementsinfotitle">– Регулировка угла схождения колес</p>
                          <p className="elementsinfotitle">– Замена подшипников ступиц колес</p>
                          <p className="elementsinfotitle">– Замена шкворней</p>
                          <p className="elementsinfotitle">– Ремонт рессор</p>
                          <p className="elementsinfotitle">– Замена втулок рессор</p>
                          <p className="elementsinfotitle">– Замена втулок крепления кабины</p>
                          <p className="elementsinfotitle">– Замена крестовин карданного вала</p>
                          <p className="elementsinfotitle">– Смазка ходовой части</p>
                          <p className="elementsinfotitle">– Замена дисков сцепления</p>
                          <p className="elementsinfotitle">– Ремонт реактивных штанг</p>
                          <p className="elementsinfotitle">– Замена амортизаторов</p>
                          <p className="elementsinfotitle">– Ремонт стабилизаторов поперечной устойчивости</p>
                          <p className="elementsinfotitle">– Промывка гидросистемы и замена жидкости</p>
                          <p className="elementsinfotitle">– Регулировка/ремонт балансира</p>
                          <p className="elementsinfotitle">– Замена сальника ступицы колеса</p>
                          <p className="elementsinfotitle">– Регулировка осей грузового автомобиля и прицепа</p>
                          <p className="elementsinfotitle">– Прочие виды работ по ремонту и обслуживания ходовой части и трансмиссии</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Card className="CardElementsInfo">
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                      <p className="lineabout">Ремонт тормозной  системы</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="container">
                          <p className="elementsinfotitle">– Замена тормозных колодок (дисковые и барабанные тормоза)</p>
                          <p className="elementsinfotitle">– Замена тормозных рычагов</p>
                          <p className="elementsinfotitle">– Ремонт\замена энергоаккумуляторов</p>
                          <p className="elementsinfotitle">– Ремонт тормозных камер</p>
                          <p className="elementsinfotitle">– Ремонт суппортов</p>
                          <p className="elementsinfotitle">– Ремонт пневматических тормозных систем</p>
                          <p className="elementsinfotitle">– Проточка и замена тормозных барабанов</p>
                          <p className="elementsinfotitle">– Прочие виды работ по ремонту и обслуживания тормозных систем</p>
                          <p className="elementsinfotitle">– Диагностика и ремонт ABS</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Card className="CardElementsInfo">
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                      <p className="lineabout">Капитальный и текущий ремонты агрегатов</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="container">
                          <p className="elementsinfotitle">– Текущий и капитальный ремонт двигателя</p>
                          <p className="elementsinfotitle">– Текущий и капитальный ремонт КПП (ZF, EATON)</p>
                          <p className="elementsinfotitle">– Текущий и капитальный ремонт редукторов заднего моста</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Col>
            <Col lg className="paddingelement">
              <div className="CompanyServices">

                <Accordion defaultActiveKey="0">
                  <Card className="CardElementsInfo">
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                      <p className="lineabout">Ремонт электрооборудования</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="container">
                          <p className="elementsinfotitle">– Поиск и устранение неисправностей работы электрооборудования</p>
                          <p className="elementsinfotitle">– Ремонт генератора</p>
                          <p className="elementsinfotitle">– Замена лампочек головного и заднего освещения</p>
                          <p className="elementsinfotitle">– Контроль состояния и зарядка аккумуляторов</p>
                          <p className="elementsinfotitle">– Диагностика и ремонт ABS</p>
                          <p className="elementsinfotitle">– Прочие работы по ремонту и обслуживанию электрооборудования</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Card className="CardElementsInfo">
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                      <p className="lineabout">Установка дополнительного оборудования</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="container">
                          <p className="elementsinfotitle">– Монтаж дополнительных пневмоподушек</p>
                          <p className="elementsinfotitle">– Установка и обслуживание КМУ</p>
                          <p className="elementsinfotitle">– Установка гидробортов</p>
                          <p className="elementsinfotitle">– Установка воздушных и жидкостных отопителей</p>
                          <p className="elementsinfotitle">– Монтаж кондиционеров в штатное место</p>
                          <p className="elementsinfotitle">– Монтаж стояночных кондиционеров</p>
                          <p className="elementsinfotitle">– Монтаж и установка ADR пакета</p>
                          <p className="elementsinfotitle">– Монтаж и ремонт фургонов</p>
                          <p className="elementsinfotitle">– И другие работы</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Card className="CardElementsInfo">
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                      <p className="lineabout">Ремонт и тех.обслуживание авторефрижераторов</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="container">
                          <p className="elementsinfotitle">– Заправка/дозаправка фреоном</p>
                          <p className="elementsinfotitle">– Промывка системы рефрижератора</p>
                          <p className="elementsinfotitle">– Поиск и устранение утечек</p>
                          <p className="elementsinfotitle">– Проверка крепления проводов и шлангов</p>
                          <p className="elementsinfotitle">– Проверка ремней на повреждения и натяжение</p>
                          <p className="elementsinfotitle">– Проверка защитных датчиков</p>
                          <p className="elementsinfotitle">– Проверка начала и окончания оттайки</p>
                          <p className="elementsinfotitle">– Замена конденсатора</p>
                          <p className="elementsinfotitle">– Прочие работы по обслуживания рефрижераторов</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Card className="CardElementsInfo">
                    <Accordion.Toggle as={Card.Header} eventKey="1" >
                      <p className="lineabout">Ремонт и тех. обслуживание кондиционеров</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="container">
                          <p className="elementsinfotitle">– Заправка фреоном</p>
                          <p className="elementsinfotitle">– Заправка маслом</p>
                          <p className="elementsinfotitle">– Очистка конденсатора</p>
                          <p className="elementsinfotitle">– Замена компрессора</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

              </div>
            </Col>
          </Row>
        </div>
      </div>

    )
  }
}


export default NewElement;