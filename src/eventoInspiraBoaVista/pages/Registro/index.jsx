import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import MaskedInput from 'react-text-mask';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';

import Alert from './components/Alert/index';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '50px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 'auto',
    margin: '0px auto 50px',
    borderBottom: '4px solid #990405',
    fontSize: '35pt',
    '& svg':{
      fontSize: '50pt',
      color: '#303030',
    }
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '30px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    color: '#880000',
  },
  formControl:{
    textAlign: "justify",
    width: "100%",
  },
  rowButtonSubmit: {
    '& button' : {
      backgroundColor: "#990405",
      color: "#fff",
      marginTop: "50px",
      display: "block",
      margin: '0px auto',
      padding: '30px',
      fontSize: '20pt',
    },
    '& button:hover' : {
      backgroundColor: "#880000",
    }
  },
  rowButtonLink :{
    '& a' : {
      float: "right",
      display: "block",
    },
  }
}));

export default function FormPersonRegister() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    redirect: false,
    alertOpen: false,
    alertVariant: 'success',
    alertMessage: 'Teste',

    nome: '',
    nomeSocial: '',
    sexo: '',
    estadoCivil: '',
    rg: '',
    cpf: '',
    cns: '',
    pis: '',
    escolaridade: '',
    profissao: '',
    telefoneFixo: '',
    celular: '',
    email: '',
    pais: 'Brasil',
    cidade: 'Boa Vista',
    estado: 'Roraima',

    dataNascimento: '',
    nacionalidade: '',
    paisNascimento: '',
    estadoNascimento: '',
    cidadeNascimento: '',
    maisInformacoes: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitPerson = () =>  {
    const obj = {
      dados: {
        nome: values.nome,
        nomeSocial: values.nomeSocial,
        sexo: values.sexo,
        estadoCivil: values.estadoCivil,
        rg: values.rg,
        cpf: values.cpf,
        cns: values.cns,
        pis: values.pis,
        escolaridade: values.escolaridade,
        profissao: values.profissao,
        telefoneFixo: values.telefoneFixo,
        celular: values.celular,
        email: values.email,
        pais: values.pais,
        cidade: values.cidade,
        estado: values.estado,
        nascimento: {
          data: values.dataNascimento,  
          nacionalidade: values.nacionalidade,
          pais: values.paisNascimento,
          estado: values.estadoNascimento,
          cidade: values.cidadeNascimento
        }
      },
      maisInformacoes: values.maisInformacoes  
    };

    if(obj.dados.nome === ''){
      setValues({
        ...values,
        alertOpen: true,
        alertVariant: 'warning',
        alertMessage: 'O Nome está em branco'
      });
    }else if (obj.dados.cpf === '') {
      setValues({
        ...values,
        alertOpen: true,
        alertVariant: 'warning',
        alertMessage: 'Seu CPF é obrigatório'
      });
    }else{
        axios.post('https://evening-stream-13777.herokuapp.com/api/person', obj)
        .then(
          setValues({ 
            nome: '',
            nomeSocial: '',
            sexo: '',
            estadoCivil: '',
            rg: '',
            cpf: '',
            cns: '',
            pis: '',
            escolaridade: '',
            profissao: '',
            telefoneFixo: '',
            celular: '',
            pais: '',
            cidade: '',
            estado: '',
            redirect: true,
            alertOpen: true,
            alertVariant: 'success',
            alertMessage: 'Criado Com Sucesso'
          })
        );
    }
  };

  const renderRedirect = () => {
    if (values.redirect) {
      return <Redirect to={{
        pathname: '/obrigado',
      }} />
    }
  }
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

  return (
    <div className={classes.root}>
      {renderRedirect()}
      {renderAlert()}
      {changeAlert()}
      <Paper className={classes.paper2}>
        <PersonIcon />
        <Typography variant="h4" component="h2" gutterBottom>
          Faça seu cadastro e participe dessa ideia
        </Typography>
      </Paper>
      
      

      <Paper className={classes.paper}>
      {/* LINHA 1 (NOME - NOME PÚBLICO) */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <TextField
            required
            label="Nome"
            value={values.nome}
            onChange={handleChange('nome')}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Sexo</FormLabel>
            <RadioGroup aria-label="position" name="position" value={values.sexo} onChange={handleChange('sexo')} row>
            <FormControlLabel
              value="Feminino"
              control={<Radio color="primary" />}
              label="Feminino"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Masculino"
              control={<Radio color="primary" />}
              label="Masculino"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Outro"
              control={<Radio color="primary" />}
              label="Outro"
              labelPlacement="end"
            />
            </RadioGroup>
          </FormControl>
        </Grid>
        {/* LINHA 2 (SEXO - ESTADO CIVIL - RG) */}
        <Grid item xs={12} sm={8}>
          <TextField
            label="Nome Social"
            value={values.nomeSocial}
            onChange={handleChange('nomeSocial')}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">EstadoCivil</InputLabel>
            <Select
              value={values.estadoCivil}
              onChange={handleChange('estadoCivil')}
            >
              <MenuItem value={"Solteiro(a)"}>Solteiro(a)</MenuItem>
              <MenuItem value={"Casado(a)"}>Casado(a)</MenuItem>
              <MenuItem value={"Viúvo(a)"}>Viúvo(a)</MenuItem>
              <MenuItem value={"Separado Judicialmente"}>Separado Judicialmente</MenuItem>
              <MenuItem value={"Divorciado"}>Divorciado</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="RG"
              value={values.rg}
              onChange={handleChange('rg')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        {/* LINHA 3 (CPF - CNS - PIS) */}
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              required
              label="CPF"
              value={values.cpf}
              onChange={handleChange('cpf')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="CNS"
              value={values.cns}
              onChange={handleChange('cns')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="PIS"
              value={values.pis}
              onChange={handleChange('pis')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        {/* LINHA 4 (ESCOLARIDADE - PROFISSÃO - TELEFONE FIXO - CELULAR) */}
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <InputLabel>Escolaridade</InputLabel>
            <Select
              value={values.escolaridade}
              onChange={handleChange('escolaridade')}
            >
              <MenuItem value={"Educação Infantil"}>Educação Infantil</MenuItem>
              <MenuItem value={"Fundamental"}>Fundamental</MenuItem>
              <MenuItem value={"Médio"}>Médio</MenuItem>
              <MenuItem value={"Superior"}>Superior</MenuItem>
              <MenuItem value={"Pós-Graduação"}>Pós-Graduação</MenuItem>
              <MenuItem value={"Mestrado"}>Mestrado</MenuItem>
              <MenuItem value={"Doutorado"}>Doutorado</MenuItem>
              <MenuItem value={"Escola"}>Escola</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Profissão"
              value={values.profissao}
              onChange={handleChange('profissao')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Telefone Fixo"
              value={values.telefoneFixo}
              onChange={handleChange('telefoneFixo')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Celular"
              value={values.celular}
              onChange={handleChange('celular')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Email"
              value={values.email}
              onChange={handleChange('email')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        {/* LINHA 5 (PAÍS - ESTADO - CIDADE) */}
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="País"
              value={values.pais}
              onChange={handleChange('pais')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Estado"
              value={values.estado}
              onChange={handleChange('estado')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Cidade"
              value={values.cidade}
              onChange={handleChange('cidade')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
    
      </Grid>
      </Paper>

      
      <Paper className={classes.paper3}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h4" component="h2" gutterBottom>
          Sobre o Nascimento
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControl className={classes.formControl}>
          <Typography variant="body1" component="h2" gutterBottom>
            Data de Nascimento Nascimento
          </Typography>
            <TextField
              value={values.dataNascimento}
              onChange={handleChange('dataNascimento')}
              className={classes.textField}
              type="date"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Nacionalidade"
              value={values.nacionalidade}
              onChange={handleChange('nacionalidade')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControl className={classes.formControl}>
            <TextField
              label="País Nascimento"
              value={values.paisNascimento}
              onChange={handleChange('paisNascimento')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Estado Nascimento"
              value={values.estadoNascimento}
              onChange={handleChange('estadoNascimento')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Cidade Nascimento"
              value={values.cidadeNascimento}
              onChange={handleChange('cidadeNascimento')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        </Grid>
      </Paper>
      

      
      <Paper className={classes.paper3}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h4" component="h2" gutterBottom>
          Mais Informações
        </Typography>
      </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Mais Informações"
              value={values.maisInformacoes}
              onChange={handleChange('maisInformacoes')}
              className={classes.textField}
              multiline
              rowsMax="10"
            />
          </FormControl>
        </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} className={classes.rowButtonSubmit}>
          <Button size='large' variant="contained" onClick={submitPerson}>
            Criar Cadastro
          </Button>
        </Grid>
      </Grid>
      
      
      
    </div>
  );
}
