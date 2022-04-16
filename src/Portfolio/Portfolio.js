import { Card, Col, Row } from "react-bootstrap"
import { faJs, faPython, faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { projects } from "./projects"

export default function Portfolio(){
    //this is going to have a lot of logic.  I do not like repeating this code over and over again.  I'd like to store this information in a database, and procedurally generate each of the fields based on that information.
    //With this said, I should probably wait until we cover django to see if I want to use that framework rather than just using vanilla sql and postgresql

    const ProjList = () => {
        return (
            <>
            <div className="superheader"><center>Portfolio</center></div>
            <p>This is a collection of the projects I have worked on so far.  I'm always looking to take on more and show my work.  I have included dates on these to demonstrate my trajectory through the subject matter.</p>
            <div className="row cols cols-3">
            {projects.reverse().map(project => {
              return (
                <>
                <div className="col col">
                    <div className="card card-cover h-100 text-white bg-dark rounded-5 shadow-lg card m-5" style={{maxWidth:'30vw', maxHeight:"400px", alignitems:'center'}} key={project.id}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mb-4 display-6 lh-1 fw-bold">{project.title}</h2>
                            <ul className="d-flex mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <small>{project.teaser}</small></li>
                                    <li className="d-flex align-items-start"><a href={project.link} className="btn btn-lg btn-secondary fw-bold mt-5">Visit</a>
                                    <small className="small-date">{project.date}</small>              
                                </li>
                            </ul>
                        </div>
                    </div>
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