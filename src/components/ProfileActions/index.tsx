import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircleOutlined } from '@mui/icons-material';

import { useAuth } from '@hooks/useAuth';

import './styles.scss';

const rootClassName = 'task-allocation-profile-actions';

const ProfileActions: React.FC = () => {
  const { logOut } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    logOut();
    setAnchorEl(null);
  };

  return (
    <div className={rootClassName}>
      <IconButton
        id='profile-action'
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleOutlined className={`${rootClassName}__icon`} />
      </IconButton>
      <Menu
        id='profile-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'profile-action'
        }}
      >
        <MenuItem onClick={handleClose} disabled>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} disabled>
          My account
        </MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileActions;
