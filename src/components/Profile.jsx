/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Container, Typography, Button } from '@mui/material'
import {useNavigate  } from 'react-router-dom'
const Profile = () => {

    const navigate  = useNavigate ();
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (!user) {
            navigate('/signup');
        }
      }, [navigate , user]);
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/signup');
      };
      if (!user) {
        return null;
      }
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Profile Page</Typography>
      <Typography variant="h6">Username: {user.username}</Typography>
      <Typography variant="h6">Email: {user.email}</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
    </Container>
  )
}

export default Profile