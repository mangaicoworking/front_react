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
    leftItens : {
      display: "flex",
      alignItems: "center",
      width: "-webkit-fill-available",
      "& button" : {
        color: "var(--primary)",
        textDecoration: "none",
      },
    },
    rightItens : {
      display: "flex",
      alignItems: "center",
    },
    logo : {
      width: "auto",
      height: "35px",
      paddingRight: "40px",
    },
    buttonMainMenu: {
      color: "var(--primary)",
      border: "1px solid var(--primary)",
      textDecoration: "none",
      margin: '0px 5px',
      "&:hover" : {
        color: "var(--white)",
        backgroundColor: "var(--primary)",
        border: "1px solid var(--primary)",
      }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuDropdown: {
      backgroundColor: "transparent",
      boxShadow: "none",
      "& a" : {
        color: "var(--dark)",
        textDecoration: "none",
      },
    },
    itemDropdown: {
      display: "flex",
      textDecoration: "none",
      color: "var(--dark)",
    }

}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: "var(--primary)",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function NavbarUnauthenticated() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <div className={classes.leftItens}>
              {/* 
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              */}
              <Link to={`/`}>
                <img className={classes.logo} src={Logo} alt ="logo social" />
              </Link>
              <Button
                className={classes.menuDropdown}
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
              >
                Sobre
              </Button>
              <StyledMenu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem>
                  <Link to={`/sobre`} className={classes.itemDropdown}>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sobre" />
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Link to={`/como-funciona`} className={classes.itemDropdown}>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Como funciona" />
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Link to={`/onde-estamos`} className={classes.itemDropdown}>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Onde Estamos" />
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Link to={`/impacto`} className={classes.itemDropdown}>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Impacto" />
                  </Link>
                </StyledMenuItem>
              </StyledMenu>
              
            </div>
            <div className={classes.rightItens}>
              <Link to={`/registro`} className={classes.buttonMainMenu}>
                <Button color="inherit">Registro</Button>
              </Link>
              <Link to={`/entrar`} className={classes.buttonMainMenu}>
                <Button color="inherit">Entrar</Button>
              </Link>
            </div> 
          </Toolbar>
        </AppBar>
    </div>
  );
}
