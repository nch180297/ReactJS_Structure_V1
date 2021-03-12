import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import useAuth from 'src/hooks/useAuth';
import { ROUTER_NAME } from 'src/constants';

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to={ROUTER_NAME.LOGIN} />;
  }

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
