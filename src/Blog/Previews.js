import BlogEntry from "./BlogEntry";
import { posts } from "./BlogPosts/blogposts"

export default function Previews({ pick }){
    //this needs to generate the blog posts and display them in a grid, with the ability to click on a post to see the full post below
    //ideally, these posts should be generated from a database, but for now, I'll just use the blogposts.js file
    //this page should display every blog post in the array, not just the most recent ones


    const CardList = () => {
        return (
            <div className="d-flex flex-row flex-nowrap horizontal-scroll">
            {posts.map(post => {
              return (
                <>
                <div className="col col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg card scrollable m-3" style={{maxWidth:'80vw', maxHeight:"400px", alignitems:'center'}} key={post.id}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mb-4 display-6 lh-1 fw-bold">{post.title}</h2>
                            <ul className="d-flex mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <small>{post.teaser}</small></li>
                                    <li className="d-flex align-items-start"><a href='#entry' onClick={() => pick(post.id)} className="btn btn-lg btn-secondary fw-bold mt-5">Read</a>
                                    <small className="small-date">{post.date}</small>              
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </>
              );
            })}
          </div>
        );
      };


    return (
        <CardList />
    )
}