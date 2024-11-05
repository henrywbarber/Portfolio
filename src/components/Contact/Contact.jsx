import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_gkrpyqy', 'template_i5eyiqo', formData, {
            publicKey: 'RE9o1-zQrOZJ1h95R',
        })
        .then((result) => {
            alert('Your message has been sent!');
            setFormData({ name: '', email: '', message: '' });
        }, (error) => {
            alert('Sorry, there was an issue sending your message!');
        });
    };

    return (
        <Container className="contact-section">
            <Row className="text-center">
                <h1>Contact Me</h1>
            </Row>
            <Row className="text-center">
                <p>Interested in collaborating or have a question? Fill out the form below, and I'll be in touch soon!</p>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
