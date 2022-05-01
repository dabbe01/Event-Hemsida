import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { getPost } from '../../actions/posts';
import { deletePost } from "../../actions/posts";
import Navbar from '../Navbar/Navbar'
import Loader from '../Posts/post/loader';
import noImage from '../../img/noImage.jpeg'



const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);

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
          <h5>{post.name}</h5>
          </div>
          <div>
        </div>
          </div>
       
        </div>
        </div>
  )
}

export default PostDetails