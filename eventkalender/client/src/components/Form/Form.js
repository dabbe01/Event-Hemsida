import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import {createPost} from '../../actions/posts'
import Navbar from "../Navbar/Navbar";
import NoSign from "./noSign/noSign";
import wave from '../../img/wave.svg'

import './form.css'
import { TextField } from "@material-ui/core";

const Form = () => {
    const [postData, setPostData] = useState({eventname: '', eventinfo: '', link: '', selectedFile: '',  datestart: '',  dateend: '', city: '', adress: ''})
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost({...postData, name: user?.result?.name}))
        navigate('/');
    }
    
 
    if (!user?.result?.name) {
        return ( 
          <NoSign/>
        );
      }

    return (
        <div>
           <Navbar/>
              

              <div className="container">
            <form  className="from-container" onSubmit={handleSubmit}>
            <div className="h1-form">
                <h1>Lorem ipsum dolor</h1>
            </div>
            <div className="p-form">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos earum corrupti culpa. Explicabo deserunt itaque ad, animi quo dignissimos minus dolorem. Earum esse voluptatum perspiciatis quam dolorem? Ad, asperiores.</p>
            </div>
            <div className="form-input">
            <div className="h2-form">
            <h2>Skapa Event</h2>
            </div>
          <div> <input name="EventName" className="eventNameInput" required value={postData.eventname} placeholder="Event namn" onChange={(e) => setPostData({ ...postData, eventname: e.target.value})}/> </div>
          <div> <textarea name="EventInfo" className="eventInfoInput" required value={postData.eventinfo} placeholder="Event info" onChange={(e) => setPostData({ ...postData, eventinfo: e.target.value})}/> </div>
          <div>   <input name="Link" className="eventLinkInput" required value={postData.link} placeholder="Extern länk T.ex https://www.google.com" onChange={(e) => setPostData({ ...postData, link: e.target.value})}/> </div>
          <div>   <input name="Adres" className="eventAdressInput" value={postData.adress} placeholder="Adress" onChange={(e) => setPostData({ ...postData, adress: e.target.value})}/> </div>
          <div className="select-container">
            <select name="" id=""  value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value})}>
            <option value="" disabled selected>Stad</option>
<option value="Arboga">Arboga</option>
  <option value="Arvika">Arvika</option>
  <option value="Askersund">Askersund</option>
  <option value="Avesta">Avesta</option>
  <option value="Boden">Boden</option>
  <option value="Bollnäs">Bollnäs</option>
<option value="Borgholm">Borgholm</option>
  <option value="Borlänge">Borlänge</option>
<option value="Borås">Borås</option>
<option value="Djursholm">Djursholm</option>
  <option value="Eksjö">Eksjö</option>
  <option value="Enköping">Enköping</option>
<option value="Eskilstuna">Eskilstuna</option>
  <option value="Eslöv">Eslöv</option>
<option value="Fagersta">Fagersta</option>
  <option value="Falkenberg">Falkenberg</option>
  <option value="Falköping">Falköping</option>
<option value="Falun">Falun</option>
  <option value="Filipstad">Filipstad</option>
  <option value="Flen">Flen</option>
  <option value="Gränna">Gränna</option>
<option value="Gävle">Gävle</option>
<option value="Göteborg">Göteborg</option>
<option value="Hagfors">Hagfors</option>
  <option value="Halmstad">Halmstad</option>
  <option value="Haparanda">Haparanda</option>
  <option value="Hedemora">Hedemora</option>
  <option value="Helsingborg">Helsingborg</option>
  <option value="Hjo">Hjo</option>
  <option value="Hudiksvall">Hudiksvall</option>
  <option value="Huskvarna">Huskvarna</option>
  <option value="Härnösand">Härnösand</option>
<option value="Hässleholm">Hässleholm</option>
<option value="Höganäs">Höganäs</option>
<option value="Jönköping">Jönköping</option>
<option value="Kalmar">Kalmar</option>
  <option value="Karlshamn">Karlshamn</option>
  <option value="Karlskoga">Karlskoga</option>
  <option value="Karlskrona">Karlskrona</option>
  <option value="Karlstad">Karlstad</option>
  <option value="Katrineholm">Katrineholm</option>
  <option value="Kiruna">Kiruna</option>
  <option value="Kramfors">Kramfors</option>
  <option value="Kristianstad">Kristianstad</option>
  <option value="Kristinehamn">Kristinehamn</option>
  <option value="Kumla">Kumla</option>
  <option value="Kungsbacka">Kungsbacka</option>
  <option value="Kungälv">Kungälv</option>
<option value="Köping">Köping</option>
<option value="Laholm">Laholm</option>
  <option value="Landskrona">Landskrona</option>
  <option value="Lidingö">Lidingö</option>
  <option value="Lidköping">Lidköping</option>
