import { Card, Col, Row } from "react-bootstrap"
import { faJs, faPython, faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

export default function Portfolio(){
    //this is going to have a lot of logic.  I do not like repeating this code over and over again.  I'd like to store this information in a database, and procedurally generate each of the fields based on that information.
    //With this said, I should probably wait until we cover django to see if I want to use that framework rather than just using vanilla sql and postgresql

    return(
        <>
            <h2 className="portfolio">Portfolio</h2>
            <p>This is a collection of the projects I have worked on so far.  I'm always looking to take on more and show my work.  I have included dates on these to demonstrate my trajectory through the subject matter.</p>
            <Row className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <Col className="col">
                    <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 1 Name</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"></svg>
                            <small>A short description of the project subjct matter.</small>
                            </li>
                            <li className="d-flex align-items-center">
                            <a href='#' className="btn btn-lg btn-secondary fw-bold mt-5">Visit</a><FontAwesomeIcon className="icons" icon={faCode} inverse size="3x"/>
                            <small>1/18/22</small>
                            </li>
                        </ul>
                        </div>
                    </Card>
                </Col>
                <Col className="col">
                    <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 1 Name</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"></svg>
                            <small>A short description of the project subjct matter.</small>
                            </li>
                            <li className="d-flex align-items-center">
                            <a href='#' className="btn btn-lg btn-secondary fw-bold mt-5">Visit</a><FontAwesomeIcon className="icons" icon={faCode} inverse size="3x"/>
                            <small>1/18/22</small>
                            </li>
                        </ul>
                        </div>
                    </Card>
                </Col>
                <Col className="col">
                    <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 1 Name</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"></svg>
                            <small>A short description of the project subjct matter.</small>
                            </li>
                            <li className="d-flex align-items-center">
                            <a href='#' className="btn btn-lg btn-secondary fw-bold mt-5">Visit</a><FontAwesomeIcon className="icons" icon={faCode} inverse size="3x"/>
                            <small>1/18/22</small>
                            </li>
                        </ul>
                        </div>
                    </Card>
                </Col>
                <Col className="col">
                    <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 1 Name</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"></svg>
                            <small>A short description of the project subjct matter.</small>
                            </li>
                            <li className="d-flex align-items-center">
                            <a href='#' className="btn btn-lg btn-secondary fw-bold mt-5">Visit</a><FontAwesomeIcon className="icons" icon={faCode} inverse size="3x"/>
                            <small>1/18/22</small>
                            </li>
                        </ul>
                        </div>
                    </Card>
                </Col>
                <Col className="col">
                    <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 1 Name</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"></svg>
                            <small>A short description of the project subjct matter.</small>
                            </li>
                            <li className="d-flex align-items-center">
                            <a href='#' className="btn btn-lg btn-secondary fw-bold mt-5">Visit</a><FontAwesomeIcon className="icons" icon={faCode} inverse size="3x"/>
                            <small>1/18/22</small>
                            </li>
                        </ul>
                        </div>
                    </Card>
                </Col>
                <Col className="col">
                    <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 1 Name</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"></svg>
                            <small>A short description of the project subjct matter.</small>
                            </li>
                            <li className="d-flex align-items-center">
                            <a href='#' className="btn btn-lg btn-secondary fw-bold mt-5">Visit</a><FontAwesomeIcon className="icons" icon={faCode} inverse size="3x"/>
                            <small>1/18/22</small>
                            </li>
                        </ul>
                        </div>
                    </Card>
                </Col>
                <Col className="col">
                    <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 1 Name</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"></svg>
                            <small>A short description of the project subjct matter.</small>
                            </li>
                            <li className="d-flex align-items-center">
                            <a href='#' className="btn btn-lg btn-secondary fw-bold mt-5">Visit</a><FontAwesomeIcon className="icons" icon={faCode} inverse size="3x"/>
                            <small>1/18/22</small>
                            </li>
                        </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}