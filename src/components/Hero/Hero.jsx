// Hero.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import HeroCanvas from './HeroCanvas';
import './Hero.css'; // Ensure you add the styles in this CSS file
import { Link } from 'react-scroll';

const Hero = () => {
    // Animation for the name
    const nameAnimation = useSpring({
        from: { transform: 'translateX(-100%)', opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 },
        config: { tension: 100, friction: 30 },
    });

    // Animation for the title
    const titleAnimation = useSpring({
        from: { transform: 'translateX(100%)', opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 },
        config: { tension: 100, friction: 30 },
    });

    // Animation for the button
    const buttonAnimation = useSpring({
        from: { transform: 'translateY(100%)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        config: { tension: 50, friction: 20 },
        delay: 2500
    });

    return (
        <div className="hero-section">
            <HeroCanvas /> {/* Add the HeroCanvas component here */}
            <div className="hero-content">
                <animated.h1 style={nameAnimation} className="hero-name">
                    Hello, I'm <span className="highlighted-name">Henry</span>
                </animated.h1>
                <animated.h2 style={titleAnimation} className="hero-title">
                    A Junior Software Engineer
                </animated.h2>
                <Link to="about" smooth={true} duration={200}>
                    <animated.div style={buttonAnimation}>
                        <Button className="scroll-button">Learn more</Button>
                    </animated.div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
