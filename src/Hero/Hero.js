import React from "react"
import { Button } from "react-bootstrap"
import "./Hero.css"
import { pages } from "../Navigation"

export default function Hero({ onNavigate }){
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>My Coding Journey</h1>
                <p>Learning to code from no stack to full stack</p>
                <Button onClick={() => onNavigate(pages.blog)}>Blog</Button>
            </div>
        </div>
    )
}