import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { useDispatch } from "react-redux";

import {  getPostsBySearch } from '../../actions/posts'

import Posts from "../Posts/Posts";
import Navbar from '../Navbar/Navbar';
import Main from '../main/main';
import Pagination from '../Pagination';
import Footer from '../Footer/Footer'

import searchIcon from '../../img/search-icon.svg'
import './home.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const setCurrentId = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const query = useQuery()
    const page = query.get('page') || 1
    const searchQuery = query.get('searchQuery')
    const [search, setSearch] = useState('')

    // const reload = window.location.reload(false)

    const searchPost = () => {
      if(search.trim()) {
        dispatch(getPostsBySearch({ search }))
        navigate(`/posts/search?searchQuery=${search || 'none'}`)
      } else {
        navigate('/')
      }
    }

    const handleKeyPress = (e) => {
      if(e.keyCode === 13){
        searchPost()
      }
    }

    // if(reload){
    //   window.location.reload(false)
    
    // }
  return (
    <div>
    <Navbar/>
    <Main/>
    
    <div className='search-container'>
    <div className='search-container-btn'>
      <input 
        name='search'
        className='search-input' 
        placeholder='Sök ett event!' 
        onKeyDown={handleKeyPress} 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
       /> 
     <button className='sreach-btn' onClick={searchPost}><img src={searchIcon} className='searchIcon'/></button>   
    </div>
    </div>
    <Posts setCurrentId={setCurrentId}/>
    {(!searchQuery) && (
    <div className='pagination'>
    <Pagination page={page}/>
  
    </div> 
      )}
  
      <Footer/>


</div>
  )
}

export default Home