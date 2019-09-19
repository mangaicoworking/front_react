import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
        flexGrow: 1,
        "& a" : {
            color: "#fff",
            textDecoration: "none",
        }
    },
    content: {
        background: "#F5E9DA",
        width: "100%",
        minHeight: "-webkit-fill-available",
        textAlign: "center",
        paddingTop: '30px',
        '& h2' : {
            opacity: "0.5",
        }
    },
    buttonAdd:{
        backgroundColor: '#990405',
        color: '#fff',
        padding: '20px',
        fontSize: '16pt',
        marginTop: '50px',
        '&:hover':{
            backgroundColor: '#880000',
            color: '#fff', 
        }
    }

}));

export default function InspiraHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.content}>
            <Link to={`/registro`}>
                <Button size="large" variant="contained" className={classes.buttonAdd}>
                    Quero me registrar agora!
                </Button>
            </Link> 
        </div>
    </div>
  );
}
