import React from 'react';

import Header from '../Header';
import SideNavbar from '../SideNavbar';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header handleDrawerOpen={handleDrawerOpen} />
      <SideNavbar open={open} handleDrawerClose={handleDrawerClose} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
