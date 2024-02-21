import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';

import { useAuth } from '@hooks/useAuth';

import './styles.scss';

const rootClassName = 'task-allocation-login-page';

const Login: React.FC = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      logIn();
      navigate('/');
    } catch {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__card`}>
        <div className={`${rootClassName}__heading`}>Welcome to</div>
        <div
          className={`${rootClassName}__heading ${rootClassName}__heading--primary`}
        >
          Spotzer Network
        </div>
        <form onSubmit={handleSubmit} data-testid='login-form'>
          <Grid
            container
            justifyContent={'center'}
            alignItems={'center'}
            spacing={3}
          >
            <Grid item xs={12}>
              <TextField
                placeholder='Enter username'
                size='small'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size='small'
                placeholder='Enter password'
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            {error && <p>{error}</p>}
            <Grid item xs={12}>
              <Button
                type='submit'
                color='primary'
                variant='contained'
                className={`${rootClassName}__logInButton`}
                fullWidth
              >
                Log in
              </Button>
            </Grid>
          </Grid>
          <div className={`${rootClassName}__forgotPassword`}>
            Forgot password? Click here
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
