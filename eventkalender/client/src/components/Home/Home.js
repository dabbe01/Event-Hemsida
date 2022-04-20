import React, {useState, useEffect} from 'react'
import Posts from "../Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/posts'
import Navbar from '../Navbar/Navbar';
import Main from '../main/main';
import Info_main from '../info-main/info_main';
import './home.css'



const Home = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])
  return (
    <div>
    <Navbar />
    <Main/>
    <Posts setCurrentId={setCurrentId}/>
    <Info_main/>
  



</div>
  )
}

export default Home