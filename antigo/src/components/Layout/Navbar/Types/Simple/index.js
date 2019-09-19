import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import Logo from './../../../../../assets/images/logo.png';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar : {
        backgroundColor: "var(--white)",
    },
    logo : {
      margin: "0px auto",
      "& img" : {
        width: "auto",
        height: "35px",
      }
    },

}));


export default function NavbarSimple() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Link to={`/`} className={classes.logo}>
              <img src={Logo} alt ="logo social" />
            </Link>
          </Toolbar>
        </AppBar>
    </div>
  );
}
