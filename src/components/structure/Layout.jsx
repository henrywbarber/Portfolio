import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-scroll';
import logo from "../../assets/icons/logo.png";
import linkedInLogo from "../../assets/icons/icons8-linkedin-48.png";
import emailLogo from "../../assets/icons/icons8-email-48.png";
import gitHubLogo from "../../assets/icons/icons8-github-48.png";
import AboutMe from "../content/AboutMe";
import MoreMe from "../content/MoreMe";
import Skills from "../content/Skills";
import Projects from "../content/Projects";

function Layout() {
    return (
        <div>
            <Navbar fixed="top" style={{ fontSize: "1.25rem", backgroundColor: "#6482AD" }}>
                <Container fluid>
                    <Navbar.Brand as={Link} to="home" smooth={true} duration={100} offset={"-5rem"}>
                        <Image
                            alt="H Letter Logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="about" smooth={true} duration={100}>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="skills" smooth={true} duration={100}>
                            Skills
                        </Nav.Link>
                        <Nav.Link as={Link} to="projects" smooth={true} duration={100}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <Nav.Link href="https://www.linkedin.com/in/henrywbarber" target="_blank">
                        <Image src={linkedInLogo} alt="Linkedin" style={{ width: "2rem", height: "2rem" }} />
                    </Nav.Link>
                    <Nav.Link href="mailto:henrywbarber@gmail.com" target="_blank">
                        <Image src={emailLogo} alt="Email" style={{ width: "2rem", height: "2rem" }} />
                    </Nav.Link>
                    <Nav.Link href="https://github.com/henrywbarber" target="_blank">
                        <Image src={gitHubLogo} alt="Github" style={{ width: "2rem", height: "2rem" }} />
                    </Nav.Link>
                </Container>
            </Navbar>
            <Container fluid style={{ paddingTop: '5rem' }}>
                <section id="home">
                    <AboutMe />
                </section>
                <section id="about">
                    <MoreMe />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
            </Container>
        </div>
    );
}

export default Layout;
