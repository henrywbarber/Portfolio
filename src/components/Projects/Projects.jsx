import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import marginPredictorImg from '../../assets/images/marginPredictor.png';
import proteinProImg from '../../assets/images/proteinPro.png';
import cnnIMG from '../../assets/images/cnn.png';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Convolutional Neural Network",
            description: "Built a customizable CNN for image classification, achieving results on the CIFAR-10 dataset.",
            imageUrl: cnnIMG,
            linkUrl: "https://github.com/henrywbarber/CNN-Image-Classification",
        },
        {
            title: "Barber Shell",
            description: "This project implements a custom Unix-based shell from scratch, with select custom built-in functions. The shell functions in two modes, interactive mode and batch mode, and supports basic functionality such as forking processes and handling I/O redirections.",
            imageUrl: "", // No image URL
            linkUrl: "https://github.com/henrywbarber/BarberShell",
        },
        {
            title: "College Football Margin Predictor",
            description: "This project leverages the College Football Data (CFBD) API to build a predictive model using the fastai library, predicting the margin of victory in college football games.",
            imageUrl: marginPredictorImg,
            linkUrl: "https://github.com/henrywbarber/MarginPredictor/blob/main/MarginPredictor.ipynb",
        },
        {
            title: "Protein Pro",
            description: "Protein Pro is a web-based nutrition tracking app designed to simplify the management of daily dietary intake, making it easy for users to monitor their nutrition goals.",
            imageUrl: proteinProImg,
            linkUrl: "https://henrywbarber.github.io/protein_pro/",
        },
        {
            title: "Transit Tracker",
            description: "Transit Tracker directly accesses the Chicago Transit Authorities Bus and Train data and allows users to check on wait times ahead of time, with a favorites tab for common routes.",
            imageUrl: "", // No image URL
            linkUrl: "#", // Placeholder link
        },
        {
            title: "KartKings",
            description: "KartKings tracks point totals between friends in Mario Kart, allowing users to log races and compare results over all shared races.",
            imageUrl: "", // No image URL
            linkUrl: "#", // Placeholder link
        },
    ];

    return (
        <Container fluid className="projects-section">
            <Row className="text-center mb-5" style={{ padding: "5rem 3rem 0 3rem", margin: "0 3rem 0 3rem" }}>
                <h1>Projects</h1>
            </Row>
            <div>
                {projects.map((project, index) => (
                    <Row className={`project-row ${index % 2 === 1 ? 'justify-content-end' : ''}`} key={index}>
                        <Card className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                            {project.imageUrl ? (
                                <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
                            ) : (
                                <div className="card-img-placeholder">
                                    <span>Check Me Out in GitHub!</span>
                                </div>
                            )}
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                {project.linkUrl ? (
                                    <Button variant="secondary" href={project.linkUrl} target="_blank">View in Github</Button>
                                ) : (
                                    <Button variant="secondary" disabled>Coming Soon</Button>
                                )}
                            </Card.Body>
                        </Card>
                    </Row>
                ))}
            </div>
        </Container>
    );
}

export default Projects;
