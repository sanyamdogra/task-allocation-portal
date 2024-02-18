import React from 'react';

import Header from '@components/Header';
import SideNavbar from '@components/SideNavbar';

import './styles.scss';

interface Props {
  children: React.ReactNode;
}

const rootClassName = 'task-allocation-layout';

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={rootClassName}>
      <Header handleDrawerOpen={handleDrawerOpen} />
      <SideNavbar open={open} handleDrawerClose={handleDrawerClose} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
