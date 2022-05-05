import { Card, Col, Row } from "react-bootstrap"
import { faJs, faPython, faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { projects } from "./projects"
import { Button } from "react-bootstrap"
import React from "react"

export default function Portfolio(){
    //this is going to have a lot of logic.  I do not like repeating this code over and over again.  I'd like to store this information in a database, and procedurally generate each of the fields based on that information.
    //With this said, I should probably wait until we cover django to see if I want to use that framework rather than just using vanilla sql and postgresql


    const ProjList = () => {
        return (
            <>
              <div className="superheader"><center>Portfolio</center></div>
              <p>This is a collection of the projects I have worked on so far.  I'm always looking to take on more and show my work.  I have included dates on these to demonstrate my trajectory through the subject matter.  The visit button will take you to the github repository for the project.  The live view of each project should be available in a link in the readme.</p>
              <div className="row cols cols-3 mt-3" style={{justifyContent:"space-evenly"}}>
              {projects.reverse().map(project => {
                return (
                  <React.Fragment key={project.id}>
                    <div className="card">
                      <figure className="card__thumbnail">
                        <img src={process.env.PUBLIC_URL + '/projectphotos/' + project.photo }></img>
                        <span className="card__title">{project.title}</span>
                      </figure>
                        <span className="date__field" >{project.date}</span>
                        <a href={project.link} className="btn btn-lg btn-secondary fw-bold">Visit</a>
                    </div>
                  </React.Fragment>
              );
            })}
          </div>
          </>
        );
      };


    return(
        <ProjList />
    )
}