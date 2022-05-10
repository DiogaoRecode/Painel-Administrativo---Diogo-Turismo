const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nome_produto:String,
  descricao_produto:String,
  preco_produto:Number,
  qtd_produto:{type:Number,default:0},
},{
  timestamps:true    //comando para salvar a data da criação
});

const produtos = mongoose.model('Produtos',DataSchema);
module.exports = produtos;
