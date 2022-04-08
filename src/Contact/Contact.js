import React from "react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons"


export default function Contact(){
    return(
        <>
        <h2>About Me</h2>
        <p>My name is Anthony DeVarti and I am currently a student at the Awesome Inc web Development bootcamp.  My educational background is in Education, itself, and this has the benefit of making me a lifelong student, as well. I am constantly on the lookout for new things to learn and new skills to aquire and coding seems to be well-suited to this mindset.  The subject being so broad and updating so often means that finding joy in learning for learning's sake, rather than as a means to an end ensures that I will be excited to pick up whatever the newest, biggest language or framework happens to be that year for the rest of my life!</p>
        <h3>Languages and Frameworks</h3>
        <h4>Languages</h4>
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faPython} />
        <h4>Frameworks</h4>
        <FontAwesomeIcon icon={faReact} />
        <ContactCard />
        </>
    )
}