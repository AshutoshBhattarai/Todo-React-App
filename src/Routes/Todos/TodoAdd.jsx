import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const TodoAddDialog = ({ addTodo }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpen = () => {
    setTitle("");
    setDescription("");
    setSelectedDate(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const addZero = (zer) => {
      if (zer.length == 1) return 0 + zer;
      else return zer;
    };
    let year = selectedDate.getFullYear();
    let month = addZero((selectedDate.getMonth() + 1).toString());
    let day = addZero(selectedDate.getDate().toString());
    let newDate = `${year}-${month}-${day}`;
    addTodo({
      title,
      description,
      date: newDate.toString(),
    });
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              sx={{marginTop :'10px'}}
              label="Due Date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e)}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="info">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoAddDialog;
