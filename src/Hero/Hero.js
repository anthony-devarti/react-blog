import React from "react"
import { Button } from "react-bootstrap"
import "./Hero.css"

export default function Main(){
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>My Coding Journey</h1>
                <p>Learning to code from no stack to full stack</p>
                <Button>Blog</Button>
            </div>
        </div>
    )
}