import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";
import useAxios from "../../Hooks/useApi";

const TodoDialog = ({ update, open, close, todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [dueDate, setDueDate] = useState(todo.complete_on);
  const [checked, setChecked] = useState(todo.completed);
  const displayDate = Date.parse(dueDate);
  const handleSubmit = () => {
    let newDate = null;
    const addZero = (zer) => {
      if (zer.length == 1) return 0 + zer;
      else return zer;
    };
    if (dueDate == todo.complete_on) {
      newDate = dueDate;
    } else {
      let year = dueDate.getFullYear();
      let month = addZero((dueDate.getMonth() + 1).toString());
      let day = addZero(dueDate.getDate().toString());
      newDate = `${year}-${month}-${day}`;
    }
    const data = {
      id : todo.id,
      title,
      description,
      completeOn: newDate.toString(),
      completed: checked,
    };
    update(data);
    handleClose();
  };
  const handleClose = () => {
    close(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Your Todo</DialogTitle>
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
          rows={4}
          margin="dense"
          id="desc"
          label="Description"
          type="text"
          multiline
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          fullWidth
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Due Date"
            sx={{ marginTop: "10px" }}
            value={displayDate}
            onChange={(e) => setDueDate(e)}
          />
        </LocalizationProvider>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                sx={{ marginTop: "10px" }}
                color="success"
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
            }
            label={checked ? "Completed" : "Pending"}
          />
        </FormGroup>
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
  );
};

export default TodoDialog;
