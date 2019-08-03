import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Favorite from '@material-ui/icons/Favorite';

import './index.css';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
        flexGrow: 1,
        "& a" : {
            color: "#fff",
            textDecoration: "none",
        },
        '& span':{
          color: '#990405',
        },
        '& svg':{
          width: '40px',
          height: '40px',
          color: '#990405',
          display: 'block',
          margin: '0px auto',
        }
    },
    appBar : {
        backgroundColor: "#C01C10",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
      title: {
        flexGrow: 1,
    },
    content: {
        background: "#F5E9DA",
        width: "100%",
        height: "-webkit-fill-available",
        display: "grid",
        alignContent: "center",
        textAlign: "center",
        '& h2' : {
            opacity: "0.8",
        }
    }

}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.content}>
            <Typography variant="h3" component="h2" gutterBottom>
                A <span>Social Me</span> agradece seu registro!
            </Typography>
            <Favorite className='coracao' />
        </div>
    </div>
  );
}
