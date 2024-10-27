import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import portrait from '../../assets/images/portrait.jpg';
import CPPlogo from '../../assets/icons/icons8-c-48.svg';
import Javalogo from '../../assets/icons/icons8-java-48.svg';
import Pythonlogo from '../../assets/icons/icons8-python-48.svg';
import SQLlogo from '../../assets/icons/icons8-mysql-48.svg';
import VSlogo from '../../assets/icons/icons8-visual-studio-48.svg';
import Jiralogo from '../../assets/icons/icons8-jira-48.svg';
import './About.css'; // Assuming you'll create a separate CSS file for styling

const About = () => {
    return (
        <Container className="about-section">
            <Row className="text-center mb-5">
                <Col>
                    <h1>About</h1>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                    <Image
                        src={portrait}
                        alt="Portrait of Henry"
                        fluid
                        className="about-image"
                    />
                </Col>
            </Row>

            <Row className="text-center mb-4">
                <Col>
                    <h2>Welcome to my portfolio!</h2>
                    <p>
                        I'm an aspiring problem solver at The University of Wisconsin - Madison. I'm currently pursuing a Bachelor of Science in Computer Science along with a Minor in Mathematics; expecting to graduate in May of 2025.
                    </p>
                    <p>
                        Some of my interests outside of class consist of anything and everything biking, playing intramural sports with friends, and exploring the depths of Spotify.
                    </p>
                </Col>
            </Row>

            <Row style={{ paddingTop: "10vh" }}>
                <Col>
                    <h2 style={{ textAlign: "center", paddingBottom: "0.75rem" }}>My Skills</h2>
                    <Row xs={2} md={3} className="g-4 text-center">
                        <Col>
                            <img src={CPPlogo} alt="C++" loading="lazy" className="icon" />
                        </Col>
                        <Col>
                            <img src={Javalogo} alt="Java" loading="lazy" className="icon" />
                        </Col>
                        <Col>
                            <img src={Pythonlogo} alt="Python" loading="lazy" className="icon" />
                        </Col>
                        <Col>
                            <img src={SQLlogo} alt="MySQL" loading="lazy" className="icon" />
                        </Col>
                        <Col>
                            <img src={VSlogo} alt="Visual Studio" loading="lazy" className="icon" />
                        </Col>
                        <Col>
                            <img src={Jiralogo} alt="Jira" loading="lazy" className="icon" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
