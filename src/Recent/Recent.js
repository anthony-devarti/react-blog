import React from "react"
import { Col, Card } from "react-bootstrap"

export default function Recent(){
    //I'd like this to generate the 3 most recent blog posts
    //title will be the field for the h1 tag from the most recent post
    //subtitle will be the first 15 characters or so from the body
    //link will be dynamically rendered for the sake of routing the click to the right place.
    //This will likely involve being stored in a database as well, so it should also wait until we cover django
    let title1="An example title"
    let subtitle1="An example subtitle"
    let link1="something"
    let title2="A second example title"
    let subtitle2="A second example subtitle"
    let link2="something"
    let title3="A third example title"
    let subtitle3="A third example subtitle"
    let link3="something"

    return(
        <>
        <h2>Recent Projects</h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <Col className="col">
              <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" href="blogposts/onboarding/week1/week1.html">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title1}</h2>
                  <ul className="d-flex list-unstyled mt-auto">
                      <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>{subtitle1}.</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <a href={link1} className="btn btn-lg btn-secondary fw-bold mt-5">Read</a>
                      <small></small>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
      
            <Col className="col">
              <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" href="blogposts/onboarding/week1/week1.html">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title2}</h2>
                  <ul className="d-flex list-unstyled mt-auto">
                      <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>{subtitle2}.</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <a href={link2} className="btn btn-lg btn-secondary fw-bold mt-5">Read</a>
                      <small></small>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
      
            <Col className="col">
              <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" href="blogposts/onboarding/week1/week1.html">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title3}</h2>
                  <ul className="d-flex list-unstyled mt-auto">
                      <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"></svg>
                      <small>{subtitle3}.</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <a href={link3} className="btn btn-lg btn-secondary fw-bold mt-5">Read</a>
                      <small></small>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
          </div>
        </>
    )
}