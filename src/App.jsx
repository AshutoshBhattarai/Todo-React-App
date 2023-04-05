import { Routes, Route } from "react-router-dom";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import Todo from "./Routes/Todos/Todo";
import Home from "./Routes/Home";
import Page404 from "./Routes/Error/Page404";
import CheckAuth from "./Components/CheckAuth";
import Navbar from "./Components/NavBar";
function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/todo"
            element={
              <CheckAuth>
                <Todo />
              </CheckAuth>
            }
          ></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
    </>
  );
}

export default App;
