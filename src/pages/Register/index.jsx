import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import InstituicaoIcon from '@material-ui/icons/AccountBalance';
import PersonIcon from '@material-ui/icons/Person';

import Logo from './../../assets/logo.png';

import FormPersonRegister from './Components/FormPerson/index';
import FormInstitutionRegister from './Components/FormInstitution/index';

// TABS
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar : {
      backgroundColor: "#C01C10",
      '& img' : {
        width: "80px",
        height: "auto",
      },
      '& a': {
        display: "block",
        margin: "0px auto",
      }
    },
    content: {
      background: "#F5E9DA",
      width: "100%",
      height: "auto",
      paddingTop: "100px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    tabsBar: {
      width: "400px",
      display: "block",
      margin: "0px auto",
      '& button' : {
        width: "50%",
        color: "#3F3E3E",
      },
      '& button:focus' : {
        color: "#880000 !important",
      },
      '& button:focused' : {
        color: "#880000 !important",
      },
      '& .MuiTabs-indicator' : {
        backgroundColor: "#880000",
      },
    }

}));

export default function Register() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
          <Link to={`/`}>
            <img src={Logo} alt="Logo" />
          </Link>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Container maxWidth="lg">
            
          <AppBar position="static" color="default" className={classes.tabsBar}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
            >
              <Tab label="Pessoa" icon={<PersonIcon />} {...a11yProps(0)} />
              <Tab label="Instituição" icon={<InstituicaoIcon />} {...a11yProps(1)} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            <FormPersonRegister />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FormInstitutionRegister />
          </TabPanel>

            
          </Container>
        </div>
    </div>
  );
}
