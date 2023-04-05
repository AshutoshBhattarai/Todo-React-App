import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/lab";

const MyDialogModal = () => {
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
    console.log(`Title value: ${title}`);
    console.log(`Description value: ${description}`);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create a New Todo
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
            onChange={(e)=>{
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
            label="Description"
            type="text"
            value={description}
            onChange={(e)=>{
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

export default MyDialogModal;
