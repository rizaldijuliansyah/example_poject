import React from "react";
import '../App.scss';
import { Container, Row, Col } from "react-bootstrap";
import phone from "./img/phone.png";

class Features extends React.Component{
    render(){
        return(
                <Container className="features-container">
                    <Row>
                        <Col>
                            <div className="box">
                                <img
                                src={phone}
                                alt="phone"
                                width={600}
                                className="features-image"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="features-content ">
                                <h1>
                                    Track Nutritions
                                </h1>
                                <p>
                                    Maintain a healthy diet by tracking your <br></br>
                                    consumption of nutritions and calories on <br></br>
                                    the basis of your orders... <span>know more</span>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default Features;