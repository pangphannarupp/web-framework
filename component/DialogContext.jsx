// src/context/DialogContext.jsx
import { createContext, useState, useContext } from "react";

const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState(null);
  const [resolveFn, setResolveFn] = useState(null);

  const openDialog = (data) => {
    setDialogData(data);
    setOpen(true);
    return new Promise((resolve) => {
      setResolveFn(() => resolve);
    });
  };

  const closeDialog = (response) => {
    if (resolveFn) resolveFn(response);
    setOpen(false);
    setDialogData(null);
  };

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog, open, dialogData }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
