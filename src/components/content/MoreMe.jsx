import React from 'react';
import { Container, Row } from 'react-bootstrap';

function MoreMe() {
    return (
        <Container className="MoreAboutMe">
                <h2 style={{textAlign: "center"}}>More About Me</h2>
                <p>
                    Born and raised in the Wrigleyville area of Chicago, I attended Albert G. Lane Technical College Preparatory High
                    School in Roscoe Village before moving to Madison, Wisconsin, to pursue a further education in Computer Science.
                    My interest in STEM started from a young age, I attribute my interest to my middle school where I found myself
                    learning 'Processing' in the fifth grade and later learning how to 3D model, 3D print, and laser cut. I further
                    explored this interest at Lane Tech, known for its cutting-edge STEM programs. I was able to explore my interests
                    in the school's maker lab and prove my skills in AP Computer Science-A.
                </p>
                <p>
                    Now in Madison, I find myself enjoying
                    lake life, riding bikes throughout the area's great trails such as the Badger State Trail, and reading books at
                    Lake Mendota's Memorial Union Terrace. So far, my longest bike ride has been the Badger Challenge 100k. I also enjoy exploring campus, I swear there are new buildings and resturants to check out every week. As of recent, I've been making a fool of myself in the intermural soccer, flag football, and volleyball leagues with my friends.
                </p>
        </Container>
    );
}

export default MoreMe;
