import React from "react";
import Loader from "./post/loader";
import { useSelector } from "react-redux";

import NoPost from "./NoPost";
import Post from "./post/post";
import './Posts.css'

const Posts = ({ setCurrentId }) =>{
    const { posts, isLoading} = useSelector((state) => state.posts);
    if (!posts.length && !isLoading) return <NoPost/>;
    
    return(
        isLoading ? <Loader /> :(            
         <div className='posts'>
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