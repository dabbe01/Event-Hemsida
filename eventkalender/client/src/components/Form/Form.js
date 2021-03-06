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
          <div>   <input name="Link" className="eventLinkInput" required value={postData.link} placeholder="Extern l??nk T.ex https://www.google.com" onChange={(e) => setPostData({ ...postData, link: e.target.value})}/> </div>
          <div>   <input name="Adres" className="eventAdressInput" value={postData.adress} placeholder="Adress" onChange={(e) => setPostData({ ...postData, adress: e.target.value})}/> </div>
          <div className="select-container">
            <select name="" id=""  value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value})}>
            <option value="" disabled selected>Stad</option>
<option value="Arboga">Arboga</option>
  <option value="Arvika">Arvika</option>
  <option value="Askersund">Askersund</option>
  <option value="Avesta">Avesta</option>
  <option value="Boden">Boden</option>
  <option value="Bolln??s">Bolln??s</option>
<option value="Borgholm">Borgholm</option>
  <option value="Borl??nge">Borl??nge</option>
<option value="Bor??s">Bor??s</option>
<option value="Djursholm">Djursholm</option>
  <option value="Eksj??">Eksj??</option>
  <option value="Enk??ping">Enk??ping</option>
<option value="Eskilstuna">Eskilstuna</option>
  <option value="Esl??v">Esl??v</option>
<option value="Fagersta">Fagersta</option>
  <option value="Falkenberg">Falkenberg</option>
  <option value="Falk??ping">Falk??ping</option>
<option value="Falun">Falun</option>
  <option value="Filipstad">Filipstad</option>
  <option value="Flen">Flen</option>
  <option value="Gr??nna">Gr??nna</option>
<option value="G??vle">G??vle</option>
<option value="G??teborg">G??teborg</option>
<option value="Hagfors">Hagfors</option>
  <option value="Halmstad">Halmstad</option>
  <option value="Haparanda">Haparanda</option>
  <option value="Hedemora">Hedemora</option>
  <option value="Helsingborg">Helsingborg</option>
  <option value="Hjo">Hjo</option>
  <option value="Hudiksvall">Hudiksvall</option>
  <option value="Huskvarna">Huskvarna</option>
  <option value="H??rn??sand">H??rn??sand</option>
<option value="H??ssleholm">H??ssleholm</option>
<option value="H??gan??s">H??gan??s</option>
<option value="J??nk??ping">J??nk??ping</option>
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
  <option value="Kung??lv">Kung??lv</option>
<option value="K??ping">K??ping</option>
<option value="Laholm">Laholm</option>
  <option value="Landskrona">Landskrona</option>
  <option value="Liding??">Liding??</option>
  <option value="Lidk??ping">Lidk??ping</option>
<option value="Lindesberg">Lindesberg</option>
  <option value="Link??ping">Link??ping</option>
<option value="Ljungby">Ljungby</option>
  <option value="Ludvika">Ludvika</option>
  <option value="Lule??">Lule??</option>
  <option value="Lund">Lund</option>
  <option value="Lycksele">Lycksele</option>
  <option value="Lysekil">Lysekil</option>
  <option value="Malm??">Malm??</option>
  <option value="Mariefred">Mariefred</option>
  <option value="Mariestad">Mariestad</option>
  <option value="Marstrand">Marstrand</option>
  <option value="Mj??lby">Mj??lby</option>
<option value="Motala">Motala</option>
  <option value="M??lndal">M??lndal</option>
<option value="Nacka">Nacka</option>
  <option value="Nora">Nora</option>
  <option value="Norrk??ping">Norrk??ping</option>
<option value="Norrt??lje">Norrt??lje</option>
<option value="Nybro">Nybro</option>
  <option value="Nyk??ping">Nyk??ping</option>
<option value="Nyn??shamn">Nyn??shamn</option>
<option value="N??ssj??">N??ssj??</option>
  <option value="Oskarshamn">Oskarshamn</option>
  <option value="Oxel??sund">Oxel??sund</option>
<option value="Pite??">Pite??</option>
  <option value="Ronneby">Ronneby</option>
  <option value="Sala">Sala</option>
  <option value="Sandviken">Sandviken</option>
  <option value="Sigtuna">Sigtuna</option>
  <option value="Simrishamn">Simrishamn</option>
  <option value="Skan??r-Falsterbo">Skan??r-Falsterbo</option>
<option value="Skara">Skara</option>
  <option value="Skellefte??">Skellefte??</option>
  <option value="Sk??nninge">Sk??nninge</option>
<option value="Sk??vde">Sk??vde</option>
<option value="Sollefte??">Sollefte??</option>
  <option value="Solna">Solna</option>
  <option value="Stockholm" selected="selected">Stockholm</option>
  <option value="Str??ngn??s">Str??ngn??s</option>
<option value="Str??mstad">Str??mstad</option>
<option value="Sundbyberg">Sundbyberg</option>
  <option value="Sundsvall">Sundsvall</option>
  <option value="S??ffle">S??ffle</option>
<option value="S??ter">S??ter</option>
<option value="S??vsj??">S??vsj??</option>
  <option value="S??derhamn">S??derhamn</option>
<option value="S??derk??ping">S??derk??ping</option>
<option value="S??dert??lje">S??dert??lje</option>
<option value="S??lvesborg">S??lvesborg</option>
<option value="Tidaholm">Tidaholm</option>
  <option value="Torsh??lla">Torsh??lla</option>
<option value="Tran??s">Tran??s</option>
<option value="Trelleborg">Trelleborg</option>
  <option value="Trollh??ttan">Trollh??ttan</option>
<option value="Trosa">Trosa</option>
  <option value="Uddevalla">Uddevalla</option>
  <option value="Ulricehamn">Ulricehamn</option>
  <option value="Ume??">Ume??</option>
  <option value="Uppsala">Uppsala</option>
  <option value="Vadstena">Vadstena</option>
  <option value="Varberg">Varberg</option>
  <option value="Vaxholm">Vaxholm</option>
  <option value="Vetlanda">Vetlanda</option>
  <option value="Vimmerby">Vimmerby</option>
  <option value="Visby">Visby</option>
  <option value="V??nersborg">V??nersborg</option>
<option value="V??rnamo">V??rnamo</option>
<option value="V??stervik">V??stervik</option>
<option value="V??ster??s">V??ster??s</option>
<option value="V??xj??">V??xj??</option>
<option value="Ystad">Ystad</option>
<option value="??m??l">??m??l</option>
<option value="??ngelholm">??ngelholm</option>
<option value="??rebro">??rebro</option>
<option value="??regrund">??regrund</option>
<option value="??rnsk??ldsvik">??rnsk??ldsvik</option>
<option value="??stersund">??stersund</option>
<option value="??sthammar">??sthammar</option>
            </select>
            </div>
            <div>
            <label for="fileUpload" >L??gg upp en bakgrundsbild </label>
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