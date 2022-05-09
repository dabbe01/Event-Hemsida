import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';

import { signin, signup } from '../../actions/auth';

import './Auth.css'
import arrowBlue from '../../img/ArrowBlue.svg'
import arrowGreen from '../../img/ArrowGreen.svg'

const initialState = { firstName: '', lastName: '', email: '', password: ''};

const SignUp = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormdata] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchMode = () => {
    
    setIsSignup((iSignup) => !iSignup);;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setFormdata({ ...formData, [e.target.name]: e.target.value });


  return (
    <div className='login-container'>
      <div className='tesee'>
        <div className='arrow-container'>
        { isSignup ?  <Link to='/'> <img src={arrowBlue} alt="" /></Link> :  <Link to='/'><img src={arrowGreen} alt="" /> </Link> }
        
        </div>
        <div>{ isSignup ? <h1 className='h1-reg'>Registrera</h1> : <h1 className='h1-login'>Logga in</h1> }</div>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='login-input-container'>
            { isSignup ? 
            <>
              <input className='input-reg' name="firstName" placeholder="First Name" required onChange={handleChange}  />
              <input className='input-reg' name="lastName" placeholder="Last Name" required onChange={handleChange} />
              <input className='input-reg' name="email" placeholder="Email Address" required onChange={handleChange} type="email"/>
              <input className='input-reg' name="password" placeholder="Password" required onChange={handleChange} type="password" />
            </>
            :  
            <>
              <input className='input-login' name="email" placeholder="Email Address" required onChange={handleChange} type="email"/>
              <input className='input-login' name="password" placeholder="Password" required onChange={handleChange} type="password" />
              <div className='google-container'>
              <GoogleLogin
            clientId="288917284057-ganqvnrtes8ucjn31ruhmq4c40umtu18.apps.googleusercontent.com"
            render={(renderProps) => (
              <button className='google-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}  >
               <b>Google Sign In</b> 
              </button>
               )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
                 />
          </div>
            </>
            }
          </div>    
            <div className='submit-switchModed-btn'>
               { isSignup ?   <button type="submit" className='btn-reg' > <b>Registrera</b>  </button> : <button type="submit" className='btn-login'> <b>Logga in</b>  </button> }
               { isSignup ?  <button onClick={switchMode} className='btn-no-account'> <b>Don't have an account? Sign Up</b> </button> :  <button onClick={switchMode} className='btn-have-account'> <b>Already have an account? Sign in</b></button>}
            </div>
        </form>
        </div>
    </div>
  );
};

export default SignUp;