const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/gerenciamento-produto-cliente', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
});

app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use('/clientes', require('./routes/clientes.js'));
app.use('/produtos', require('./routes/produtos.js'));
app.use('/associacoes', require('./routes/associacoes.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
