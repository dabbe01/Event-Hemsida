import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Auth from "./components/Auth/Auth";
import About from './components/About/About';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/posts"/>} />
        <Route path="/posts" element={<Home/>} />
        <Route path="/posts/search" element={<Home/>} />
        <Route path="/posts/:id" element={<PostDetails/>}/>
        <Route path="/form" element={<Form />} />
        <Route path="/auth" exact element={(!user ? <Auth/> : <Navigate to="/posts" />) } />
        <Route path="/about" element={<About />} />
      </Routes>  
  </BrowserRouter>

  )

}


export default App