const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: String,
    ativo: Boolean
});

module.exports = mongoose.model('Produto', produtoSchema);