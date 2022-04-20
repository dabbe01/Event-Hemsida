import React from "react";
import Loader from "./post/loader";
import { useSelector } from "react-redux";
import Post from "./post/post";

const Posts = ({ setCurrentId }) =>{
    const posts = useSelector((state) => state.posts);
    return(
        !posts.length ? <Loader /> :(
            
          <>
          {posts.map((post) =>(
              <div key={post._id} >
                  <Post post={post} setCurrentId={setCurrentId}/>
                  
              </div>
          ))}   
          </>
      
        )
      

    )
}

export default Posts