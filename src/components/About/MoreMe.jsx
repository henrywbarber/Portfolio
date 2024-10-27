import React from 'react';
import { Container, Row } from 'react-bootstrap';

function MoreMe() {
    return (
        <Container className="MoreAboutMe">
                <h2 style={{textAlign: "center"}}>More About Me</h2>
                <p>
                    Born and raised in Chicago's Wrigleyville neighborhood, I attended Lane Tech College Prep High School in Roscoe Village before moving to Madison, Wisconsin, to further my education in Computer Science.
                </p>
                <p>
                    My passion for STEM began early, sparked in my middle school years when I first learned 'Processing' in fifth grade. From there, I delved into 3D modeling, 3D printing, and laser cutting. Lane Tech, with its renowned STEM programs, provided the perfect environment to nurture these interests, where I honed my skills in the school's maker lab and excelled in AP Computer Science-A.
                </p> 
                <p>
                    In Madison, I found myself further my academic journey along with my other interests. Moving away from the Chicago, I began enjoying all the time I could spend exploring the area's natural beauty. Now, as an executive board member of the cycling club I lead group rides on local trails, from casual rides to longer training sessions through the scenic hills of Lodi, Mazomanie, Cross Plains, Verona, and Blue Mound State Park. I am also lucky enough to travel with my teammates to compete against other collegiate teams, representing the Badgers in our stylish cow-print jerseys. Although I've lived in Madison for over three years, I still enjoy discovering new campus buildings, shops along State Street, and testing my palate at family-owned restaurants. Lately, I've been embracing my playful side by joining intramural flag football, soccer, and volleyball leagues with friends.
                </p>
        </Container>
    );
}

export default MoreMe;
