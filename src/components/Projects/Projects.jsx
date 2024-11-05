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
            description: "The Convolutional Neural Network project leverages deep learning to classify images, providing a hands-on way to explore CNN architecture. Built in Python with PyTorch, it offers customizable settings, allowing for experimentation with different hyperparameters and layers. By achieving strong results on the CIFAR-10 dataset, this project highlights the practical applications of convolutional networks in tackling image classification tasks.",
            imageUrl: cnnIMG,
            imageText: "",
            buttonUrl: "https://github.com/henrywbarber/Convolutional_Neural_Network/blob/main/convolutional_networks.ipynb",
            buttonText: "Open Notebook",
        },
        {
            title: "BarberShell",
            description: "BarberShell is a custom shell implemented in C, showcasing command-line interpreter from the ground up using custom built and library provided functions. It features essential functionalities like I/O redirection, local/environment variable management, and command history, all designed for a seamless user experience.",
            imageUrl: "",
            imageText: "Check Me Out on Github",
            buttonUrl: "https://github.com/henrywbarber/BarberShell",
            buttonText: "View on Github",
        },
        {
            title: "College Football Margin Predictor",
            description: "The Margin Predictor utilizes historical college football data from the College Football Data API to build a predictive game margin model. Implementing the fast.ai tabular learner along with data preprocessing techniques, the model analyzes trends and patterns to provide predictions for hypothetical games. The project is built using Python and incorporates libraries such as Pandas, NumPy, and fast.ai to manipulate data and validate model predictions.",
            imageUrl: marginPredictorImg,
            imageText: "",
            buttonUrl: "https://github.com/henrywbarber/MarginPredictor/blob/main/MarginPredictor.ipynb",
            buttonText: "Open Notebook",
        },
        {
            title: "Protein Pro",
            description: "Protein Pro is a React-based web application designed to help users set personalized dietary goals and track their daily nutrition progress. It offers an intuitive, user-friendly interface that allows users to log their meals, monitor macronutrient intake, and view their intake over time.",
            imageUrl: proteinProImg,
            imageText: "",
            buttonUrl: "https://henrywbarber.github.io/protein_pro/",
            buttonText: "Visit Page",
        },
        {
            title: "Transit Tracker",
            description: "Transit Tracker is a React Native mobile app currently being development, designed to give users real-time access to Chicago Transit Authority (CTA) bus and train data. With features like a favorites tab, users can quickly access live wait times and updates for their common bus and train stops, improving upon the rudimentary and often inaccurate CTA developed app.",
            imageUrl: "", 
            imageText: "In Developement...",
            buttonUrl: "",
            buttonText: "Coming Soon",
        },
        {
            title: "KartKings",
            description: "KartKings is a score-tracking app for Mario Kart, designed to log multiple races and compare cumulative results between friends. The app will feature options for adding/removing player profiles, aggregating profile average cup point toals, and viewing historical circuit performances to crown the king of the mountain.",
            imageUrl: "", 
            imageText: "In Developement...",
            buttonUrl: "",
            buttonText: "Coming Soon",
        },
    ];

    return (
        <Container fluid className="projects-section">
            <Row className="text-center">
                <h1>Projects</h1>
            </Row>
            <div>
                {projects.map((project, index) => (
                    <Row className={`project-row ${index % 2 === 1 ? 'justify-content-end' : ''}`} key={index}>
                        <Card className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                {project.imageUrl ? (
                                    <Card.Img className="card-img" variant="top" src={project.imageUrl} alt={project.title} />
                                ) : (
                                    <div className="card-img-placeholder">
                                        <span>{project.imageText}</span>
                                    </div>
                                )}
                                <Card.Text>{project.description}</Card.Text>
                                {project.buttonUrl ? (
                                    <Button variant="secondary" href={project.buttonUrl} target="_blank">{project.buttonText}</Button>
                                ) : (
                                    <Button className="btn-disabled" variant="secondary" disabled>{project.buttonText}</Button>
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
