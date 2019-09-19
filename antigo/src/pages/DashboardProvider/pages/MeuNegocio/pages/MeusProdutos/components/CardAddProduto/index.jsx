import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';

import add from './../../../../../../../../assets/icons/plus3.png';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#990405',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  card: {
    maxWidth: 250,
    height: 240,
    textAlign: 'center',
    margin: '0px auto',
    alignItems: 'center',
    display: 'grid',
    '&:hover':{
      cursor: 'pointer',
    },
    '& img':{
        width: '40%',
        display: 'block',
        margin: '0px auto',
    },
    '& h6':{
        color: '#990405',
        margin: '0px',
        textTransform: 'uppercase'
    }
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Card className={classes.card} onClick={handleClickOpen}>
        <img src={add} alt='icon' />
        <Typography variant="h6" gutterBottom>
            Novo Produto
        </Typography>
      </Card>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Criando um Novo Produto
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              Criar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Typography variant="h4" className={classes.title}>
            Forms
          </Typography>
        </List>
      </Dialog>
    </div>
  );
}
