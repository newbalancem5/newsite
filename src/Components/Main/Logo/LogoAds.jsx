import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import Logotip from "../Logo/isuzu.png"
import Daf from '../Logo/daf.png'
import Hino from '../Logo/Hino.png'
// import Hyndai from '../Logo/Hyundai.gif'
import Iveco from '../Logo/iveco.png'

const LogoAds = () => {
    return(
        <div className="container">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image
                        width="100%"
                        src={Logotip} />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image
                        width="100%"
                        src={Daf}  />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image
                        width="100%"
                        src={Hino}  />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image
                        width="100%"
                        src={Iveco}  />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LogoAds;