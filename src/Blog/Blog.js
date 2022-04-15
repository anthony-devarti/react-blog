import React from 'react';
import { Col, Card } from "react-bootstrap"
import BlogEntry from './BlogEntry';
import { posts } from "./BlogPosts/blogposts";
import Previews from './Previews';

export default function Blog(){



    return(
        <>
        <h3><center>Blog Posts</center></h3>
        <div className="scrollmenu">
        <Previews />
        </div>
        <BlogEntry />
        </>
    )
}