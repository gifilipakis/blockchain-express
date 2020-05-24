const Dados = require('../models/dados');
const CurriculoModel = require('../models/curriculo-model');

exports.getData = () => {
    return Dados;
}

exports.getName = () => {
    return Dados.nome;
}

function addNewBlock(newBlock) {
    ProdutoBlockchain.addNewBlock(newBlock);
}
