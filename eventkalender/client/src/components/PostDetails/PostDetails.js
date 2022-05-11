import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { getPost, deletePost } from '../../actions/posts';
import './PostDetails.css'

import Navbar from '../Navbar/Navbar'
import Loader from '../Posts/post/loader';
import noImage from '../../img/noImage.jpeg'



const PostDetails = () => {
  const user = JSON.parse(localStorage.getItem('profile')); 
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) return null;
  if(isLoading){
    <Loader/>
  }
  const useImage = post.selectedFile

  
  return (
    <div>
      <Navbar/>
    <div className='postDetails-container'>
      <div className='postDetails-container-div'>
       <div className='postDetailsImg-container'>
        <img src={!useImage ? noImage : useImage} alt="" className="postDetailsImg"/>
      </div>
            <div className='infoo'>
            <h1 className="eventname"> {post.eventname}</h1>
            <p className="postinfo">{post.eventinfo}</p>
            <p className="postinfo">{moment(post.datestart).format("L")}</p>
            <p className="postinfo">{moment(post.dateend).format("L")}</p>
            <p>{post.city}</p>
            <p>{post.adress}</p>
          <div><p>{moment(post.createdAt).fromNow()}</p> 
          <h4>{post.name}</h4>
          </div>
          </div>
        
      </div>
               
{/*        
        <img src={!useImage ? noImage : useImage} alt="" className="img"/>
    
   
            <h1 className="eventname"> {post.eventname}</h1>
            <p className="postinfo">{post.eventinfo}</p>
            <p className="postinfo">{moment(post.datestart).format("L")}</p>
            <p className="postinfo">{moment(post.dateend).format("L")}</p>
            <p>{post.city}</p>
            <p>{post.adress}</p>
          <div><p>{moment(post.createdAt).fromNow()}</p> 
          <h5>{post.name}</h5>
          <h5>{post.name}</h5>
          </div>
         */}
       
        </div>
        </div>
  )
}

export default PostDetails