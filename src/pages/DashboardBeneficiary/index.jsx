import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import HowToRegIcon from '@material-ui/icons/HowToReg';

import ButtonToggleDashboard from './Components/ButtonToggleDashboard/index';
import MenuMobileProfile from './Components/MenuMobileProfile/index';

import ContentMovimentacoes from './pages/Movimentacoes/index';
import ContentProgramas from './pages/Programas/index';
import ContentGestorBeneficios from './pages/GestorDeBeneficios/index';
import ContentPagarTransferir from './pages/Pagar_e_Transferir/index';
import ContentDuvidas from './pages/Duvidas/index';

import './index.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#F5F5F5',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: "#990405",
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundColor: '#990405',
    color: "#fff",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '& svg':{
      color: "#fff",
    },
  },
  drawerClose: {
    backgroundColor: '#990405',
    color: "#fff",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    '& svg':{
      color: "#fff",
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  buttonsGroup: {
    position: "absolute",
    right: "60px",
    display: "inline-flex",
    color: "#626262",
  },
  badge: {
    '& span':{
      backgroundColor: "#C01C10",
      color: "#fff",
    }
  }, 
  avatar: {
    marginRight: '10px',
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  function handleDrawerOpen() {
    setOpen(true);
  }
  function handleDrawerClose() {
    setOpen(false);
  }
  const [values, setValues] = React.useState({
    pageMovimentacoes: true,
    pageProgramas: false,
    pageGestorBeneficios: false,
    pagePagarTransferir: false,
    pageDuvidas: false,
    animacaoEntrada: false
  });

  const setActivedPage = (page) => {
    setValues({
      ...values,
      pageMovimentacoes: false,
      pageProgramas: false,
      pageGestorBeneficios: false,
      pagePagarTransferir: false,
      pageDuvidas: false,
      [page]: true,
      animacaoEntrada: true
    })
  };
  const changeAnimation = () => {
    if (values.animacaoEntrada) {
      setTimeout(
        function() {
          setValues({...values, animacaoEntrada: false })
        }
      ,600);
    }
  }
  // PAGE Movimentações
  const renderpageMovimentacoes= () => {
    if(values.pageMovimentacoes) {
      return (
       <ContentMovimentacoes />
      )
    }
  }
  const toggleMovimentacoes= () => {
    if(values.pageMovimentacoes) {
      return
    }else{
      setActivedPage('pageMovimentacoes');
    }
  }
  // PAGE Programas
  const renderpageProgramas= () => {
    if(values.pageProgramas) {
      return (
       <ContentProgramas />
      )
    }
  }
  const toggleProgramas= () => {
    if(values.pageProgramas) {
      return
    }else{
      setActivedPage('pageProgramas');
    }
  }
  // PAGE GestorBeneficios
  const renderpageGestorBeneficios= () => {
    if(values.pageGestorBeneficios) {
      return (
       <ContentGestorBeneficios />
      )
    }
  }
  const toggleGestorBeneficios= () => {
    if(values.pageGestorBeneficios) {
      return
    }else{
      setActivedPage('pageGestorBeneficios');
    }
  }
  // PAGE PagarTransferir
  const renderpagePagarTransferir= () => {
    if(values.pagePagarTransferir) {
      return (
       <ContentPagarTransferir />
      )
    }
  }
  const togglePagarTransferir= () => {
    if(values.pagePagarTransferir) {
      return
    }else{
      setActivedPage('pagePagarTransferir');
    }
  }
  // PAGE Duvidas
  const renderpageDuvidas= () => {
    if(values.pageDuvidas) {
      return (
       <ContentDuvidas />
      )
    }
  }
  const toggleDuvidas= () => {
    if(values.pageDuvidas) {
      return
    }else{
      setActivedPage('pageDuvidas');
    }
  }
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          {/* DESKTOP */}
          <Hidden smDown>
            <div className={classes.buttonsGroup}>
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTPNzzUWagqIkm-tugjAX_xqBrKTT3J_brTdLRBPggDBQ877E" className={classes.avatar} />
              <IconButton aria-label="Show 4 new mails" color="inherit">
                <Badge badgeContent={4} className={classes.badge}>
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="Show 17 new notifications" color="inherit">
                <Badge badgeContent={17} className={classes.badge}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <ButtonToggleDashboard />
              <IconButton color="inherit">
                <PowerSettingsNewIcon />
              </IconButton>
            </div>
          </Hidden>
          {/* MOBILE */}
          <Hidden smUp>
            <MenuMobileProfile />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <ListItem button onClick={toggleMovimentacoes}>
          <ListItemIcon><EqualizerIcon /></ListItemIcon>
          <ListItemText primary="Movimentações" />
        </ListItem>
        <ListItem button onClick={toggleProgramas}>
          <ListItemIcon><HowToRegIcon /></ListItemIcon>
          <ListItemText primary="Programas" />
        </ListItem>
        <ListItem button onClick={toggleGestorBeneficios}>
          <ListItemIcon><LocalAtmIcon /></ListItemIcon>
          <ListItemText primary="Gestor e Benefícios" />
        </ListItem>
        <ListItem button onClick={togglePagarTransferir}>
          <ListItemIcon><CompareArrowsIcon /></ListItemIcon>
          <ListItemText primary="Pagar e Transferir" />
        </ListItem>
        <ListItem button onClick={toggleDuvidas}>
          <ListItemIcon><ContactSupportIcon /></ListItemIcon>
          <ListItemText primary="Dúvidas" />
        </ListItem>
      </Drawer>
      <main className={classes.content}>
        <div className={" " + (values.animacaoEntrada ? 'animacaoEntrada' : 'semAnimacao')}>
          <div className={classes.toolbar} />
          {changeAnimation()}
          {renderpageMovimentacoes()}
          {renderpageProgramas()}
          {renderpageGestorBeneficios()}
          {renderpagePagarTransferir()}
          {renderpageDuvidas()}
        </div>
      </main>
    </div>
  );
}
