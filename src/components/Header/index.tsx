import React from 'react';

import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { useAuth } from '@hooks/useAuth';
import ProfileActions from '@components/ProfileActions';

import './styles.scss';

type Props = {
  handleDrawerOpen: VoidFunction;
};

const rootClassName = 'task-allocation-header';

const Header: React.FC<Props> = ({ handleDrawerOpen }) => {
  const { authenticated } = useAuth();

  return (
    <header className={rootClassName}>
      <div className={`${rootClassName}__left-side`}>
        {authenticated && (
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
          >
            <Menu />
          </IconButton>
        )}

        <div className={`${rootClassName}__heading`}>
          Spotzer
          <span
            className={`${rootClassName}__heading ${rootClassName}__heading--secondary`}
          >
            Network
          </span>
        </div>
      </div>

      {authenticated && (
        <div className={`${rootClassName}__right-side`}>
          <ProfileActions />
        </div>
      )}
    </header>
  );
};

export default Header;
