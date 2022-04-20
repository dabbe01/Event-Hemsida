import React from "react";
import moment from 'moment'
import './style.css'
import { useDispatch } from "react-redux";
import arrow from '../../../img/arrow.svg'
import { deletePost } from "../../../actions/posts";

const Post = ({post}) =>{
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'));    

    return(
        <>
       
        <div className="card-container">
   
       
        <div className="event-img">
        <img src={post.selectedFile} alt="" className="img"/>
        </div>
        <div className="event-data">
            <h1 className="eventname"> {post.eventname}</h1>
            <p className="postinfo">{post.eventinfo}</p>
          <div><p>{moment(post.createdAt).fromNow()}</p> 
          <h5>{post.name}</h5>
          </div>
          <div>
          {(user?.result?.googleId === post?.skaparen || user?.result?._id === post?.skaparen) && (
        <button onClick={() => dispatch(deletePost(post._id))}>
           Ta bort
        </button>
        )}
        </div>
          </div>
        <div className="link-container">
        <button className="link-btn"><a href={post.link}> <img src={arrow} alt="" /></a> </button>
        </div>
        </div>
        </>
    )
}

export default Post