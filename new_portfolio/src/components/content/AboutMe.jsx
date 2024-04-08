import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import portrait from '../../assets/images/portrait.jpg';

function AboutMe() {
    return (
        <Container style={{ paddingTop: "5rem" }}>
            <Row>
                <Col xs={12} md={6} style={{ padding: "2.5rem", }}>
                    <h1 className="mb-4">Hello, I'm <span style={{ fontFamily: "Comic Sans", fontSize: "4rem", fontWeight: "900", color: "#E85A4F" }}>Henry</span></h1>
                    <h2>University of Wisconsin - Madison</h2>
                    <h2 style={{ fontSize: "1.5rem" }}>B.S. Computer Science & Mathematics Minor</h2>
                    <h2 className="mt-5">Welcome to my portfolio!</h2>
                    <p>
                        I'm an aspiring problem solver at The University of Wisconsin - Madison. I'm currently pursuing a Bachelor of Science in Computer Science along with a Minor in Mathematics; expecting to graduate in May of 2025.
                    </p>
                    <p>
                        Some of my interests outside of class consist of road biking, intramural sports with friends, and listening to music.
                    </p>
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <Image src={portrait} alt="Portrait of Henry" fluid style={{ maxWidth: '75%', height: 'auto' }} />
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
