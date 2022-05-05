import { posts } from "./BlogPosts/blogposts";
import { useState } from "react";

export default function BlogEntry( {currentBlog} ){
    

    let title = posts[currentBlog].title;
    let body = posts[currentBlog].body;

    return(
        <>
        <h2 id="entry">{title}</h2>
        <p>{body}</p>
        </>
    )
}