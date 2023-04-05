import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useApi";
import { useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import TodoComponent from "./TodoComponent";
import TodoAddDialog from "./TodoAddDialog";

const cardContainer = {
  marginLeft: "20%",
};

export default function Todo() {
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();
  const { api } = useAxios();
  const [isDeleted, setIsDeleted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    setIsDeleted(false);
    setIsAdded(false);
    getTodos();
  }, [isDeleted, isAdded]);

  const getTodos = () => {
    api
      .get("todos/user/all")
      .then((response) => {
        console.log(response);
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
  const addTodo = (data) => {
    api
      .post("/todos/save", {
        title: data.title,
        description: data.description,
        completeOn: "2023-03-30",
      })
      .then((response) => {
        if (response.status == 200) setIsAdded(true);
      })
      .catch((err) => console.log(err));
  };

  const redirectToLogin = () => {
    localStorage.setItem("jwt", "");
    navigate("/login", { replace: true });
  };

  return (
    <div
      style={{
        background: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#f25e60" }}>Your Todos</h1>
        <TodoAddDialog addTodo={addTodo} />
      </div>
      {/* <div style={cardContainer}> */}
      <Container maxWidth="md">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {todo ? (
            todo.map((e, i) => {
              return (
                <>
                  <Grid item xs={12}>
                    <TodoComponent
                      todos={e}
                      key={e.id}
                      deleteTodo={deleteTodo}
                    />
                  </Grid>
                </>
              );
              //return <TodoDisplay todos={e} key={e.id} deleteTodo={deleteTodo} />;
            })
          ) : (
            <p>Loading ............</p>
          )}
        </Grid>
      </Container>
    </div>
    // </div>
  );
}
