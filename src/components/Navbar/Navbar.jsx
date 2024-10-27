import React, { useState, useEffect } from 'react';
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-scroll';
import logo from "../../assets/icons/logo.png";
import linkedInLogo from "../../assets/icons/icons8-linkedin-48.png";
import emailLogo from "../../assets/icons/icons8-email-48.png";
import gitHubLogo from "../../assets/icons/icons8-github-48.png";
import './Navbar.css'; // Ensure to import your CSS file

function CustomNavbar() {
    const [isSticky, setIsSticky] = useState(false);
    const handleScroll = () => {
        const heroHeight = document.querySelector('.hero').offsetHeight;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const scrollY = window.scrollY;
        setIsSticky(scrollY > heroHeight - navbarHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar className={`${isSticky ? 'sticky' : 'mobile'}`} >
            <Container fluid>
                <Navbar.Brand as={Link} to="home" smooth={true} duration={100} offset={"-5rem"} style={{ cursor: 'pointer' }}>
                    <Image
                        alt="H Letter Logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="hero" smooth={true} duration={100} style={{ cursor: 'pointer' }}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="about" smooth={true} duration={100} style={{ cursor: 'pointer' }}>
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="skills" smooth={true} duration={100} style={{ cursor: 'pointer' }}>
                        Skills
                    </Nav.Link>
                    <Nav.Link as={Link} to="projects" smooth={true} duration={100} style={{ cursor: 'pointer' }}>
                        Projects
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/henrywbarber" target="_blank">
                        <Image src={linkedInLogo} alt="Linkedin" style={{ width: "2rem", height: "2rem" }} />
                    </Nav.Link>
                    <Nav.Link href="mailto:henrywbarber@gmail.com" target="_blank">
                        <Image src={emailLogo} alt="Email" style={{ width: "2rem", height: "2rem" }} />
                    </Nav.Link>
                    <Nav.Link href="https://github.com/henrywbarber" target="_blank">
                        <Image src={gitHubLogo} alt="Github" style={{ width: "2rem", height: "2rem" }} />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
