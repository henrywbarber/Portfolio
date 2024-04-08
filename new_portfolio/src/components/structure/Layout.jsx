import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/icons/logo.png'
import linkedInLogo from '../../assets/icons/icons8-linkedin-48.png'
import emailLogo from '../../assets/icons/icons8-email-48.png'
import gitHubLogo from '../../assets/icons/icons8-github-48.png'
import AboutMe from '../content/AboutMe'
import MoreMe from '../content/MoreMe'
import Skills from '../content/Skills'
import Projects from '../content/Projects'

function Layout() {
    return (
        <div>
            <Navbar fixed="top" bg="light" variant="light" style={{ fontSize: "1.25rem" }} >
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
                    <Nav.Link style={{ alignSelf: "center" }}>Quick Links: </Nav.Link>

                    <Nav.Link href="https://www.linkedin.com/in/henrywbarber">
                        <Image src={linkedInLogo} alt="Linkedin" style={{ width: "2rem", height: "2rem" }} />
                    </Nav.Link>
                    <Nav.Link href="mailto:henrywbarber@gmail.com">
                        <Image src={emailLogo} alt="Email" style={{ width: "2rem", height: "2rem" }} />
                    </Nav.Link>
                    <Nav.Link href="https://github.com/henrywbarber">
                        <Image src={gitHubLogo} alt="Github" style={{ width: "2rem", height: "2rem" }} />
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
