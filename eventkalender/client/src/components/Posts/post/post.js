import React from "react";
import moment from 'moment'
import 'moment/locale/sv'
import './style.css'
import noImage from '../../../img/noImage.jpeg'
import { useDispatch } from "react-redux";
import arrow from '../../../img/arrow.svg'
import { deletePost } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";

const Post = ({post}) =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile')); 
    const useImage = post.selectedFile
    const openPost = () => navigate(`/posts/${post._id}`)
    

    return(
        <>
       
        <div className="card-container">
               
        <div className="event-img">
        <img src={!useImage ? noImage : useImage} alt="" className="img"/>
        </div>
        <div className="event-data">
            <h1 className="eventname"> {post.eventname}</h1>
            <p className="postinfo">{post.eventinfo}</p>
            <p className="postinfo">{moment(post.datestart).format("L")}</p>
            <p className="postinfo">{moment(post.dateend).format("L")}</p>
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
        <button className="link-btn" onClick={openPost}> <img src={arrow} alt="" /></button>
        </div>
        </div>
        </>
    )
}

export default Post