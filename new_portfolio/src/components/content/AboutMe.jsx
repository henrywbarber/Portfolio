import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import portrait from '../../assets/images/portrait.jpg';

const AboutMe = () => {
    return (
        <Container style={{ paddingTop: "5rem" }}>
            <Row>
                <Col xs={12} md={6} style={{ paddingRight: "1rem" }}>
                    <div>
                        <span style={{ fontWeight: "bold", fontSize: "3rem" }}>Hello, I'm </span>
                        <span style={{ fontFamily: "Comic Sans", fontSize: "4rem", fontWeight: "900", color: "#6482AD" }}>Henry</span>
                        <h3>University of Wisconsin - Madison</h3>
                        <h4 style={{ fontSize: "1.15rem" }}>B.S. Computer Science & Mathematics Minor</h4>
                    </div>
                    <div style={{ padding: "4rem 0 1rem" }}>
                        <h2>Welcome to my portfolio!</h2>
                        <p style={{ padding: "1rem 0" }}>
                            I'm an aspiring problem solver at The University of Wisconsin - Madison. I'm currently pursuing a Bachelor of Science in Computer Science along with a Minor in Mathematics; expecting to graduate in May of 2025.
                        </p>
                        <p style={{ margin: "1rem 0" }}>
                            Some of my interests outside of class consist of road biking, intramural sports with friends, and listening to music.
                        </p>
                    </div>            
                </Col>
                <Col xs={12} md={6} style={{ padding: "1.25rem 2.5rem" }}>
                    <Image
                        src={portrait}
                        alt="Portrait of Henry"
                        fluid
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '80vh',
                            objectFit: 'cover'
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;
