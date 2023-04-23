import { createContext } from 'react';

const AuthContext = createContext({
  token: { accessToken: null, refreshToken: null },
  user: null,
  setToken: () => {},
  setUser: () => {},
});

export default AuthContext;
