import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './components/Home/Home'

import Form from './components/Form/Form'
import Auth from "./components/Auth/Auth";
const App = () => {
  // const user = JSON.parse(localStorage.getItem('profile'))
  return(
    <BrowserRouter>
   
     
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/form" exact element={<Form />} />
        <Route path="/auth" exact element={ <Auth/> } />
       
      </Routes>
    
  </BrowserRouter>

  )

}


export default App