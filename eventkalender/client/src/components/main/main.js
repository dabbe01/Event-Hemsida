import React from 'react'
import './main.css'
import wave from '../../img/wave.svg'

const main = () => {
  return (
    <div className='background-template'>
    <div className='circle-container'>
        <span className='circle'></span>

      </div>
      <div className='main-text'>
        
        <h1 className='h1'>Lorem ipsum</h1>
        <h3 className='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</h3>
        
      </div>
      
      <div className='wave'>
        <img src={wave} className='logo-wave' alt="wave"/>
      </div>
    
    </div>
  )
}

export default main