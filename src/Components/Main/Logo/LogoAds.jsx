import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import Isuzu from './logo/isuzu.svg'
import Daf from './logo/daf(2).svg'
import Hino from './logo/hino.svg'
import Iveco from './logo/iveco-1.svg'
import Mer from './logo/mercedes-benz.svg'
import Hynday from './logo/hyundai.svg'
import Scania from './logo/scania-2.svg'
import Man from './logo/man-2.svg'
import Shmidt from './logo/schmidt-1.svg'
import Krone from './logo/krone.svg'

const LogoAds = () => {
    return(
        <div className="container">
            <Container>
                <div className="container">
                <Row>
                    <Col xs={3} >
                        <Image
                        width="50%"
                        src={Isuzu} />
                    </Col>
                    <Col xs={3}>
                        <Image
                        width="50%"
                        src={Daf}  />
                    </Col>
                    <Col xs={3}>
                        <Image
                        width="50%"
                        src={Hino}  />
                    </Col>
                    <Col xs={3}>
                        <Image
                        width="50%"
                        src={Iveco}  />
                    </Col>
                </Row>
                </div>
            </Container>
            <div className="container">
                <Row>
                <Col xs={3}>
                    <Image
                    width="50%"
                    src={Mer} />
                    </Col>
                    <Col xs={3}>
                    <Image
                    width="50%"
                    src={Hynday} />
                    </Col>
                    <Col xs={3}>
                    <Image
                    width="60%"
                    src={Scania}/>
                    </Col>
                    <Col xs={3}>
                    <Image
                    width="60%"
                    src={Man}/>
                    </Col>
                </Row>
            </div>
            
            <div className="container">
                <Row>
                <Col xs={3}>
                </Col>
                <Col xs={3}>
                    <Image
                    width="50%"
                    src={Shmidt} />
                    </Col>
                    <Col xs={3}>
                    <Image
                    width="50%"
                    src={Krone} />
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}

export default LogoAds;