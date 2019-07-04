import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import Isuzu from './logo/isuzu.svg'
import Daf from './logo/daf(2).svg'
import Hino from './logo/hino.svg'
import Iveco from './logo/iveco.svg'
import Mer from './logo/mercedes-benz.svg'
import Hynday from './logo/hyundai.svg'
import Scania from './logo/scania-2.svg'
import Man from './logo/man-2.svg'
import Shmidt from './logo/schmitz.svg'
import Krone from './logo/krones.svg'
import Koegel from './logo/Koegel.svg'
import Wabco from './logo/wabco.svg'
import Ashok from './logo/ashok.svg'
import Saf from './logo/saf.svg'
import Bpw from './logo/bpw.svg'
import './logo.css'

const LogoAds = () => {
    return(
        <div className="container" >
            <Container>
                <div className="container">
                <Row>
                    <Col xs={3} >
                        <Image
                        className="LogoImg"
                        src={Isuzu} />
                    </Col>
                    <Col xs={3}>
                        <Image
                        className="LogoImg"
                        src={Daf}  />
                    </Col>
                    <Col xs={3}>
                        <Image
                        className="LogoImg"
                        src={Hino}  />
                    </Col>
                    <Col xs={3}>
                        <Image
                        className="LogoImg"
                        src={Iveco}  />
                    </Col>
                </Row>
                </div>
            </Container>
            <div className="container">
                <Row>
                <Col xs={3}>
                    <Image
                    className="LogoImg"
                    src={Mer} />
                    </Col>
                    <Col xs={3}>
                    <Image
                    className="LogoImg"
                    src={Hynday} />
                    </Col>
                    <Col xs={3}>
                    <Image
                    className="Logoimg2"
                    src={Scania}/>
                    </Col>
                    <Col xs={3}>
                    <Image
                    className="Logoimg2"
                    src={Man}/>
                    </Col>
                </Row>
            </div>
            
            <div className="container">
                <Row>
                <Col xs={3}>
                    <Image
                    className="LogoImg"
                    src={Wabco} />
                </Col>
                <Col xs={3}>
                    <Image
                    className="LogoImg"
                    src={Shmidt} />
                    </Col>
                    <Col xs={3}>
                    <Image
                    className="LogoImg"
                    src={Krone} />
                    </Col>
                    <Col>
                    <Image
                    className="LogoImg3"
                    src={Ashok}
                    />
                    </Col>
                </Row>
            </div>
            <div className="svgico">
            <div className="container">
                
                <Row>
                <Col xs={3}>
                    <Image
                    src={Bpw}
                    className="LogoImg"
                    />
                </Col>
                <Col xs={3}>
                <Image
                    className="LogoImg3"
                    src={Koegel} />
                    </Col>
                    <Col xs={3}>
                    <Image
                    className="Saf"
                    src={Saf} />
                    </Col>
                    <Col>
                   
                    
                    </Col>
                </Row>
                </div>
            </div>
            
        </div>
    )
}

export default LogoAds;