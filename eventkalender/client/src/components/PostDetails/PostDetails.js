import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { getPost} from '../../actions/posts';
import './PostDetails.css'

import Navbar from '../Navbar/Navbar'
import noImage from '../../img/noImage.jpeg'


const PostDetails = () => {; 
  const { post } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) return null;

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
            <p className="postDetails-info">{post.eventinfo}</p>
            <div className="jaha">
            <p><b>Kommun: </b> {post.city}</p>
            <p><b>Adress: </b> {post.adress}</p>
            <div className="postDetails-date">
            <p className="postDetails-dateStart"><b>Startar: </b> {moment(post.datestart).format("L")}</p>
            <p className="postDetails-dateEnd"><b>Slutar: </b>{moment(post.dateend).format("L")}</p>
            </div>
          <div>
          <h4>Skaparen: {post.name}</h4>
          </div>
          <div>
           <div className='postDetails-link'>
              <a href={post.link}>{post.link}</a>
           </div>
          </div>
          </div>
          </div>
      </div>     
        </div>
        </div>
  )
}

export default PostDetails