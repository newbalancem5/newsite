import React from 'react'
import {  Col, Row, Image } from 'react-bootstrap'
import Isuzu from './logo/isuzu.svg'
import Ttm from './logo/12.png'
import Hino from './logo/hino.svg'
import Iveco from './logo/iveco.svg'
import Daf from './logo/daf2.svg'
import Mer from './logo/mercedes.svg'
import Hynday from './logo/hyundai.svg'
import Scania from './logo/scania.svg'
import Man from './logo/man.svg'
import Shmidt from './logo/schmit.svg'
import Krone from './logo/krones.svg'
import Koegel from './logo/16.png'
import Wabco from './logo/wabco.svg'
import Saf from './logo/saf.svg'
import Ashoks from './logo/2.png'
import Carrier from './logo/carrier.svg'
import Bpw from './logo/bpw.svg'
import Webasto from './logo/webasto.svg'
import './logo.css'


const LogoAds = () => {
    return (
        <div className="container" >

            <div className="">
                <div className="svgico">

                    <Row>
                        <Col xs={3}>
                            <Image
                                src={Koegel}
                                className="LogoImg"
                            />
                        </Col>
                        <Col xs={3}>
                            <Image
                                className="LogoImg3"
                                src={Ashoks} />
                        </Col>
                        <Col xs={3}>
                            <Image
                                className="LogoImgCarrier"
                                src={Carrier} />
                        </Col>
                        <Col>
                        </Col>
                    </Row>

                </div>
            </div>
            <div className="logos">
                <Row>
                    <Col xs={3} >
                        <Image
                            className="LogoImg1"
                            src={Hino} />
                    </Col>
                    <Col xs={3}>
                        <Image
                            className="LogoImg1"
                            src={Mer} />
                    </Col>
                    <Col xs={3}>
                        <Image
                            className="LogoImgH"
                            src={Hynday} />
                    </Col>
                    <Col xs={3}>
                        <Image
                            className="LogoImgBpw"
                            src={Bpw} />
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xs={3}>
                    <Image
                        className="LogoImg"
                        src={Man} />
                </Col>
                <Col xs={3}>
                    <Image
                        className="LogoImg"
                        src={Krone} />
                </Col>
                <Col xs={3}>
                    <Image
                        className="Logoimg2"
                        src={Scania} />
                </Col>
                <Col xs={3}>
                    <Image
                        className="LogoimgTtm"
                        src={Ttm} />
                </Col>
            </Row>

            <Row>
                <Col xs={3}>
                    <Image
                        className="LogoImg"
                        src={Daf} />
                </Col>
                <Col xs={3}>
                    <Image
                        className="LogoImgIsuzu"
                        src={Isuzu} />
                </Col>
                <Col xs={3}>
                    <Image
                        className="LogoImg"
                        src={Iveco} />
                </Col>
                <Col xs={3}>
                    <Image
                        className="LogoImg"
                        src={Koegel} />
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    <Image
                        className="LogoImg"
                        src={Wabco} />
                </Col>
                <Col xs={3}>
                    <Image
                        className="LogoImgSaf"
                        src={Saf} />
                </Col>
                <Col xs={3}>
                    <Image
                        className="LogoImg"
                        src={Shmidt} />
                </Col>
                <Col xs={3}>
                    <Image
                        className="LogoImgWeb"
                        src={Webasto} />
                </Col>
            </Row>


        </div>
    )
}

export default LogoAds;