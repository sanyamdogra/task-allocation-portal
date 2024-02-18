import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';

import { useAuth } from '@hooks/useAuth';

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
    <div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          spacing={1}
        >
          <Grid item xs={12}>
            <TextField
              placeholder='Enter username'
              size='small'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // fullWidth
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
              // fullWidth
              required
            />
          </Grid>
          {error && <p>{error}</p>}
          <Grid item xs={12}>
            <Button type='submit' color='primary' variant='contained'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
