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

const TodoDialog = ({ open, close, todo }) => {
  const handleSubmit = () => {
    console.log("Submit");
    handleClose();
  };
  const handleClose = () => {
    close(false);
  };
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [dueDate, setDueDate] = useState();
  const [checked, setChecked] = useState(todo.completed);
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
            value={dueDate}
            onChange={(e) => setDueDate(e)}
          />
        </LocalizationProvider>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                sx={{marginTop : "10px" }}
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
