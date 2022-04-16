import React from 'react';
import { Col, Card } from "react-bootstrap"
import BlogEntry from './BlogEntry';
import { posts } from "./BlogPosts/blogposts";
import Previews from './Previews';

export default function Blog(){



    return(
        <>
        <div className="superheader"><center>Blog Posts</center></div>
        <Previews />
        <BlogEntry />
        </>
    )
}