import React,{useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import api from '../../../services/api';

const mdTheme = createTheme();
export default function UsuariosCadastrar() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  async function handleSubmit(){
    const data = {nome_usuario:nome, email_usuario:email, tipo_usuario:tipo, senha_usuario:senha}

    const response = await api.post('/api/usuarios',data);

    if(response.status===200){
      window.location.href='/usuarios'
    }else {
      alert('Erro ao cadastrar o usuário');
    }

  }


    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MenuAdmin title={'USUÁRIOS'}/>
  
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
  
            <Grid container spacing={3}>
            <Grid item sm={12}>
            <Paper
             sx={{
              padding: 10,
              display: 'flex',
              flexDirection: 'column',
              
            }}>
              <h2>Cadastro de Usuários</h2>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
            <TextField
            required
            id="nome"
            name="nome"
            label="Nome Completo"
            fullWidth
            autoComplete="nome"
            variant="standard"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          </Grid>
          <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
          <InputLabel id="labelTipo">Tipo</InputLabel>
           <Select
            labelId="labelTipo"
            id="tipo"
            value={tipo}
            label="Age"
            onChange={e => setTipo(e.target.value)}
             >
           <MenuItem value={1}>Administrador</MenuItem>
          <MenuItem value={2}>Funcionário</MenuItem>
          </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            type="password"
            required
            id="senha"
            name="senha"
            label="Senha"
            fullWidth
            autoComplete="senha"
            variant="standard"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
        <Button variant="contained" color="success" onClick={handleSubmit} >Salvar</Button>
        </Grid>
        </Grid>
        </Paper>
        </Grid>
        </Grid>
              <Footer sx={{ pt: 4 }} />
             </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }