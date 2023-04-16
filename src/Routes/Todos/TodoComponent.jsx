import { DeleteForever, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TodoDialog from "./TodoDialog";

const TodoComponent = ({ todos, deleteTodo,updateTodo }) => {
  const fontSize = {
    fontSize: 15,
  };
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <>
    <TodoDialog update={updateTodo} open={openEdit} close={setOpenEdit} todo={todos} />
      <Box
        sx={{
          border: "1px solid #f5f0f0",
          marginBottom: "15px",
          borderRadius: "5px",
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom component="div" variant="h5">
                {todos.title}
              </Typography>

              <CardActions>
                <IconButton
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    deleteTodo(todos.id);
                  }}
                >
                  <DeleteForever />
                </IconButton>
              </CardActions>
            </div>

            <Typography gutterBottom sx={fontSize}>
              {todos.description}
            </Typography>

            <Typography gutterBottom sx={fontSize}>
              Due Date: {todos.complete_on}
            </Typography>
            {todos.completed ? (
              <Chip label="Completed" variant="outlined" color="success" />
            ) : (
              <Chip label="Pending" variant="outlined" color="info" />
            )}
          </CardContent>
          <CardActions>
            <Button
              startIcon={<Edit />}
              size="small"
              variant="outlined"
              color="success"
              onClick={() => {
                setOpenEdit(true);
              }}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default TodoComponent;
