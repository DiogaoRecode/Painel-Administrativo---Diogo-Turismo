const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require ('cors');
const path = require ('path');
const mongoose  = require('mongoose');
const routes = require('../backend/src/routes');


const app= express(); //comando que vai receber o pacote express
const port = process.env.PORT || 5000; //commando para identificar a porta utilizada, senão tiver irá adotar o valor 5000



mongoose.connect("mongodb://0.0.0.0:27017/BuyEnergy",{    //coloca-se o link de conexao com o mongoDB
  useUnifiedTopology:true,
  useNewUrlParser:true,
  //useFindAndModify:false
},function (err){
    if(err){
      console.log(err)
    }else{
      console.log('MongoDB CONECTADO com sucesso!')
    }
})

app.use(cors()); //é uma medida ou segurança para informar quais os dominios estarão consumindo a base APIS

app.use(cookieParser()); 

app.use(express.json()); //é um metodo para receber e enviar json do frontend para o bachend.

app.use(routes);

app.listen(port,function(){
  console.log(`Server runing on port ${port}`)
})