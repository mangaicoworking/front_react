import React from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

import Alert from './../../../../components/Alerts/index';
import AlertStatic from './../../../../components/AlertStatic/index';


const useStylesPageLogininstitution = makeStyles(theme => ({
  layout: {
    width: 'auto',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: "30px",
      }
  },
  button: {
    margin: "30px auto",
  },
  buttonBack: {
    color: "#303030",
    opacity: "0.8"
  },
  avatar: {
      margin: "20px auto",
      backgroundColor: '#880000',
  },
  textField: {
    width: "100%",
    margin: "10px 0px",
      '& label':{
        backgroundColor: "#fff",
        padding: "0px 5px",
      }
  },
  rememberMe: {
    textAlign: "justify"
  }
}));


export default function Checkout() {
  const classes = useStylesPageLogininstitution();
  const [values, setValues] = React.useState({
    redirect: false,
    alertOpen: false,
    alertVariant: 'success',
    alertMessage: 'Teste',
    activeStep: 1,

    cnpj: '',
    cnpjSituation: 0,
    password: '',
    institution: []
  });

const handleBack= ()=> {
  if(values.activeStep !== 1){
    setValues({ ...values, activeStep: 1 });
  }
};
const handleChange = name => event => {
  setValues({ ...values, [name]: event.target.value });
};
const renderAlert = () => {
  if (values.alertOpen) {
    return (
      <Alert 
        open={values.alertOpen}
        variant={values.alertVariant}
        message={values.alertMessage}
      />
    ) 
  }
}
const changeAlert = () => {
  if (values.alertOpen) {
    setTimeout(
      function() {
        setValues({...values, alertOpen: false })
      }
    ,5000);
  }
}
const consultInstitutionCNPJ = () =>  {
  if(values.cnpj.length < 1){
      setValues({
          ...values,
          alertOpen: true,
          alertVariant: 'warning',
          alertMessage: 'Informe um número de CNPJ.'
      });
  }else{
      axios.get(`http://localhost:3001/api/institution_consult_cnpj/${values.cnpj}`)
      .then(res => {
        if(res.data === 2){
          setValues({ ...values, 
            cnpjSituation: res.data,
            activeStep: values.activeStep+2,
            alertOpen: true,
            alertVariant: 'success',
            alertMessage: 'CNPJ cadastrado no sistema.'
          });
        }else if(res.data === 3){
          setValues({ ...values, 
            cnpjSituation: res.data,
            activeStep: values.activeStep+1
          });
        }
      })
  }
};

const createPassword = () =>  {
  const obj = {
    sistemas: {
      socialMe: {
        password: values.password
      }
    }
  };

  if(obj.sistemas.socialMe.password === ''){
    setValues({
      ...values,
      alertOpen: true,
      alertVariant: 'error',
      alertMessage: 'Você precisa cadastrar uma senha.'
    });
  }else if (values.cnpj === '') {
    setValues({
      ...values,
      alertOpen: true,
      alertVariant: 'error',
      alertMessage: 'Seu CNPJ é obrigatório'
    });
  }else{
      axios.put(`http://localhost:3001/api/institution_update_by_cnpj/${values.cnpj}`, obj)
      .then(
        setValues({
          ...values,
          alertOpen: true,
          alertVariant: 'success',
          alertMessage: 'A senha foi cadastrada com sucesso',
          activeStep: values.activeStep+1
        })
      );
  }
};
const login = () =>  {
  if(values.password === ''){
    setValues({
      ...values,
      alertOpen: true,
      alertVariant: 'error',
      alertMessage: 'Sua senha é obrigatória'
    });
  }else if (values.cnpj === '') {
    setValues({
      ...values,
      alertOpen: true,
      alertVariant: 'error',
      alertMessage: 'Seu CNPJ é obrigatório'
    });
  }else{
      axios.get(`http://localhost:3001/api/institution_login/${values.cnpj}/${values.password}`)
      .then(res => {
        if(res.data === 1){
          setValues({
            ...values,
            alertOpen: true,
            alertVariant: 'error',
            alertMessage: 'Verifique novamente seus dados.'
          });
        }else if(res.data.length > 0){
          setValues({
            ...values,
            redirect: true,
            institution: res.data[0]
          });
        }
      });
  }
};

const renderInputPassword = () => {
  if(values.activeStep === 2 || values.activeStep === 3) {
    return (
      <TextField
        label="Senha"
        className={classes.textField}
        name="password"
        margin="normal"
        variant="outlined"
        value={values.password}
        onChange={handleChange('password')}
        type="password"
      />
    )
  }
}
const renderHelperText = () => {
  if(values.activeStep === 2 && values.cnpjSituation === 3 ) {
    return (
      <AlertStatic
        open={true}
        variant={'info'}
        message={'Observamos aqui que esse é o seu primeiro acesso. Cadastre uma nova senha para acessar o sistema.'}
      />
    )
  }
}
const renderButtonBack = () => {
  if(values.activeStep > 1) {
    return (
      <Button
        onClick={handleBack}
        className={classes.buttonBack}
      >
        Voltar
      </Button>
    )
  }
}
const renderButtonStep1 = () => {
  if(values.activeStep === 1) {
    return (
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={consultInstitutionCNPJ}
        className={classes.button}
      >
        Próximo
      </Button>
    )
  }
}
const renderButtonStep2 = () => {
  if(values.activeStep === 2) {
    return (
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={createPassword}
        className={classes.button}
      >
        Criar senha
      </Button>
    )
  }
}
const renderButtonStep3 = () => {
  if(values.activeStep === 3) {
    return (
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={login}
        className={classes.button}
      >
        Entrar
      </Button>
    )
  }
}
const renderRedirect = () => {
  if (values.redirect) {
    return <Redirect to={{
      pathname: '/dashboard_institution',
      state: { nome: 'ArthurProps' }
    }} />
  }
}

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {renderRedirect()}
          {renderAlert()}
          {changeAlert()}
            
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>

            <TextField
              label="CNPJ"
              className={classes.textField}
              name="cnpj"
              margin="normal"
              variant="outlined"
              value={values.cnpj}
              onChange={handleChange('cnpj')}
              type="text"
            />

            {renderInputPassword()}

            {renderHelperText()}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Me lembre"
            />
            
            {renderButtonStep1()}
            {renderButtonStep2()}
            {renderButtonStep3()}

            {renderButtonBack()}

            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Esqueceu a sua senha?
                </Link>
                </Grid>
                <Grid item>
                <Link href="/register" variant="body2">
                    {"Não tem um cadastro?"}
                </Link>
                </Grid>
            </Grid>
                

        </Paper>
      </main>
    </React.Fragment>
  );

}