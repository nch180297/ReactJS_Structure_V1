//--- Library
import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

//--- Service
import { fetchData } from 'src/__mocks__';

//--- Component
import Page from 'src/components/Page';

const service = fetchData();

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  }
}));

const HomePageView = () => {
  const classes = useStyles();
  const response = service.homePage.read();

  return (
    <Page title="Home page" className={classes.root}>
      <Box>{response}</Box>
    </Page>
  );
};

export default HomePageView;
