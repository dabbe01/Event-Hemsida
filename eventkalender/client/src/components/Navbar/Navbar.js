import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import './navbar.css'
import logo from '../../img/logo.svg'

import * as actionType from '../../constants/actionTypes';


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div  className='navbar_container' color="inherit">

        {user?.result ? (
          
          <div className='navbar-login-container'>
            {/* <div className='navbar-login-logo'>
            <img className='logo' src={logo} alt="" />
            </div> */}
            <Link to="/form" type="button" className='a'>Skapa Event</Link> 
            <Link to="Om_oss" type="button" className='b'>Om oss</Link> 
            <img src={user.result.imageUrl} alt={user?.result.imageUrl} className="navbar-profile-logo"/>
            <h2 className='navbar-name'>{user?.result.name}</h2>
            <button className='navbar-logut-btn'variant="contained"  color="secondary" onClick={logout}>Logout</button>
          </div>
        ) : (
            
            <div className='navbar-logo'>
            <img className='logo' src={logo} alt="" />
              <div/>
            <div className='navbar_links'>
          <Link to="/form" type="button" className='a'>Skapa Event</Link> 
          <Link to="Om_oss" type="button" className='b'>Om oss</Link> 
          <Link to="auth" type="button" className='c'>Logga in</Link>    
          </div>
        </div>
          )}
     
    </div>
  );
};

export default Navbar;