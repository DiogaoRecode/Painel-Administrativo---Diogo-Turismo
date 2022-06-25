import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import api from '../../../services/api';
import {setNomeUsuario,setIdUsuario,login} from '../../../services/auth';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Diogo Turismo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

    //const classes = useStyles();
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');


    async function handleSubmit (){
    alert( 'Autenticar: '+email);
    await api.post('/api/usuarios/login',{email,senha})
    .then(res =>{
      if(res.status===200){
       if(res.data.status===1){
        //...localstorage
        login(res.data.token);
        setIdUsuario(res.data.id_client);
        setNomeUsuario(res.data.user_name);

        window.location.href='/admin'
       }else if(res.data.status===2){
        alert('Atenção:' +res.data.error);
       }
      }else{
        alert('Erro no servidor')
      }
    })

  };  



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Diogo Turismo
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}> 
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Digite o seu email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Digite a sua senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={senha}
            onChange={e => setSenha(e.target.value)}
            />
            
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Entrar
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}