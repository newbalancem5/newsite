import React from 'react'
import { Button, Modal, FormControl, Form } from 'react-bootstrap'

class BootstrapModal extends React.Component {

  constructor() {
    super();
    this.state = {
      showHide: false
    }
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })

  }

  render() {
    return (
      <div>
        <Button className="SignUp" variant="primary" type="submit" onClick={() => this.handleModalShowHide()}>ЗАПИСАТЬСЯ</Button>
        <Modal show={this.state.showHide}>
          <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
            Закрыть
                    </Button>
          <form className="container" id="fs-frm" name="complaint-form" accept-charset="utf-8" action="https://formspree.io/info@refcar.ru" method="post">
            <div className="container" >
              <h1>Форма обратной связи</h1>
            </div>
            <div className="container">
              <Form.Label className="signup_title">Ф.И.О</Form.Label>
              <FormControl placeholder="Ф.И.О" name="name" id="full-name" required />
            </div>
            <div className="container">
              <Form.Label className="signup_title">Номер телефона  </Form.Label>
              <input class="form-control" type="tel" placeholder="8 999 999 99 99" name="telephone" id="telephone" required></input>
            </div>
            <div className="container">
              <Form.Label className="signup_title">Введите Email</Form.Label>
              <FormControl type="email" placeholder="Email" aria-label="With textarea" name="_replyto" id="email-address" />
            </div>
            <div className="container">
              <Form.Label className="signup_title">Комментарий</Form.Label>
              <FormControl as="textarea" aria-label="With textarea" name="complaint" id="complaint" required="" />
            </div>
            <div className="sendcontainer">
              <Button className="Send" variant="primary" type="submit">Отправить</Button>
            </div>
          </form>
        </Modal>
      </div>
    )
  }

}

export default BootstrapModal;