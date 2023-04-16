import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useApi";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Container, Grid } from "@mui/material";
import TodoComponent from "./TodoComponent";
import TodoAddDialog from "./TodoAdd";
import DisplayAlert from "../../Components/DisplayAlert";
import { useErrorContext } from "../../Context/useError";

export default function Todo() {
  const navigate = useNavigate();
  const { api } = useAxios();

  const [todo, setTodo] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const useError = useErrorContext();

  useEffect(() => {
    if (openSnackbar) {
      console.log("Displaying snackbar");
    }
    setIsDeleted(false);
    setIsAdded(false);
    getTodos();
  }, [isDeleted, isAdded]);

  const getTodos = () => {
    api
      .get("todos/user/all")
      .then((response) => {
        if (response.status === 200) setTodo(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          redirectToLogin();
        }
      });
  };

  const deleteTodo = (id) => {
    api
      .post("/todos/delete", { id })
      .then((response) => {
        if (response.status == 200) {
          setIsDeleted(true);
          setSnackbarMsg("Todo deleted successfully.");
          setOpenSnackbar(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const addTodo = (data) => {
    api
      .post("/todos/save", {
        title: data.title,
        description: data.description,
        completeOn: data.date,
      })
      .then((response) => {
        if (response.status == 200) {
          setIsAdded(true);
          setSnackbarMsg("Todo added successfully.");
          setOpenSnackbar(true);
        }
      })
      .catch((err) => console.log(err));
  };
  const updateTodo = (data) => {
    api
      .post("/todos/updateAll", {
        id : data.id,
        title: data.title,
        description: data.description,
        completeOn: data.completeOn,
        completed : data.completed
      })
      .then((response) => {
        if (response.status == 200) {
          setIsAdded(true);
          setSnackbarMsg("Todo Updated successfully.");
          setOpenSnackbar(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const redirectToLogin = () => {
    localStorage.setItem("jwt", "");
    navigate("/login", { replace: true });
  };
  const closeSnackBar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div
      style={{
        background: "transparent",
      }}
    >
      <DisplayAlert
        open={openSnackbar}
        message={snackbarMsg}
        close={closeSnackBar}
      />
      ;
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginLeft: "20px", color: "#f25e60" }}>Your Todos</h1>
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
                      updateTodo={updateTodo}
                    />
                  </Grid>
                </>
              );
              //return <TodoDisplay todos={e} key={e.id} deleteTodo={deleteTodo} />;
            })
          ) : (
            <>
              <CircularProgress color="inherit" />
              <pre> Loading ............</pre>
            </>
          )}
        </Grid>
      </Container>
    </div>
    // </div>
  );
}
