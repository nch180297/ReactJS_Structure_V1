import React, { createContext, useEffect, useReducer } from 'react';

import SplashScreen from 'src/components/SplashScreen';

const ACTION_TYPE = {
  INITIALISE: 'INITIALISE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

const initialAuthState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIALISE: {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user
      };
    }
    case ACTION_TYPE.LOGIN: {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user
      };
    }
    case ACTION_TYPE.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }
    default: {
      return state;
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  login: () => { },
  logout: () => { },
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = (data) => {
    dispatch({
      type: ACTION_TYPE.LOGIN,
      payload: {
        user: data
      }
    });
  };

  const logout = () => {
    localStorage.clear();
    dispatch({ type: ACTION_TYPE.LOGOUT });
  };

  useEffect(() => {
    dispatch({
      type: ACTION_TYPE.INITIALISE,
      payload: {
        isAuthenticated: false,
        user: null
      }
    });
  }, []);

  if (!state.isInitialised) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
