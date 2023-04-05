import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useApi";
import TodoDisplay from "./TodoDisplay";
import { useNavigate } from "react-router-dom";
import MyDialogModal from "../../Components/DialogBox";

const cardContainer = {
  marginLeft: "20%",
};

export default function Todo() {
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();
  const { api } = useAxios();
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    setIsDeleted(false);
    getTodos()
  }, [isDeleted]);

  const getTodos = () => {
    api
      .get("todos/user/all")
      .then((response) => {
        if (response.status === 200) setTodo(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401) redirectToLogin();
      });
  };
  const deleteTodo = (id) => {
    api
      .post("/todos/delete", { id })
      .then((response) => {
        if (response.status == 200) setIsDeleted(true);
      })
      .catch((err) => console.log(err));
  };

  const redirectToLogin = () => {
    localStorage.setItem("jwt", "");
    navigate("/login", { replace: true });
  };

  return (
    <div>
    <div className="put-on-top-right">
        <MyDialogModal />
      </div>
      <h1 style={{ color: "#f25e60" }}>Your Todos</h1>
      <div style={cardContainer}>
        {todo ? (
          todo.map((e, i) => {
            return <TodoDisplay todos={e} key={e.id} deleteTodo={deleteTodo} />;
          })
        ) : (
          <p>Loading ............</p>
        )}
      </div>
    </div>
  );
}