<option value="Lindesberg">Lindesberg</option>
  <option value="Linköping">Linköping</option>
<option value="Ljungby">Ljungby</option>
  <option value="Ludvika">Ludvika</option>
  <option value="Luleå">Luleå</option>
  <option value="Lund">Lund</option>
  <option value="Lycksele">Lycksele</option>
  <option value="Lysekil">Lysekil</option>
  <option value="Malmö">Malmö</option>
  <option value="Mariefred">Mariefred</option>
  <option value="Mariestad">Mariestad</option>
  <option value="Marstrand">Marstrand</option>
  <option value="Mjölby">Mjölby</option>
<option value="Motala">Motala</option>
  <option value="Mölndal">Mölndal</option>
<option value="Nacka">Nacka</option>
  <option value="Nora">Nora</option>
  <option value="Norrköping">Norrköping</option>
<option value="Norrtälje">Norrtälje</option>
<option value="Nybro">Nybro</option>
  <option value="Nyköping">Nyköping</option>
<option value="Nynäshamn">Nynäshamn</option>
<option value="Nässjö">Nässjö</option>
  <option value="Oskarshamn">Oskarshamn</option>
  <option value="Oxelösund">Oxelösund</option>
<option value="Piteå">Piteå</option>
  <option value="Ronneby">Ronneby</option>
  <option value="Sala">Sala</option>
  <option value="Sandviken">Sandviken</option>
  <option value="Sigtuna">Sigtuna</option>
  <option value="Simrishamn">Simrishamn</option>
  <option value="Skanör-Falsterbo">Skanör-Falsterbo</option>
<option value="Skara">Skara</option>
  <option value="Skellefteå">Skellefteå</option>
  <option value="Skänninge">Skänninge</option>
<option value="Skövde">Skövde</option>
<option value="Sollefteå">Sollefteå</option>
  <option value="Solna">Solna</option>
  <option value="Stockholm" selected="selected">Stockholm</option>
  <option value="Strängnäs">Strängnäs</option>
<option value="Strömstad">Strömstad</option>
<option value="Sundbyberg">Sundbyberg</option>
  <option value="Sundsvall">Sundsvall</option>
  <option value="Säffle">Säffle</option>
<option value="Säter">Säter</option>
<option value="Sävsjö">Sävsjö</option>
  <option value="Söderhamn">Söderhamn</option>
<option value="Söderköping">Söderköping</option>
<option value="Södertälje">Södertälje</option>
<option value="Sölvesborg">Sölvesborg</option>
<option value="Tidaholm">Tidaholm</option>
  <option value="Torshälla">Torshälla</option>
<option value="Tranås">Tranås</option>
<option value="Trelleborg">Trelleborg</option>
  <option value="Trollhättan">Trollhättan</option>
<option value="Trosa">Trosa</option>
  <option value="Uddevalla">Uddevalla</option>
  <option value="Ulricehamn">Ulricehamn</option>
  <option value="Umeå">Umeå</option>
  <option value="Uppsala">Uppsala</option>
  <option value="Vadstena">Vadstena</option>
  <option value="Varberg">Varberg</option>
  <option value="Vaxholm">Vaxholm</option>
  <option value="Vetlanda">Vetlanda</option>
  <option value="Vimmerby">Vimmerby</option>
  <option value="Visby">Visby</option>
  <option value="Vänersborg">Vänersborg</option>
<option value="Värnamo">Värnamo</option>
<option value="Västervik">Västervik</option>
<option value="Västerås">Västerås</option>
<option value="Växjö">Växjö</option>
<option value="Ystad">Ystad</option>
<option value="Åmål">Åmål</option>
<option value="Ängelholm">Ängelholm</option>
<option value="Örebro">Örebro</option>
<option value="Öregrund">Öregrund</option>
<option value="Örnsköldsvik">Örnsköldsvik</option>
<option value="Östersund">Östersund</option>
<option value="Östhammar">Östhammar</option>
            </select>
            </div>
            <div>
            <label for="fileUpload" >Lägg upp en bakgrundsbild </label>
              <div className="file-container">
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                />
                </div>
            </div>
            <div className="date-container">
            <div><label htmlFor="">Startar: </label><input className="date" type="date" name="" id="" required value={postData.datestart} onChange={(e) => setPostData({ ...postData, datestart: e.target.value})}/> <input type="time" /></div>
            <div><label htmlFor="">Slutar: </label><input className="date" type="date" name="" id=""  required value={postData.dateend} onChange={(e) => setPostData({ ...postData, dateend: e.target.value})} /> <input type="time" /></div>
            </div>
            
            <div>
            <div> <input type="submit" value="Submit"/> </div>
            </div>
            </div>
            {/* <img src={wave} alt="wave" className="wave-logo"/> */}
            </form>
            </div>
            </div>
           
           
        
    )
}

export default Form