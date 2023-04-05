import { DeleteForever } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const TodoComponent = ({ todos, deleteTodo }) => {
  const fontSize = {
    fontSize: 15,
  };
  return (
    <>
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
          </CardContent>

          <CardActions>
            <Button
              size="small"
              variant="outlined"
              color="success"
              onClick={() => {
                console.log("Editing...");
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
