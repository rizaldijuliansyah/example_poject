import React from "react";
import '../App.scss';
import { Container, Row, Col } from "react-bootstrap";
import logo from "./img/Logo_Nomads.png";
import food3 from "./img/food3.png";
import food4 from "./img/food4.png";

class Footer extends React.Component{
render (){
    return(
        <div className="footer-container">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            className="wave-image">
                <path 
                fill="#189e18" 
                fill-opacity="1" 
                d="M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,138.7C672,117,768,139,864,170.7C960,203,1056,245,1152,234.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
            <Container>
                <Row>
                    <Col xs={6}>
                        <img
                        src={logo}
                        alt="logo"
                        width={400}
                        />
                        <p>
                            DietBowl is a food order and delivery application
                            which helps you maintain a healthy diet by tracking
                            your nutritions according to your orders. It also 
                            provides you the service to consult a physician or
                            dietician to set a healthy diet which is perfect for 
                            your body.
                        </p>
                        <div className="subs-button">
                            <Row>
                                <Col>
                                <p>Subscribe to our newsletters to receive offers!</p>
                                </Col>
                                <Col xs={3}>
                                <button type="button">Subscribe</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <img
                        alt="makanan"
                        src={food3}
                        width={500}
                        className="footer-img"
                        />
                        <img
                        alt="makanan"
                        src={food4}
                        width={300}
                        className="footer-img1"
                        />
                    </Col>
                </Row>
                <Row className="footer-list text-white">
                    <Col xs={4}>
                        <ul>
                            <li className="list-title mb-2">Services</li>
                            <li>Meal Orders</li>
                            <li>Nutri Tracker</li>
                            <li>Consultation</li> 
                            <li>Kitchen Partners</li> 
                        </ul>
                    </Col>
                    <Col xs={4}>
                        <ul>
                            <li className="list-title mb-2">Contact</li>
                            <li>
                                Beach Road, White Town, <br></br>
                                Puducherry - 605003
                            </li>
                            <li></li>
                            <li>support@dietbowl.com</li>
                            <li></li>
                            <li>1800 - 10 - 123</li> 
                        </ul>
                    </Col>
                    <Col xs={4}>
                        <ul>
                            <li className="list-title mb-2">Follow Us</li>
                        </ul>
                    </Col>
                </Row>
        </Container>
        </div>
    );
}
}

export default Footer;