import React from 'react';

import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';
import Login from './pages/admin/login';
import PrivateRoute from './services/wAuth';

import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/produtos.editar';
import ProdutoCadastrar from './pages/admin/produtos/produtos.cadastrar';

import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

//IMPORTS CLIENT
import Home from './pages/client/home';
import ProdutoDetails from './pages/client/produto/produtos.details';

export default function Rotas (){
 return(
   <Router>
   <Routes>
     {/*Rota Cliente*/}
    <Route exact path="/" element={<Home /> } />
    <Route path="/produtos/:idProduto" element={<ProdutoDetails/>} />
    
    {/*Rota Admin*/}
    <Route path="/admin" element={<Dashboard/>} />
    <Route path="/admin/login" element ={<Login />} />

    <Route path="/admin/produtos" element={<Produtos/>} />
    <Route path="/admin/produtos/cadastrar" element={<ProdutoCadastrar/>} />
    <Route path="/admin/produtos/editar/:idProduto"element={<ProdutoEditar/>} />
    <Route
  path="/admin/usuarios"
  element={
    <PrivateRoute>
      <Usuarios />
    </PrivateRoute>
  }
/>
    <Route path="/admin/usuarios/cadastrar" element={<UsuarioCadastrar/>} />
    <Route path="/admin/usuarios/editar/:idUsuario" element={<UsuarioEditar/>} />
   </Routes>
  
   </Router>
 )
}

 
