import React, { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-scroll';
import './Navbar.css';

function CustomNavbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef(null); 

    const handleScroll = () => {
        const heroHeight = document.querySelector('#hero').offsetHeight;
        setIsSticky(window.scrollY > heroHeight);
    };

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }

        const handleResize = () => {
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.offsetHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Navbar ref={navbarRef} className={`${isSticky ? 'sticky' : 'mobile'}`}>
                <Container fluid>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="hero" smooth={true} duration={100}>Home</Nav.Link>
                        <Nav.Link as={Link} to="about" smooth={true} duration={100}>About</Nav.Link>
                        <Nav.Link as={Link} to="projects" smooth={true} duration={100}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="contact" smooth={true} duration={100}>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {isSticky && <div className="navbar-spacer" style={{ height: navbarHeight }}></div>}
        </>
    );
}

export default CustomNavbar;
