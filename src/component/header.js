import React from "react";
import '../App.scss';
import { Container, Row, Col } from "react-bootstrap";
import food from "./img/food.png";
import food2 from "./img/food2.png"

class Header extends React.Component{
render (){
    return(
        <Container className="header-container">
            <Row>
                <Col>
                    <div className="header-content ">
                        <h1>
                            Healthy Food,
                            Healthy Life.
                        </h1>
                        <p>
                            Order food according to nutritions values and <br></br>
                            get food recomendations based on your <br></br>
                            health conditions.
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="circle">
                        <img
                        src={food}
                        alt="makanan"
                        width={500}
                        className="header-image"
                        />
                        <img
                        src={food2}
                        alt="makanan"
                        width={200}
                        className="header-image2"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
}

export default Header;