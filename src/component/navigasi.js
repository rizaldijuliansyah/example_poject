import React from "react";
import '../App.scss';
import { Container, Nav, Row, Col } from "react-bootstrap";
import logo from "./img/Logo_Nomads.png";

class Navigasi extends React.Component{
    render(){
        return(
            <Nav className="nav">
                <Container>
                    <Row>
                        <Col>
                            <Nav.Item className="nav-image">
                                <Nav.Link href="#" className="image">
                                    <img 
                                    src={logo} 
                                    alt="LogoNomads" 
                                    className="image"
                                    width={150}/>
                                </Nav.Link>
                            </Nav.Item>
                        </Col>         
                        <Col>
                            <Nav.Item className="d-flex justify-content-end">
                                <Nav.Link href="#" className="nav-item">Features</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item className="d-flex justify-content-end">
                                <Nav.Link href="#" className="nav-item">Download</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item className="d-flex justify-content-end">
                                <Nav.Link href="#" className="nav-item text-white">About Us</Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Container>
            </Nav>
        );
    }
}

export default Navigasi;