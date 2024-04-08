import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import marginPredictorImg from '../../assets/images/marginPredictor.png';
import proteinProImg from '../../assets/images/proteinPro.png';
import myWebsiteImg from '../../assets/images/myWebsite.png';
import cnnIMG from '../../assets/images/cnn.png';


function Projects() {
    return (
        <section id="projects">
            <Container>
                <h2 className="projects-title">A Few Recent Projects</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {/* Project 1 */}
                    <Col>
                        <Card className="project-card">
                            <Card.Img variant="top" src={marginPredictorImg} alt="cfb-outcome" />
                            <Card.Body>
                                <Card.Title>College Football Margin Predictor</Card.Title>
                                <Card.Text>
                                    This project leverages the College Football Data (CFBD) API to build a predictive model using the fastai
                                    library. It collects game data from 2015 to 2021, preprocesses it, and trains a neural network to predict the
                                    margin of victory in college football games. I would soon like to implement predictions for hypothetical
                                    matchups, showcasing its utility in forecasting future game outcomes.
                                </Card.Text>
                                <Button variant="secondary" href="https://github.com/henrywbarber/MarginPredictor" target="_blank">View in Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Project 2 */}
                    <Col>
                        <Card className="project-card">
                            <Card.Img variant="top" src={proteinProImg} alt="more-coming" />
                            <Card.Body>
                                <Card.Title>Protein Pro</Card.Title>
                                <Card.Text>
                                    Protein Pro is a web-based nutrition tracking app designed to simplify the management of daily dietary intake.
                                    Users can easily input their meals and monitor calorie, protein, carbohydrate, fat, saturated fat, and sodium
                                    levels. Utilizing React, this user-friendly application provides a seamless experience, making it effortless
                                    to maintain a balanced diet and track progress toward nutrition goals.
                                </Card.Text>
                                <Button variant="secondary" href="https://henrywbarber.github.io/protein_pro/" target="_blank">Check it Out</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Project 3 */}
                    <Col>
                        <Card className="project-card">
                            <Card.Img variant="top" src={cnnIMG} alt="cnn-project" />
                            <Card.Body>
                                <Card.Title>Convolutional Neural Network</Card.Title>
                                <Card.Text>
                                    This project implements a VGGNet-style convolutional neural network. It allows for customizable hyperparameters for optimal training, such as Ioffe & Szegedy batch normalization. Users can also switch between an SGD momentum loss function or an adam loss function, change layer number and size, and adjust filters, pooling, and weight distribution. This project successfully performed image classification tasks on the CIFAR-10 dataset using via machine learning but could still be further optimized.
                                </Card.Text>
                                <Button variant="secondary" href="#" target="_blank">TODO</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;
