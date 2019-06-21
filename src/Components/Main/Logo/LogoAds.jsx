import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import Logotip from "../Logo/isuzus.png"
import Daf from '../Logo/daf.svg'
import Hino from '../Logo/Hinos.png'
import Hynday from '../Logo/Hyunday.png'
import Iveco from '../Logo/ivecos.svg'
import Merin from '../Logo/Mercedess.png'

const LogoAds = () => {
    return(
        <div className="container">
            <Container>
                <Row>
                    <Col xs={3} >
                        <Image
                        width="100%"
                        src={Logotip} />
                    </Col>
                    <Col xs={3}>
                        <Image
                        width="100%"
                        src={Daf}  />
                    </Col>
                    <Col xs={3}>
                        <Image
                        width="100%"
                        src={Hino}  />
                    </Col>
                    <Col xs={3}>
                        <Image
                        width="100%"
                        src={Iveco}  />
                    </Col>
                    <Col xs={3}>
                    <Image
                    width="100%"
                    src={Merin} />
                    </Col>
                    <Col xs={3}>
                    <Image
                    width="100%"
                    src={Hynday} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LogoAds;