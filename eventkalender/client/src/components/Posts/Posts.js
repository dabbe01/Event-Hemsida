import React from "react";
import Loader from "./post/loader";
import { useSelector } from "react-redux";

import Post from "./post/post";

const Posts = ({ setCurrentId }) =>{
    const { posts, isLoading} = useSelector((state) => state.posts);
    if (!posts.length && !isLoading) return 'No posts';
    
    return(
        isLoading ? <Loader /> :(            
         <div>
          {posts.map((post) =>(
              <div key={post._id} >
                  <Post post={post} setCurrentId={setCurrentId}/>
                  
              </div>
          ))}   
        </div>
      
        )
      

    )
}

export default Posts