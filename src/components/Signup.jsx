/* eslint-disable no-undef */
import {
  Box,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import React, { useState } from "react";
import "@fontsource/roboto/700.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (password !== conpassword) {
      setError("Passwords do not match");
      return;
    }
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      conpassword === ""
    ) {
      setError("Error : All the fields are mandatory");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const userData = {
        username,
        email,
        password,
        token: Math.random().toString(36).substr(2),
      };
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch(signupUser(userData));
      setSuccessMessage("Successfully Signed Up!");
      setUsername("");
      setEmail("");
      setPassword("");
      setConpassword("");
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    }
  };
  return (
    <Container fixed>
      <Box
        sx={{
          mt: 5,
          textAlign: "center",
          p: 3,
          backgroundColor: "#f5f5f5", // Add background color
          borderRadius: 2, // Optional: Add rounded corners
          boxShadow: 3, // Optional: Add a shadow for depth
        }}
      >
        <Typography variant="h4" gutterBottom>
        Signup
        </Typography>
        <TextField
          id="standard-basic"
          label="Full Name:"
          fullWidth
          variant="standard"
          margin="normal"
          color="success"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></TextField>
        <TextField
          id="standard-basic"
          label="Email:"
          fullWidth
          color="success"
          variant="standard"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></TextField>
        <TextField
          id="standard-basic"
          label="Password:"
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="standard"
          margin="normal"
          color="success"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></TextField>
        <TextField
          id="standard-multiline-flexible"
          label="Confirm Password:"
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="standard"
          margin="normal"
          color="success"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setConpassword(e.target.value)}
          value={conpassword}
        ></TextField>
        {successMessage && (
          <Typography color="success.main">{successMessage}</Typography>
        )}
        {error && <Typography color="error">{error}</Typography>}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleSignup}
        >
          Signup
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
