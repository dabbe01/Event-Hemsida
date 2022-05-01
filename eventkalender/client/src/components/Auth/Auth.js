import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';
import Input from './Input';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: ''};

const SignUp = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormdata] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
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
    <Container component="main" maxWidth="xs">
      <Link to="/">till</Link>
      <Paper  elevation={3}>
        <Avatar >
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form  onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" >
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId="288917284057-ganqvnrtes8ucjn31ruhmq4c40umtu18.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}  variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;