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
import { ChevronLeft, Inbox, Mail } from '@mui/icons-material';

import { ROUTES_CONFIG } from '@components/AppRoutes/routesConfig';

type Props = {
  open: boolean;
  handleDrawerClose: VoidFunction;
};

const drawerWidth = 240;

const SideNavbar: React.FC<Props> = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();

  const handleClick = (slug: string) => {
    handleDrawerClose();
    navigate(slug);
  };

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          {ROUTES_CONFIG.map((route, index) => (
            <ListItem key={route.path} disablePadding>
              <ListItemButton onClick={() => handleClick(route.path)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={route.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideNavbar;
