import React from "react";
import '../App.scss';
import { Container, Row, Col } from "react-bootstrap";
import member1 from "./img/member1.png";
import member2 from "./img/member2.png";
import member3 from "./img/member3.png";
import member4 from "./img/member4.png";
import member5 from "./img/member5.png";

class Testimonial extends React.Component{
render (){
    return(
        <Container className="testi-container">
            <div className="testi-selected">
            <h1 className="ms-4 title-testi">Testimonials</h1>
            <Row>
                <Col xs={4} className="ms-4 testi-item">
                    <img
                    src={member1}
                    alt="Testimonial-1"
                    width={280}
                    className="testi-image"
                    />
                </Col>
                <Col xs={5} className="testi-item">
                    <h2>Frederico Willy</h2>
                    <br></br>
                    <p>
                        Being a gym freak, the Nutri Tracker feature has 
                        helped me a lot in maintaining a healthy diet 
                        and by far is the best feature of the application.
                    </p>
                </Col>
                <Col xs={2} className="testi-item">
                    <Row>
                        <img
                        src={member2}
                        alt="Testimonial-2"
                        className="testi-image-2"
                        />
                    </Row>
                    <Row>
                        <img
                        src={member3}
                        alt="Testimonial-3"
                        className="testi-image-3"
                        />
                    </Row>
                    <Row>
                        <img
                        src={member4}
                        alt="Testimonial-4"
                        className="testi-image-4"
                        />
                    </Row>
                    <Row>
                        <img
                        src={member5}
                        alt="Testimonial-5"
                        className="testi-image-5"
                        />
                    </Row>
                </Col>
            </Row>
            </div>
        </Container>
    );
}
}

export default Testimonial;