const mongoose = require('mongoose');

const associacaoSchema = new mongoose.Schema({
    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    produtoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
    }
});

module.exports = mongoose.model('Associacao', associacaoSchema);