import React from 'react';

import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { useAuth } from '@hooks/useAuth';

import './styles.scss';

type Props = {
  handleDrawerOpen: VoidFunction;
};

const rootClassName = 'spotzer-network-header';

const Header: React.FC<Props> = ({ handleDrawerOpen }) => {
  const { authenticated } = useAuth();

  return (
    <header className={rootClassName}>
      {authenticated && (
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
        >
          <Menu />
        </IconButton>
      )}

      <div className={`${rootClassName}__logo`}>Logo</div>
      <div>
        Spotzer <span className={`${rootClassName}__heading`}>Network</span>
      </div>
    </header>
  );
};

export default Header;
