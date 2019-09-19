import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PagePrograma from './pages/InformacoesDoPrograma/index';

import Programa1 from './../../../../assets/icons/programa1.png';
import Programa2 from './../../../../assets/icons/programa2.png';
import Programa3 from './../../../../assets/icons/programa3.png';
import Programa4 from './../../../../assets/icons/programa4.png';

import Plus from './../../../../assets/icons/plus2.png';

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& .MuiTabs-indicator':{
      backgroundColor: '#990405',
    }
  },
  appBar:{
    width: 'fit-content',
  },
  tabs:{
    '& img':{
      width: "30px",
      height: "auto",
    }
  },
  tabNewProgram: {
    backgroundColor: '#990405',
    color: '#fff',
  },
  
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          className={classes.tabs}
        >
          <Tab label="Programa 1" icon={<img src={Programa1} alt="icon" />} {...a11yProps(0)} />
          <Tab label="Programa 2" icon={<img src={Programa2} alt="icon" />} {...a11yProps(1)} />
          <Tab label="Programa 3" icon={<img src={Programa3} alt="icon" />} {...a11yProps(2)} />
          <Tab label="Programa 4" icon={<img src={Programa4} alt="icon" />} {...a11yProps(3)} />
          <Tab label="Novo Programa" className={classes.tabNewProgram} icon={<img src={Plus} alt="icon" />} {...a11yProps(4)} />


        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PagePrograma
          imagemDoPrograma={Programa1}
          nomeDoPrograma='Programa 1'
          beneficiariosNoPrograma='221'
          atividadesDesenvolvidas='1.329'
          investimentoNoPrograma='R$ 18.445'
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PagePrograma
          imagemDoPrograma={Programa2}
          nomeDoPrograma='Programa 2'
          beneficiariosNoPrograma='215'
          atividadesDesenvolvidas='2.141'
          investimentoNoPrograma='R$ 13.141'
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PagePrograma
          imagemDoPrograma={Programa3}
          nomeDoPrograma='Programa 3'
          beneficiariosNoPrograma='352'
          atividadesDesenvolvidas='3.002'
          investimentoNoPrograma='R$ 22.780'
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PagePrograma
          imagemDoPrograma={Programa4}
          nomeDoPrograma='Programa 4'
          beneficiariosNoPrograma='423'
          atividadesDesenvolvidas='4.151'
          investimentoNoPrograma='R$ 23.732'
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        TELA CRIAR PROGRAMA
      </TabPanel>
    </div>
  );
}
