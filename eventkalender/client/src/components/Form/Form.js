import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import {createPost} from '../../actions/posts'


const Form = () => {
    const [postData, setPostData] = useState({eventname: '', eventinfo: '', link: '', selectedFile: ''})
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'))
    console.log(user)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost({...postData, name: user?.result?.name}))
        navigate('/');
    }
 
    if (!user?.result?.name) {
        return ( 
          <div align="center">
            <h2>
            För att skapa ett event, så behöver du logga in!
            </h2>
            <Link to="/auth" >Sign in</Link>
          </div>
        );
      }
    const clear = () =>{

    }
    return (
        <div>
            <header >
                <img src="" alt="" />
                <div>
                    <button>Om oss</button>
                    <Link to="/">Hem</Link> 
                    <button>Logga in</button>
                    <button>Registera</button>
                </div>
            </header>
            <form onSubmit={handleSubmit}>
               
            <h1>Skapa Event</h1>
            <textarea name="EventName" required value={postData.eventname} placeholder="Event namn" onChange={(e) => setPostData({ ...postData, eventname: e.target.value})}/> 
            <textarea name="EventInfo"  required value={postData.eventinfo} placeholder="Event info" onChange={(e) => setPostData({ ...postData, eventinfo: e.target.value})}/> 
            <textarea name="link" required value={postData.link} placeholder="Extern länk" onChange={(e) => setPostData({ ...postData, link: e.target.value})}/> 
            <div>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                
                />
            </div>
            
            <button type="submit">Klar</button> 
            <button type="button" onClick={clear}>rensa</button>
            </form>
           
           
        </div>
    )
}

export default Form