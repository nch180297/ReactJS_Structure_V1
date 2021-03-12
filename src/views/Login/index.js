import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, CardContent, Container, Divider, Link, Typography, makeStyles } from '@material-ui/core';

//--- Base Component
import Page from 'src/components/Page';
// import Logo from 'src/components/Logo';

//--- Child Component
import JWTLogin from './JWTLogin';

//--- Custom component
import { ROUTER_NAME } from 'src/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f4f6f8',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },

  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80
  },

  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400
  },

  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  }
}));

const LoginView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="BookiPay - Login">
      <Container className={classes.cardContainer} maxWidth="sm">
        <Box mb={8} display="flex" justifyContent="center">
          {/* <RouterLink to={ROUTER_NAME.DEFAULT}>
            <Logo />
          </RouterLink> */}
        </Box>
        <Card>
          <CardContent className={classes.cardContent}>
            <Box alignItems="center" display="flex" justifyContent="center" mb={3}>
              <div>
                <Typography color="textPrimary" gutterBottom variant="h2">
                  Sign in
                </Typography>
                <Typography variant="body2">Sign in on the internal platform</Typography>
              </div>
            </Box>

            <Box flexGrow={1}>
              <JWTLogin />
            </Box>

            <Box my={3}>
              <Divider />
            </Box>

            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Link
                component={RouterLink}
                to={ROUTER_NAME.LOGIN}
                variant="body2"
              >
                Create new account
              </Link>

              <Link component={RouterLink} to={ROUTER_NAME.LOGIN} variant="body2">
                Forgot password
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default LoginView;
