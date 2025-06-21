import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';

const BottomSheetMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const menuItems = ['Profile', 'Settings', 'Help', 'Logout'];

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>
        Open Bottom Sheet
      </Button>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {menuItems.map((text, index) => (
            <ListItem button={true} key={index} onClick={() => alert(`${text} clicked`)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default BottomSheetMenu;
