import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import './Navigation.css'

export default function Navigation({ onNavigate }){

    

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{justifyContent:'left'}} >Anthony DeVarti</Navbar.Brand>
                <Nav style={{textAlign:'right'}}>
                    <Nav.Link href="#recent" onClick={() => onNavigate(pages.recent)}>Home</Nav.Link>
                    <Nav.Link href="#blog" onClick={() => onNavigate(pages.blog)}>Blog</Nav.Link>
                    <Nav.Link href="#portfolio" onClick={() => onNavigate(pages.portfolio)}>Porfolio</Nav.Link>
                    <Nav.Link href="#contact" onClick={() => onNavigate(pages.contact)}>Contact</Nav.Link>
                </Nav>
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