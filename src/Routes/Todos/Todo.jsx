import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useApi";
import TodoDisplay from "./TodoDisplay";

const cardContainer = {
  marginLeft: "20%",
};

export default function Todo() {
  const [todo, setTodo] = useState(null);
  const { api } = useAxios();

  useEffect(() => {
    const getTodos = () => {
      api
        .get("todos/user/all")
        .then((response) => setTodo(response.data))
        .catch((error) => {
          if (error) {
            if (error.response === undefined) {
              localStorage.setItem("jwt", "");
              return;
            } else {
              console.log(error);
              const errorResponse = error.response.data;
              console.log(errorResponse);

              if (errorResponse.statusCode != 200)
                localStorage.setItem("jwt", "");
            }
          }
        });
    };
    getTodos();
  }, []);

  return (
    <div>
      <h1 style={{ color: "#f25e60" }}>Your Todos</h1>
      <div style={cardContainer}>
        {todo ? (
          todo.map((e, i) => {
            return <TodoDisplay todos={e} key={e.id} />;
          })
        ) : (
          <p>Loading ............</p>
        )}
      </div>
    </div>
  );
}
