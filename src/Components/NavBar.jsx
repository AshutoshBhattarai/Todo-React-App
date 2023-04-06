import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navStyles = {
    display: "flex",
    justifyContent: "flex-end",
    background: "#f25e60",
    padding: "10px",
  };

  const listStyles = {
    display: "flex",
    justifyContent: "end",
    listStyle: "none",
    margin: "5px 0px",
    padding: 0,
    width: "50%",
  };

  const linkStyles = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    padding: "30px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  };

  return (
    <nav style={navStyles}>
      <ul style={listStyles}>
        <li>
          <a href="/" style={linkStyles}>
            Home
          </a>
        </li>
        <li>
          <a href="/todo" style={linkStyles}>
            Todo
          </a>
        </li>
        <li>
          <a href="/login" style={linkStyles}>
            Login
          </a>
        </li>
        <li>
          <a
            style={linkStyles}
            onClick={() => {
              localStorage.setItem("jwt", "");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
