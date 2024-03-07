const mongoose = require('mongoose');

const associacaoSchema = new mongoose.Schema({
    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    produtoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
    },
    nomeCliente: String,
    nomeProduto: String
});

module.exports = mongoose.model('Associacao', associacaoSchema);