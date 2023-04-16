import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button,Typography } from "@mui/material";
import useApi from "../Hooks/useApi";
import {
  mainContainer,
  formContainer,
  formTitle,
  formStyle,
} from "../Components/FormStyles";

export default function Login() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(localStorage.getItem("jwt"));
  const { setAuthorizationHeader } = useApi();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const url = "http://localhost:5002/auth/login";
  const data = {
    email: username,
    password: password,
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    axios
      .post(url, data)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          setAuthorizationHeader(token);
          navigate("/todo", { replace: true });
        }
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        setError(errorMessage);
      });
  };
  if (isLogged == "")
    return (
      <div style={mainContainer}>
        <div style={formContainer}>
          <h1 style={formTitle}>User Login</h1>
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
              margin="normal"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
          </form>
          <Typography gutterBottom marginTop="10px" align="center" color='primary'>Or</Typography>
          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    );
  else return <Navigate to="/todo" replace />;
}
