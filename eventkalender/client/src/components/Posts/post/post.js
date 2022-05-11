import React from "react";
import moment from 'moment'
import 'moment/locale/sv'
import './style.css'
import noImage from '../../../img/noImage.jpeg'
import { useDispatch } from "react-redux";
import deleteImg from '../../../img/delete1.svg'
import { deletePost } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Post = ({post}) =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile')); 
    const useImage = post.selectedFile
    const openPost = () => navigate(`/posts/${post._id}`)
    

    return(
        <> 
        <div className="te">    
         <div tabIndex="0" role="button" className="card-btn" onClick={openPost}> 
        <div className="card-container"> 
        
         <div className="event-img">
        <img src={!useImage ? noImage : useImage} alt="" className="postImg"/>
        </div>
        <div className="event-data">
            <h1 className="eventname"> {post.eventname}</h1>
            <p className="eventInfo">{post.eventinfo.substring(0, 300) + '...'} </p>
            <div className="postInfo-container">
             
            <p className="postinfo"> <b>Startar:</b> {moment(post.datestart).format("L")}</p>
            <p className="postinfo"> <b>Slutar:</b> {moment(post.dateend).format("L")}</p>
            </div>
            <div className="name-created-container">
            <h4>{post.name}</h4>
          <p>{moment(post.createdAt).fromNow()}</p>           
          </div>
          <div>          
        </div>
          </div>     
        </div> 
        </div>
        <div className="test">
        {(user?.result?.googleId === post?.skaparen || user?.result?._id === post?.skaparen) && (
        <button className="test-btn" onClick={() => dispatch(deletePost(post._id))}> <img className="deleteIcon" src={deleteImg}/><b>TA BORT EVENT!</b>
        </button>
        )}
        </div>
        </div>  
        </>
    )
}

export default Post