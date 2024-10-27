// App.jsx
import React from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import './styles/App.css';

function App() {
  return (
    <div>
      <Hero/>
      <CustomNavbar />
      <Container fluid>
          <About/>
          <Projects/>
      </Container>
    </div>
  );
}

export default App;
