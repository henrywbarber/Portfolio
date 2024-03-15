import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="assets/icons/logo.png" alt="HLogo" className="nav-img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#more-about">About</Nav.Link>
              <Nav.Link href="#skills">My Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Button variant="outline-primary" href="mailto:henrywbarber@gmail.com" className="email-link">
              <Image src="assets/icons/icons8-email-48.png" alt="Email Icon" className="email-icon" />
              henrywbarber@gmail.com
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="hero" id="about">
        <Row>
          <Col md={6}>
            <div className="bio animate__animated animate__shakeX ">
              <h2>Hello, I'm</h2>
              <h2 className="bio-title-mobile">Henry Barber</h2>
              <h2 className="bio-title-H">Henry</h2>
              <h2 className="bio-title-B">Barber</h2>
              <Image src="assets/images/portrait.jpg" alt="portrait" className="hero-img-mobile" fluid />
              <div className="bio-description">
                <p className="bio-text">Welcome to my portfolio!</p>
                <p className="bio-text">I'm an aspiring problem solver at The University of Wisconsin - Madison. I'm currently pursuing a Bachelor of Science in Computer Science along with a Minor in Mathematics; expecting to graduate in May of 2025.</p>
                <p className="bio-text">Some of my interests outside of class consist of road biking, intramural sports with friends, and listening to music.</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="hero-img-container">
            <Image src="assets/images/portrait.jpg" alt="portrait" className="hero-img" fluid />
          </Col>
        </Row>
      </Container>

      <Container fluid className="more-about" id="more-about">
        <h2>More About Me</h2>
        <p>
          Born and raised in the Wrigleyville area of Chicago, I attended Albert G. Lane Technical College Preparatory High School in Roscoe Village before moving to Madison, Wisconsin, to pursue further education in Computer Science.
          My interest in STEM started from a young age, I attribute my interest to my middle school where I found myself learning 'Processing' in the fifth grade and later learning how to 3D model, 3D print, and laser cut. I further explored this interest at Lane Tech, known for its cutting-edge STEM programs. I was able to explore my interests in the school's maker lab and prove my skills in AP Computer Science-A.
        </p>
        <p>
          Now in Madison, I find myself enjoying lake life, riding bikes throughout the area's great trails such as the Badger State Trail, and reading books at Lake Mendota's Memorial Union Terrace. So far, my longest bike ride has been the Badger Challenge 100k. I also enjoy exploring campus; I swear there are new buildings and restaurants to check out every week. As of recent, I've been making a fool of myself in the intramural soccer, flag football, and volleyball leagues with my friends.
        </p>
      </Container>

      {/* Similar structure for Skills and Projects sections */}
    </div>
  );
}

export default App
