import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/icons/logo.png'
import AboutMe from '../content/AboutMe'
import MoreMe from '../content/MoreMe'
import Skills from '../content/Skills'
import Projects from '../content/Projects'

function Layout() {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home" to="/">
                        <img
                            alt="H Letter Logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <AboutMe />
            <MoreMe />
            <Skills />
            <Projects />
        </div>
    );
}

export default Layout;