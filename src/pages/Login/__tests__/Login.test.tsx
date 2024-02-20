import { it, describe, expect, vi } from 'vitest';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { AuthProvider } from '@contexts/auth';
import * as useAuthHooks from '@hooks/useAuth';

import Login from '..';

const useAuthSpy = vi.spyOn(useAuthHooks, 'useAuth');

describe('Login Page', () => {
  it('Should render login form and required components', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByTestId('login-form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
  });

  it('Should submit login form correctly after entering username and password ', () => {
    const logInMock = vi.fn();

    useAuthSpy.mockReturnValue({
      logIn: logInMock,
      authenticated: true,
      logOut: vi.fn()
    });

    render(
      <AuthProvider>
        <Login />
      </AuthProvider>,
      {
        wrapper: MemoryRouter
      }
    );

    const userNameInput = screen.getByPlaceholderText('Enter username');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    const loginForm = screen.getByTestId('login-form');

    // Simulate user input
    fireEvent.change(userNameInput, {
      target: { value: 'testuser' }
    });
    fireEvent.change(passwordInput, {
      target: { value: 'password123' }
    });

    // Submit the form
    fireEvent.submit(loginForm);

    // Verify that the form is submitted
    expect(logInMock).toHaveBeenCalledTimes(1);
  });
});
