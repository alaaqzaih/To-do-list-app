import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
const DialogComp = (props) => {
  const [open, setOpen] = React.useState(true);

  const [text, setText] = useState(props.text);
  const [description, setDescription] = useState(props.description);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpdateClick = () => {
    props.submitUpdate({ id: props.id, text: text, description: description });
  };

  const handleClose = () => {
    setOpen(false);
    props.funsetdetailbool();
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="moviePosterDialog"
      >
        <DialogTitle>Edit your task </DialogTitle>
        <DialogContent>
          <input
            placeholder="Update your item"
            value={text}
            name="text"
            onChange={handleTextChange}
            className="todo-input edit"
          />
          <input
            placeholder="Add a description"
            value={description}
            onChange={handleDescriptionChange}
            name="description"
            className="todo-input"
          />
          <button className="todo-button edit" onClick={handleUpdateClick}>
            Update
          </button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default DialogComp;
