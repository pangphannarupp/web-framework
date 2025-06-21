// src/components/DialogComponent.jsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useDialog } from "./DialogContext";

const DialogComponent = () => {
  const { open, dialogData, closeDialog } = useDialog();

  return (
    <Dialog open={open} onClose={() => closeDialog(null)}>
      <DialogTitle>{dialogData?.title}</DialogTitle>
      <DialogContent>{dialogData?.message}</DialogContent>
      <DialogActions>
        {
          dialogData?.showCancel &&
          <Button onClick={() => closeDialog(false)}>Cancel</Button>
        }
        <Button onClick={() => closeDialog(true)} color="primary">OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
