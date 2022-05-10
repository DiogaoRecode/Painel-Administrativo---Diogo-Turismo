const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const DataSchema = new mongoose.Schema({
  nome_usuario:String,
  email_usuario:String,
  tipo_usuario:{type:Number,default:1},
  senha_usuario:String,
},{
  timestamps:true    //comando para salvar a data da criação
});

DataSchema.pre('save',function(next){  //comando que antes de salvar a senha, ela seja criptografada automaticamente
  if(!this.isModified("senha_usuario")){ //caso a senha não seja modificada, não returna nada!
   return next();
  }
  this.senha_usuario = bcrypt.hashSync(this.senha_usuario,10); //senão mande a senha criptografada
  next();  //comando necessario para sair do metodo
});

DataSchema.pre('findOneAndUpdate', function (next){
  var password = this.getUpdate().senha_usuario+'';  //+'': serve para a senha e retornar como uma string
  if(password.length<40){
      this.getUpdate().senha_usuario = bcrypt.hashSync(password,10); // comando para retornar a senha criptografada
  }
  next();
});

const usuarios = mongoose.model('Usuarios',DataSchema);
module.exports = usuarios;
