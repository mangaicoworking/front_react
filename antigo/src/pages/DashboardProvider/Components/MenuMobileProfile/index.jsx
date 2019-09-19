import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StoreIcon from '@material-ui/icons/Store';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  button: {
      position: "absolute",
      right: "25px",
      '& button':{
        backgroundColor: "#990405",
        color: "#fff",
      },
      '& :hover':{
        backgroundColor: "#D4484A",
        color: "#fff"
      }
  },
  badge: {
    '& span':{
      backgroundColor: "#C01C10",
      color: "#fff",
    }
  },
  logout: {
      '& svg': {
        color: "#990405",
      }
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button>
            <ListItemIcon>
                <Badge badgeContent={4} className={classes.badge}>
                  <MailIcon />
                </Badge>
            </ListItemIcon>
            <ListItemText primary='Mensagens'/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Badge badgeContent={17} className={classes.badge}>
                  <NotificationsIcon />
                </Badge>
            </ListItemIcon>
            <ListItemText primary='Notificações'/>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button>
            <ListItemIcon>
                <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="Painel de Beneficiário" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Painel de Doador" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Painel de Fornecedor" />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button className={classes.logout}>
            <ListItemIcon>
                <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.button}>
        <IconButton
            onClick={toggleDrawer('right', true)}
        >
            <AccountCircle />
        </IconButton>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
