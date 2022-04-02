import React from "react";
import { Container, Row, Col, } from "react-bootstrap";

export default function ContactCard(){
    return (
          <Container className="Container">
              <Row className="Row">
                  <Col className="Col">
                      <div className="contact-box center-version">
                          <a href="#profile.html">
                              <img alt="image" className="img-circle" src="/img/anthony.jpeg" />
                              <h3 className="m-b-xs"><strong>Anthony DeVarti</strong></h3>
                  
                              <div className="font-bold">Web Development Student</div>
                              <address className="m-t-md">
                                  <strong>Awesome Inc.</strong><br />
                                  348 East Main St.<br />
                                  Lexington, KY 40502<br />
                                  <abbr title="Phone">Phone:</abbr> (555) 123-4567
                              </address>
                          </a>
                          <div className="contact-box-footer">
                              <div class="m-t-xs btn-group">
                                  <a class="contactbutton"><i class="fa fa-phone"></i> Call </a>
                                  <a class="contactbutton"><i class="fa fa-envelope"></i> Email</a>
                                  <a class="contactbutton"><i class="fa fa-user-plus"></i> Follow</a>
                              </div>
                          </div>
                  
                      </div>
                    </Col>
                </Row>
            </Container>
    )
}