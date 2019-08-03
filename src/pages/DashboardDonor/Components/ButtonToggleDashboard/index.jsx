import React from 'react';
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CachedIcon from '@material-ui/icons/Cached';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StoreIcon from '@material-ui/icons/Store';

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
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles(theme => ({
  root: {

  },
  link:{
    color: "#303030",
    textDecoration: "none",
  }
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <IconButton
            aria-label="account of current user"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
            <CachedIcon />
        </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={`/dashboard_beneficiary`} className={classes.link}>
          <StyledMenuItem>
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="Painel de Beneficiário" />
          </StyledMenuItem>
        </Link>

        <Link to={`/dashboard_donor`} className={classes.link}>
          <StyledMenuItem>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Painel de Doador" />
          </StyledMenuItem>
        </Link>

        <Link to={`/dashboard_provider`} className={classes.link}>
          <StyledMenuItem>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Painel de Fornecedor" />
          </StyledMenuItem>
        </Link>
        
      </StyledMenu>
    </div>
  );
}