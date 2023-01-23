import React from "react";
import '../App.scss';
import { Container, Row, Col } from "react-bootstrap";
import phone from "./img/phone.png";
import phone2 from "./img/phone2.png"

class Download extends React.Component{
render (){
    return(
        <Container className="download-container">
            <Row>
                <Col xs={4}>
                    <img
                    alt="phone"
                    src={phone2}
                    width={600}
                    className="unduh-image"
                    />
                    <img
                    alt="phone"
                    src={phone}
                    width={500}
                    className="unduh-image1"
                    />
                </Col>
                <Col xs={6} className="unduh-item">
                    <h1>Download App</h1>
                    <p>Install the app and ordering now !!!</p>
                </Col>
            </Row>
        </Container>
    );
}
}

export default Download;