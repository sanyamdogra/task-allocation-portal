import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Login from '..';

describe('Login Page', () => {
  it('Should render login form and required components', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByTestId('login-form')).toBeInTheDocument();
    expect(screen.getByTestId('login-form-username-input')).toBeInTheDocument();
    expect(screen.getByTestId('login-form-password-input')).toBeInTheDocument();
  });
});
