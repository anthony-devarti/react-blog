import React, { useState } from 'react';
import { Col, Card } from "react-bootstrap"
import BlogEntry from './BlogEntry';
import { posts } from "./BlogPosts/blogposts";
import Previews from './Previews';

export default function Blog(){

    const [currentBlog, setCurrentBlog] = useState(0)

    return(
        <>
        <div className="superheader" id="main"><center>Blog Posts</center></div>
        <Previews pick={setCurrentBlog}/>
        <div className='textfield'>
        <BlogEntry currentBlog={currentBlog}/>
        </div>
        </>
    )
}