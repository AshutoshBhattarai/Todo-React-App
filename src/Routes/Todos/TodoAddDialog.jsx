import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";

const TodoAddDialog = ({ addTodo }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    addTodo({
      title,
      description,
    });
    setTitle('')
    setDescription('')
    handleClose();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "50px" }}
        size="10px"
        onClick={handleOpen}
      >
        <Add />
        New Todo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            fullWidth
          />
          <TextField
            multiline
            rows={4}
            maxRows={4}
            margin="dense"
            id="desc"
            size="10px"
            label="Description"
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoAddDialog;
