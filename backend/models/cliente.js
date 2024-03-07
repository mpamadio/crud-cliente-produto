const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: String,
    documento: String,
    telefone: String,
    email: String,
    ativo: Boolean
});

module.exports = mongoose.model('Cliente', clienteSchema);