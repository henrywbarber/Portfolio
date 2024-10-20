import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import marginPredictorImg from '../../assets/images/marginPredictor.png';
import proteinProImg from '../../assets/images/proteinPro.png';
import cnnIMG from '../../assets/images/cnn.png';


function Projects() {
    return (
        <Container style={{ padding: "10vh 1rem 3rem 1rem" }}>
            <h2 style={{ textAlign: "center", paddingBottom: "0.75rem" }}>A Few Recent Projects</h2>

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={cnnIMG} alt="cnn-project" />
                        <Card.Body>
                            <Card.Title>Convolutional Neural Network</Card.Title>
                            <Card.Text>
                                This project implements a VGGNet-style convolutional neural network. It allows for customizable hyperparameters for optimal training, such as Ioffe & Szegedy batch normalization. Users can also switch between an SGD momentum loss function or an adam loss function, change layer number and size, and adjust filters, pooling, and weight distribution. This project successfully performed image classification tasks on the CIFAR-10 dataset using via machine learning but could still be further optimized.
                            </Card.Text>
                            <Button variant="secondary" href="https://github.com/henrywbarber/Convolutional_Neural_Network/blob/main/convolutional_networks.ipynb" target="_blank">View in Github</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        {/* <Card.Img variant="top" src={} alt="" /> */}
                        <div className="card-img-placeholder">
                            <span>Check Me Out in GitHub!</span>
                        </div>
                        <Card.Body>
                            <Card.Title>Barber Shell</Card.Title>
                            <Card.Text>
                                This project implements a custom Unix-based shell from scratch, with select custom built-in functions. This shell, called barber, serves as a command-line interpreter, emulating the fundamental functionality of popular shells like bash or zsh, but with a simpler design. The shell functions in two modes, interactive mode which reads user input and executes commands, and batch mode which processes commands from a file. The shell supports basic functionality such as forking processes, executing commands, handling I/O redirections, and managing both environment and shell variables.
                            </Card.Text>
                            <Button variant="secondary" href="https://github.com/henrywbarber/BarberShell" target="_blank">View in Github</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={marginPredictorImg} alt="cfb-outcome" />
                        <Card.Body>
                            <Card.Title>College Football Margin Predictor</Card.Title>
                            <Card.Text>
                                This project leverages the College Football Data (CFBD) API to build a predictive model using the fastai library. It collects game data from 2015 to 2021, preprocesses it, and trains a neural network to predict the margin of victory in college football games. I would soon like to implement predictions for hypothetical matchups, showcasing its utility in forecasting future game outcomes.
                            </Card.Text>
                            <Button variant="secondary" href="https://github.com/henrywbarber/MarginPredictor/blob/main/MarginPredictor.ipynb" target="_blank">View in Github</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={proteinProImg} alt="more-coming" />
                        <Card.Body>
                            <Card.Title>Protein Pro</Card.Title>
                            <Card.Text>
                                Protein Pro is a web-based nutrition tracking app designed to simplify the management of daily dietary intake. Users can easily input their meals and monitor calorie, protein, carbohydrate, fat, saturated fat, and sodium levels. Utilizing React, this user-friendly application provides a seamless experience, making it effortless to maintain a balanced diet and track progress toward nutrition goals.
                            </Card.Text>
                            <Button variant="secondary" href="https://henrywbarber.github.io/protein_pro/" target="_blank">Check it Out</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div className="card-img-placeholder">
                            <span>Coming Soon...</span>
                        </div>
                        <Card.Body>
                            <Card.Title>Transit Tracker</Card.Title>
                            <Card.Text>
                                Sick of Chicago's inconsistant public transit wait times? Transit Tracker directly accesses the Chicago Transit Authorities Bus and Train data and allows users to check on wait times ahead of time. Fequent a stop or two? The favorite tab allows users to easily access their common routes.
                            </Card.Text>
                            <Button variant="secondary" disabled>Coming Soon</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div className="card-img-placeholder">
                            <span>Coming Soon...</span>
                        </div>
                        <Card.Body>
                            <Card.Title>KartKings</Card.Title>
                            <Card.Text>
                                For more than casual Mario Kart competetors. Track point totals between your friends and finally crown the king of the track. Upon logging in, users can log races with others and begin thier climb to the top of the hill. Offering a final and offical comparison between competors over all shared races.
                            </Card.Text>
                            <Button variant="secondary" disabled>Coming Soon</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
