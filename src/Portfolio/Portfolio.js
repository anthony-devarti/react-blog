import { Card, Col, Row } from "react-bootstrap"
import { faJs, faPython, faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { projects } from "./projects"
import { Button } from "react-bootstrap"

export default function Portfolio(){
    //this is going to have a lot of logic.  I do not like repeating this code over and over again.  I'd like to store this information in a database, and procedurally generate each of the fields based on that information.
    //With this said, I should probably wait until we cover django to see if I want to use that framework rather than just using vanilla sql and postgresql

    //this works to statically add a photo, but when I try to pull the path from the projects obj dynamically, it doesn't work.
    const photo = require("../Images/firstblog.png")

    const ProjList = () => {
        return (
            <>
              <div className="superheader"><center>Portfolio</center></div>
              <p>This is a collection of the projects I have worked on so far.  I'm always looking to take on more and show my work.  I have included dates on these to demonstrate my trajectory through the subject matter.  The visit button will take you to the github repository for the project.  The live view of each project should be available in a link in the readme.</p>
              <div className="row cols cols-3 mt-3" style={{justifyContent:"space-evenly"}}>
              {projects.reverse().map(project => {
                return (
                  <>
                    <div className="card" href={project.link}>
                      <figure className="card__thumbnail">
                        <img src={photo}></img>
                        <span className="card__title">{project.title}</span>
                        <span className="date__field" style={{position:"absolute", right:"0", top:"0", color:"white"}}>{project.date}</span>
                      </figure>
                      <a href={project.link} className="btn btn-lg btn-secondary fw-bold mt-5">Visit</a>
                    </div>
                  </>
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