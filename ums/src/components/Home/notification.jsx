import React, { useState } from 'react';
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NotificationDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
      <IconButton onClick={handleClick} style={{ position: 'relative', zIndex: 1 }} color="primary">
        <NotificationsIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
<<<<<<< HEAD
        open={Boolean(anchorEl)} 
=======
        open={Boolean(anchorEl)}
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}>Some news</MenuItem>
        <MenuItem onClick={handleClose}>Another news</MenuItem>
        <MenuItem onClick={handleClose}>Something else here</MenuItem>
      </Menu>
    </div>
  );
};

export default NotificationDropdown;
