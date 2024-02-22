import { createContext, useMemo, useState } from 'react';

export interface AuthContextValue {
  authenticated: boolean;
  logIn: VoidFunction;
  logOut: VoidFunction;
}

/**
 * This is the context that deals with authentication of the app
 */
export const AuthContext = createContext<AuthContextValue>({
  authenticated: false,
  logIn: () => {},
  logOut: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [auth, setAuth] = useState(false);

  const logIn = () => {
    setAuth(true);
  };

  const logOut = () => {
    setAuth(false);
  };

  const values = useMemo<AuthContextValue>(
    () => ({
      authenticated: auth,
      logIn,
      logOut
    }),
    [auth]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
