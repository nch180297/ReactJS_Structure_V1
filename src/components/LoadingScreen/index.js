import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { makeStyles, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const LoadingScreen = () => {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
};

export default LoadingScreen;
