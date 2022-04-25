import React from "react";
import moment from 'moment'
import 'moment/locale/sv'
import './style.css'
import noImage from '../../../img/noImage.jpeg'
import { useDispatch } from "react-redux";
import arrow from '../../../img/arrow.svg'
import { deletePost } from "../../../actions/posts";

const Post = ({post}) =>{
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile')); 
    const useimage = post.selectedFile
    

    return(
        <>
       
        <div className="card-container">
   
       
        <div className="event-img">
        <img src={!useimage ? noImage : useimage} alt="" className="img"/>
        </div>
        <div className="event-data">
            <h1 className="eventname"> {post.eventname}</h1>
            <p className="postinfo">{post.eventinfo}</p>
            <p className="postinfo">{moment(post.date_start).format("L")}</p>
            <p className="postinfo">{moment(post.date_end).format("L")}</p>
            <p>{post.city}</p>
            <p>{post.adress}</p>
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