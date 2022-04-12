import React from "react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faPython, faReact, faSwift } from "@fortawesome/free-brands-svg-icons"
import { Row } from "react-bootstrap";


export default function Contact(){
    return(
        <>
            <h2 id="Contact">About Me</h2>
            <p>My name is Anthony DeVarti and I am currently a student at the Awesome Inc web Development bootcamp.  My educational background is in Education, itself, and this has the benefit of making me a lifelong student, as well. I am constantly on the lookout for new things to learn and new skills to aquire and coding seems to be well-suited to this mindset.  The subject being so broad and updating so often means that finding joy in learning for learning's sake, rather than as a means to an end ensures that I will be excited to pick up whatever the newest, biggest language or framework happens to be that year for the rest of my life!</p>
            <center>
            <h3>Languages and Frameworks</h3>
            <h4>Languages</h4>
            <div className="icon-row">
                <FontAwesomeIcon className="icons" icon={faJs} inverse size="5x" />
                <FontAwesomeIcon className="icons" icon={faPython} inverse size="5x" />
            </div>
            <h4>Frameworks</h4>
            <div className="icon-row">
                <FontAwesomeIcon className="icons" gap={3} icon={faReact} inverse size="5x" />
            </div>
            <h4>Coming Soon</h4>
            <div className="icon-row">
                <FontAwesomeIcon className="icons"icon={faSwift} inverse size="5x" />
                Django
            </div>
            </center>
        <ContactCard />
        </>
    )
}