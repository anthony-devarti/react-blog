import React from "react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export default function Contact(){
    return(
        <>
        <h2>About Me</h2>
        <p>My name is Anthony DeVarti and I am currently a student at the Awesome Inc web Development bootcamp.  </p>
        <h3>Languages and Frameworks</h3>
        <h4>Languages</h4>
        <FontAwesomeIcon icon={faHome} />
        <ContactCard />
        </>
    )
}