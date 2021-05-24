import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

const AddMenu = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button onClick={handleClickOpen}>
        <AddIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add a new course"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={3}>

            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Add Course
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddMenu