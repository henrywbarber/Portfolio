import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import portrait from '../../assets/images/portrait.jpg';

function AboutMe() {
    return (
        <Container style={{ paddingTop: "5rem"}}>
            <Row>
                <Col style={{ padding: "8.5rem" }}>
                    <h1>Hello, I'm</h1>
                    <h1 style={{ fontFamily: "Comic Sans", fontSize: "4rem", fontWeight: "900", textAlign: "center", color: "#E85A4F" }}>Henry</h1>
                    <h2>Welcome to my portfolio!</h2>
                    <p>
                        I'm an aspiring problem solver at The University of Wisconsin - Madison. I'm currently pursuing a Bachelor of Science in Computer Science along with a Minor in Mathematics; expecting to graduate in May of 2025.
                    </p>
                    <p>
                        Some of my interests outside of class consist of road biking, intramural sports with friends, and listening to music.
                    </p>
                </Col>
                <Col style={{padding: "2.5rem", }}>
                    <img src={portrait} alt="Portrait of Author" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
