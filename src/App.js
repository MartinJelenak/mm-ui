import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'found'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <ListItem button component={CustomLink}>
      {/* <ListItemIcon>{icon}</ListItemIcon> */}
      <ListItemText primary={primary} />
    </ListItem>
  );
}

function App({ children }) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit"><ListItemLink
            to={"/Login"}
            primary="Sign in"
          /></Button>
          <Button color="inherit"><ListItemLink
            to={"/register"}
            primary="Sign up"
          /></Button>
        </Toolbar>
      </AppBar>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          {children}

        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
