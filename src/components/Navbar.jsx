/* eslint-disable no-unused-vars */
import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>Header</Typography>
      <Button color="inherit" component={Link} to="/signup">Signup</Button>
      <Button color="inherit" component={Link} to="/profile">Profile</Button>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar