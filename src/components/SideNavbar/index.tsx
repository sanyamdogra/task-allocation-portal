import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';

import { useAuth } from '@hooks/useAuth';
import { ROUTES_CONFIG } from '@components/AppRoutes/routesConfig';

import './styles.scss';

type Props = {
  open: boolean;
  handleDrawerClose: VoidFunction;
};

const drawerWidth = 240;
const rootClassName = 'task-allocation-sidebar';

const SideNavbar: React.FC<Props> = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();
  const { authenticated } = useAuth();

  const handleClick = (slug: string) => {
    handleDrawerClose();
    navigate(slug);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'black',
          color: 'white'
        }
      }}
      variant='persistent'
      anchor='left'
      open={open && authenticated}
    >
      <IconButton
        onClick={handleDrawerClose}
        className={`${rootClassName}__iconTheme`}
      >
        <ChevronLeft />
      </IconButton>
      <Divider />
      <List>
        {ROUTES_CONFIG.map((route) => (
          <ListItem key={route.path} disablePadding>
            <ListItemButton onClick={() => handleClick(route.path)}>
              <ListItemIcon className={`${rootClassName}__iconTheme`}>
                {route.icon}
              </ListItemIcon>
              <ListItemText primary={route.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNavbar;
