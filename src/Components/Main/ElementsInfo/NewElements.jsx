import React,{Component} from 'react'
import './ElementsInfo.css'
import { Row, Col, Card, Accordion} from 'react-bootstrap';


class NewElement extends Component{
    render(){
        return(
            <div className="about">
                <div className="container">
                    <h2 className="titleinfo">Услуги компании</h2>
                </div>
                <div className="container">
                    <Row>
                        <Col>
                            <div className="CompanyServices">
                            <Accordion defaultActiveKey="0">
  <Card className="CardElementsInfo">
    <Accordion.Toggle as={Card.Header} eventKey="1" >
       <p className="lineabout">Техническое обслуживание</p> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="container">
              <p className="lineabout">– Регулярное техническое обслуживание</p>
              <p className="lineabout">– Плановое техническое обслуживание</p>
              <p className="lineabout">– Диагностическую проверку</p>
          </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card className="CardElementsInfo">
    <Accordion.Toggle as={Card.Header} eventKey="1" >
       <p className="lineabout">Работа с корпоративными клиентами</p> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="container">
              <p className="lineabout">– Своя площадка для ремонта и обслуживания автомобилей</p>
              <p className="lineabout">– Оформление договора на сотрудничество и заказ-наряда</p>
              <p className="lineabout">– Ведение справочника исполнительных работ </p>
              <p className="lineabout">– Возможность оплаты через выставление счета</p>
              <p className="lineabout">– Согласование запчастей по качеству</p>
              <p className="lineabout">– Утверждение сроков ремонта</p>
              <p className="lineabout">– Гарантия на все виды работ </p>
          </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> 
<Accordion defaultActiveKey="0">
  <Card className="CardElementsInfo">
    <Accordion.Toggle as={Card.Header} eventKey="1" >
       <p className="lineabout">Регламентные работы по техобслуживанию</p> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="container">
              <p className="lineabout">– Работы проводятся по требованиям и рекомендациям производителя оборудования с обучением сотрудников СТО</p>
              
          </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> 
<Accordion defaultActiveKey="0">
  <Card className="CardElementsInfo">
    <Accordion.Toggle as={Card.Header} eventKey="1" >
       <p className="lineabout">Установка и обслуживание доп. оборудования</p> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="container">
              <p className="lineabout">– Монтаж пневмо-подушек</p>
              <p className="lineabout">– Установка и обслуживание КМУ </p>
              <p className="lineabout">– Установка гидробортов</p>
              <p className="lineabout">– Установка воздушных и жидкосных отопителей</p>
              <p className="lineabout">– Монтаж кондиционеров в штатное место </p>
              <p className="lineabout">– Монтаж накрышников кондиционера</p>
              <p className="lineabout">– Монтаж и установка ADR пакета</p>
          </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> 
<Accordion defaultActiveKey="0">
  <Card className="CardElementsInfo">
    <Accordion.Toggle as={Card.Header} eventKey="1" >
       <p className="lineabout">Ремонт ходовой части автомобиля</p> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="container">
              <p className="lineabout">– Ремонт стабилизаторов поперечной устойчивости</p>
              <p className="lineabout">– Промывка гидросистемы и замена жидкости</p>
              <p className="lineabout">– Регулировка/ремонт балансира</p>
              <p className="lineabout">– Замена сальника ступицы колеса</p>
              <p className="lineabout">– Регулировка осей грузового автомобиля и прицепа </p>
              <p className="lineabout">– Ремонт реактивных штанг</p>
          </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card className="CardElementsInfo">
    <Accordion.Toggle as={Card.Header} eventKey="1" >
       <p className="lineabout">Ремонт тормозной системы</p> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="container">
              <p className="lineabout">– Ремонт суппорта дискового тормоза</p>
              <p className="lineabout">– Замена тормозных колодок</p>
              <p className="lineabout">– Диагностика и ремонт АБС</p>
              <p className="lineabout">– Проточка и замена тормозных барабанов</p>
          </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card className="CardElementsInfo">
    <Accordion.Toggle as={Card.Header} eventKey="1" >
       <p className="lineabout">Замена деталей узлов ходовой части и подвески</p> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <div className="container">
              <p className="lineabout">– Замена сайлентблоков</p>
              <p className="lineabout">– Ремонт и замена амортизаторов</p>
              <p className="lineabout">– Замена реактивных штанг</p>
              <p className="lineabout">– Замена и переборка рессор</p>
          </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
                            </div>
                        </Col>
                        <Col>
                        <div className="CompanyServices">
                        <Accordion defaultActiveKey="0">
    <Card className="CardElementsInfo">
        <Accordion.Toggle as={Card.Header} eventKey="1" >
        <p className="lineabout">Замена узлов рулевого управления</p> 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Card.Body>
            <div className="container">
                <p className="lineabout">– Замена сайлентблоков</p>
                <p className="lineabout">– Ремонт и замена амортизаторов</p>
                <p className="lineabout">– Замена реактивных штанг</p>
                <p className="lineabout">– Замена и переборка рессор</p>
            </div>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
    <Accordion defaultActiveKey="0">
    <Card className="CardElementsInfo">
        <Accordion.Toggle as={Card.Header} eventKey="1" >
        <p className="lineabout">Обслуживание и ремонт АКБ</p> 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Card.Body>
            <div className="container">
                <p className="lineabout">– Измерение ЭДС </p>
                <p className="lineabout">– Очистка корпуса аккумуляторной батареи </p>
                <p className="lineabout">– Диагностика АКБ перед зимой</p>
            </div>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
    <Accordion defaultActiveKey="0">
    <Card className="CardElementsInfo">
        <Accordion.Toggle as={Card.Header} eventKey="1" >
        <p className="lineabout">Ремонт КПП ZF</p> 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Card.Body>
            <div className="container">
                <p className="lineabout">– Диагностика коробки передач</p>
                <p className="lineabout">– Замена технических жидкостей</p>
                <p className="lineabout">– Замена КПП ZF</p>
            </div>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
    <Accordion defaultActiveKey="0">
    <Card className="CardElementsInfo">
        <Accordion.Toggle as={Card.Header} eventKey="1" >
        <p className="lineabout">Ремонт ДВС</p> 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Card.Body>
            <div className="container">
                <p className="lineabout">– Капитальный ремонт ДВС</p>
                <p className="lineabout">– Замена сальников и прокладок</p>
                <p className="lineabout">– Промывка системы охлаждения</p>
                <p className="lineabout">– Замена деталей</p>
            </div>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
                            <p className="lineabout">Ремонт и тех. обслуживание авторефрижераторов</p>
                            <p className="lineabout">Ремонт и тех. обслуживание кондиционеров</p>
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>
           
        )
    }
}


export default NewElement;