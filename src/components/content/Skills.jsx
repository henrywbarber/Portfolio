import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CPPlogo from '../../assets/icons/icons8-c-48.svg';
import Javalogo from '../../assets/icons/icons8-java-48.svg';
import Pythonlogo from '../../assets/icons/icons8-python-48.svg';
import SQLlogo from '../../assets/icons/icons8-mysql-48.svg';
import VSlogo from '../../assets/icons/icons8-visual-studio-48.svg';
import Jiralogo from '../../assets/icons/icons8-jira-48.svg';

function Skills() {
    return (
        // <Container style={{ margin: "auto", maxWidth: "100%", width: "100%" }}>
        <Container style={{ paddingTop: "10vh" }}>
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
                    <img src={VSlogo} alt="VS" loading="lazy" className="icon" />
                </Col>
                <Col>
                    <img src={Jiralogo} alt="Jira" loading="lazy" className="icon" />
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;
