import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import useApi from "../Hooks/useApi";

const mainContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh",
  background: "",
  // background: "#8E2DE2",
  // background: "-webkit-linear-gradient(to bottom, #4A00E0, #8E2DE2)",
  //background: "linear-gradient(to bottom, #4A00E0, #8E2DE2)",
};
const formContainer = {
  width: "300px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  padding: "5px 30px 30px 30px",
};
const formTitle = {
  color: "#f25e60",
  textAlign: "center",
  marginBottom: "20px",
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
};
const labelStyle = {
  marginBottom: "10px",
  fontWeight: "bold",
  align: "left",
};
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
  marginRight: "20px",
  border: "1px solid #f25e60",
  borderRadius: "5px",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
};
const buttonStyle = {
  width: "50%",
  textAlign: "center",
  backgroundColor: "#f25e60",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
  transition: "backgroundColor 0.2s ease-in-out",
};

export default function Login() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(localStorage.getItem("jwt"));
  const { api, setAuthorizationHeader } = useApi();
  const [username, setUsername] = useState("a@a.com");
  const [password, setPassword] = useState("pass@123");
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
          const responseData = response.data.data.token;
          setAuthorizationHeader(responseData);
          navigate("/todo", { replace: true });
        }
      })
      .catch((err) => {
        const errorMessage = err.response.data.data.message;
        console.log(errorMessage);
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
            <label style={labelStyle}>Username</label>
            <input
              style={inputStyle}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label style={labelStyle}>Password</label>
            <input
              style={inputStyle}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div style={{ textAlign: "center" }}>
              <button
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#F08080";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#f25e60";
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  else return <Navigate to="/todo" replace/>;
}
