import { posts } from "./BlogPosts/blogposts";
import { useState } from "react";

export default function BlogEntry(){
    
    let current = 4;

    let title = posts[current].title;
    let body = posts[current].body;

    return(
        <>
        <h2>{title}</h2>
        <p>{body}</p>
        </>
    )
}