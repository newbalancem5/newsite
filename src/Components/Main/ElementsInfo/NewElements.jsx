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
              <p className="elementsinfotitle">– Регулярное техническое обслуживание</p>
              <p className="elementsinfotitle">– Плановое техническое обслуживание</p>
              <p className="elementsinfotitle">– Диагностическую проверку</p>
              <p className="elementsinfotitle">– И другие работы</p>
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
              <p className="elementsinfotitle">– Своя площадка для ремонта и обслуживания автомобилей</p>
              <p className="elementsinfotitle">– Оформление договора на сотрудничество и заказ-наряда</p>
              <p className="elementsinfotitle">– Ведение справочника исполнительных работ </p>
              <p className="elementsinfotitle">– Возможность оплаты через выставление счета</p>
              <p className="elementsinfotitle">– Согласование запчастей по качеству</p>
              <p className="elementsinfotitle">– Утверждение сроков ремонта</p>
              <p className="elementsinfotitle">– Гарантия на все виды работ </p>
              <p className="elementsinfotitle">– И другие работы</p>
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
              <p className="elementsinfotitle">Работы проводятся по требованиям и рекомендациям производителя оборудования с обучением сотрудников СТО</p>
              <p className="elementsinfotitle">– И другие работы</p>
              
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
              <p className="elementsinfotitle">– Монтаж пневмо-подушек</p>
              <p className="elementsinfotitle">– Установка и обслуживание КМУ </p>
              <p className="elementsinfotitle">– Установка гидробортов</p>
              <p className="elementsinfotitle">– Установка воздушных и жидкосных отопителей</p>
              <p className="elementsinfotitle">– Монтаж кондиционеров в штатное место </p>
              <p className="elementsinfotitle">– Монтаж стояночных кондиционеров</p>
              <p className="elementsinfotitle">– Монтаж и установка ADR пакета</p>
              <p className="elementsinfotitle">– И другие работы</p>
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
              <p className="elementsinfotitle">– Ремонт стабилизаторов поперечной устойчивости</p>
              <p className="elementsinfotitle">– Промывка гидросистемы и замена жидкости</p>
              <p className="elementsinfotitle">– Регулировка/ремонт балансира</p>
              <p className="elementsinfotitle">– Замена сальника ступицы колеса</p>
              <p className="elementsinfotitle">– Регулировка осей грузового автомобиля и прицепа </p>
              <p className="elementsinfotitle">– Ремонт реактивных штанг</p>
              <p className="elementsinfotitle">– И другие работы</p>
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
              <p className="elementsinfotitle">– Ремонт суппорта дискового тормоза</p>
              <p className="elementsinfotitle">– Замена тормозных колодок</p>
              <p className="elementsinfotitle">– Диагностика и ремонт АБС</p>
              <p className="elementsinfotitle">– Проточка и замена тормозных барабанов</p>
              <p className="elementsinfotitle">– И другие работы</p>
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
              <p className="elementsinfotitle">– Замена сайлентблоков</p>
              <p className="elementsinfotitle">– Ремонт и замена амортизаторов</p>
              <p className="elementsinfotitle">– Замена реактивных штанг</p>
              <p className="elementsinfotitle">– Замена и переборка рессор</p>
              <p className="elementsinfotitle">– И другие работы</p>
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
                <p className="elementsinfotitle">– Замена сайлентблоков</p>
                <p className="elementsinfotitle">– Ремонт и замена амортизаторов</p>
                <p className="elementsinfotitle">– Замена реактивных штанг</p>
                <p className="elementsinfotitle">– Замена и переборка рессор</p>
                <p className="elementsinfotitle">– И другие работы</p>
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
                <p className="elementsinfotitle">– Измерение ЭДС </p>
                <p className="elementsinfotitle">– Очистка корпуса аккумуляторной батареи </p>
                <p className="elementsinfotitle">– Диагностика АКБ перед зимой</p>
                <p className="elementsinfotitle">– И другие работы</p>
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
                <p className="elementsinfotitle">– Диагностика коробки передач</p>
                <p className="elementsinfotitle">– Замена технических жидкостей</p>
                <p className="elementsinfotitle">– И другие работы</p>
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
                <p className="elementsinfotitle">– Капитальный ремонт ДВС</p>
                <p className="elementsinfotitle">– Замена сальников и прокладок</p>
                <p className="elementsinfotitle">– Промывка системы охлаждения</p>
                <p className="elementsinfotitle">– Прочая замена навесных деталей двигателя</p>
                <p className="elementsinfotitle">– И другие работы</p>
            </div>
        </Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
    <Accordion defaultActiveKey="0">
    <Card className="CardElementsInfo">
        <Accordion.Toggle as={Card.Header} eventKey="1" >
        <p className="lineabout">Ремонт и тех. обслуживание авторефрижераторов</p> 
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Card.Body>
            <div className="container">
                <p className="elementsinfotitle">– Заправка/дозаправка фреоном</p>
                <p className="elementsinfotitle">– Промывка системы рефрижератора</p>
                <p className="elementsinfotitle">– Поиск и устранение утечк</p>
                <p className="elementsinfotitle">– Проверка крепления проводов и шлангов</p>
                <p className="elementsinfotitle" >– Проверка ремней на повреждения и натяжение</p>
                <p className="elementsinfotitle">– Проверка защитных датчиков</p>
                <p className="elementsinfotitle">– Проверка начала и окончания оттайки</p>
                <p className="elementsinfotitle">– Замена конденсатора</p>
                <p className="elementsinfotitle">– И другие работы</p>
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
                <p className="elementsinfotitle">– Чистка конденсатора</p>
                <p className="elementsinfotitle">– Замена компрессоров</p>
                <p className="elementsinfotitle">– И другие работы</p>
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