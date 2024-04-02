import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/icons/logo.png'
import AboutMe from '../content/AboutMe'
import MoreMe from '../content/MoreMe'
import Skills from '../content/Skills'
import Projects from '../content/Projects'

function Layout() {
    return (
        <div>
            <Navbar fixed="top" bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#home" to="/">
                        <Image
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
                    <Nav.Link style={{ alignSelf: "center" }}>henrywbarber@gmail.com</Nav.Link>

                    <Nav.Link href="https://www.linkedin.com/in/henrywbarber">
                        <Image src="assets/icons/icons8-linkedin-48.png" alt="Linkedin"/>
                    </Nav.Link>
                    <Nav.Link href="mailto:henrywbarber@gmail.com">
                        <Image src="assets/icons/icons8-email-48.png" alt="Email"/>
                    </Nav.Link>
                    <Nav.Link href="https://github.com/henrywbarber">
                        <Image src="assets/icons/icons8-github-48.png" alt="Github"/>
                    </Nav.Link>

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