import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import portrait from '../../assets/images/portrait.jpg';

const AboutMe = () => {
    return (
        <Container style={{ paddingTop: "5rem" }}>
            <Row>
                <Col md={6}>
                    <Row> 
                        <div class="MyIntro">
                            <span class="Hello">Hello, I'm </span>
                            <span class="Henry">Henry</span>
                            <h3>University of Wisconsin - Madison</h3>
                            <h4>B.S. Computer Science & Mathematics Minor</h4>
                        </div>
                    </Row>
                    {/* Content will be hidden on large screens and up */}
                    <Row className="d-block d-md-none" style={{padding: "1rem 0 1rem 0"}}>
                        <Image
                            src={portrait}
                            alt="Portrait of Henry"
                            fluid
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '60vh',
                                objectFit: 'cover'
                            }}
                        />
                    </Row>
                    <Row>
                        <h2 class="Welcome">Welcome to my portfolio!</h2>
                        <p>
                            I'm an aspiring problem solver at The University of Wisconsin - Madison. I'm currently pursuing a Bachelor of Science in Computer Science along with a Minor in Mathematics; expecting to graduate in May of 2025.
                        </p>
                        <p>
                            Some of my interests outside of class consist of road biking, intramural sports with friends, and listening to music.
                        </p>
                    </Row>
                </Col>
                <Col md={6} className="d-none d-md-block">
                    <Image
                        src={portrait}
                        alt="Portrait of Henry"
                        fluid
                        style={{
                            padding: "2.5vh 0 0 5rem",
                            width: '100%',
                            height: 'auto',
                            maxHeight: '85vh',
                            objectFit: 'cover'
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;
