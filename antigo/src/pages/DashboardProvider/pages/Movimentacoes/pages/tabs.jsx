import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MoneyAndCoinIcon from './../../../../assets/icons/money.png';
import CoinIcon from './../../../../assets/icons/coin.png';
import MoneyIcon from './../../../../assets/icons/notes.png';

import PageAmbos from './pages/Ambos/index';
import PageDinheiro from './pages/Dinheiro/index';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F7F7F7',
    '& .MuiTabs-indicator':{
        backgroundColor: '#990405',
    }
  },
  appBar:{
      backgroundColor: '#F7F7F7',
      color: '#303030',
      '& img':{
          width: "30px",
          height: "auto",
      }
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <AppBar position="static" className={classes.appBar}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Geral" 
                    icon={
                        <img src={MoneyAndCoinIcon} alt='icon' />
                    } {...a11yProps(0)} 
                />
                <Tab label="Dinheiro" 
                    icon={
                        <img src={MoneyIcon} alt='icon' />
                    } {...a11yProps(1)} 
                />
                <Tab label="Me's" 
                    icon={
                        <img src={CoinIcon} alt='icon' />
                    } {...a11yProps(2)} 
                />
            </Tabs>
          </AppBar>
        </Grid>
        
        <Grid item xs={12} md={12} lg={12}>
          <TabPanel value={value} index={0}>
            <PageAmbos />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PageDinheiro />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Two
          </TabPanel>
        </Grid>

      </Grid>
    </div>
  );
}
