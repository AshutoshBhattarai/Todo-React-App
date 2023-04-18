import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Typography } from "@mui/material";
import {
  mainContainer,
  formContainer,
  formTitle,
  formStyle,
} from "../Components/FormStyles";
import React from "react";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const url = "http://localhost:5002/user/save";
  const data = {
    name: username,
    password: password,
    email: email,
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, data)
      .then((response) => {
        if(response.status === 200)
        {
          navigate('/login',{replace : true});
        }
      })
      .catch((err) => {
        if (err.response.status == 400) setError(err.response.data.message);
      });
  };

  return (
    <div style={mainContainer}>
      <div style={formContainer}>
        <h1 style={formTitle}>User SignUp</h1>
        {error}
        <form style={formStyle} onSubmit={handleFormSubmit}>
          <TextField
            required
            fullWidth
            margin="normal"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            fullWidth
            type="email"
            margin="normal"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
        <Typography
          gutterBottom
          marginTop="10px"
          align="center"
          color="primary"
        >
          Or
        </Typography>
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
