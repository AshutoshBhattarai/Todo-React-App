import { Navigate } from "react-router-dom";

export default function CheckAuth({ children }) {
  const token = localStorage.getItem("jwt");
  if (token == "") {
    return <Navigate to="/login" replace/>;
  }

  return children;
}
