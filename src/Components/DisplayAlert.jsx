import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React, { useState } from "react";

const DisplayAlert = ({ message, type,open,close}) => {
  return (
    <Snackbar color="success" autoHideDuration={4000} open={open} onClose={close}>
      <Alert severity="success" >
        <AlertTitle>
          Success
        </AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default DisplayAlert;
