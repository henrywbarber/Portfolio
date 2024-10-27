// App.jsx
import React from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/About/About";
import MoreMe from "./components/About/MoreMe";
import Skills from "./components/About/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Hero />
      <CustomNavbar />
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

export default App;
