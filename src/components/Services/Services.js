import React, { Component, Fragment } from 'react';
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import webIcon from "../../asset/image/web.svg";
import mobileIcon from "../../asset/image/mobile.svg";
import graphicsIcon from "../../asset/image/graphics.svg";
import { Container,Row ,Col} from 'react-bootstrap';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                <h1 className='ServiceTitle my-5'>My Services</h1>
                    <Row>
                        
                        <Col lg='4' md='6' sm='12'>
                        <div className='ServiceCard text-center'>
                                <img src={webIcon}/>
                                <h2 className='ServiceName'>Web Devlopement</h2>
                                <p className='ServicDesc'>I design and Devlopment Static and Dynamic Website as per your requirements as we belive web is world next home</p>
                                
                            </div>
                        </Col>
                        <Col lg='4' md='6' sm='12'>
                            <div className='ServiceCard text-center'>
                                <img src={mobileIcon}/>
                                <h2 className='ServiceName'>Mobile App Devlopement</h2>
                                <p className='ServicDesc'>I design and Devlopment Static and Dynamic Website as per your requirements as we belive web is world next home</p>

                            </div>
                        </Col>
                        <Col lg='4' md='6' sm='12'>
                        <div className='ServiceCard text-center'>
                                <img src={graphicsIcon}/>
                                <h2 className='ServiceName'>Graphics Design</h2>
                                <p className='ServicDesc'>I design and Devlopment Static and Dynamic Website as per your requirements as we belive web is world next home</p>

                            </div>
                        </Col>
                      
                        
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;