import React, { createContext, useEffect, useReducer } from 'react';

import SplashScreen from 'src/components/SplashScreen';

const ACTION_TYPE = {
  INITIALISE: 'INITIALISE'
};

const initialAuthState = {
  isInitialised: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIALISE: {
      return {
        ...state,
        isInitialised: true
      };
    }
    default: {
      return state;
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  useEffect(() => {
    dispatch({
      type: ACTION_TYPE.INITIALISE
    });
  }, []);

  if (!state.isInitialised) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
