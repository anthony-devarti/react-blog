import React from "react"
import { Navbar, Container, Nav, Collapse, NavDropdown, Offcanvas, Form, FormControl, Button } from "react-bootstrap"
import './Navigation.css'


export default function Navigation({ onNavigate }){

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{justifyContent:'left'}} >Anthony DeVarti</Navbar.Brand>
                <Nav style={{textAlign:'right'}}>
                    <Nav.Link href="#main" onClick={() => onNavigate(pages.recent)}>Home</Nav.Link>
                    <Nav.Link href="#main" onClick={() => onNavigate(pages.blog)}>Blog</Nav.Link>
                    <Nav.Link href="#main" onClick={() => onNavigate(pages.portfolio)}>Porfolio</Nav.Link>
                    <Nav.Link href="#main" onClick={() => onNavigate(pages.contact)}>Contact</Nav.Link>
                </Nav>
                {/* Make a hamburger menu and make the display none, then change this to switch with the nav items when the window is resized */}
            </Container>
        </Navbar>
    )
}

export const pages = {
    blog: 0,
    contact: 1,
    portfolio: 2,
    recent: 3
};