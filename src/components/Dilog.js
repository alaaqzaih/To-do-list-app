import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DialogComp = (props) => {
  const [open, setOpen] = React.useState(true);


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
            placeholder='Update your item'
            // value={input}
            // onChange={handleChange}
            name='text'
            // ref={inputRef}
            className='todo-input edit'
          />
             <input
            placeholder='Add a description'
            // value={description}
            // onChange={handleChange}
            name='description'
            className='todo-input'
            // ref={descriptionRef}
          />
          <button  className='todo-button edit'>
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
