const express = require('express');
const router = express.Router();
const Associacao = require('../models/associacao');
const Cliente = require('../models/cliente');
const Produto = require('../models/produto');

router.get('/', async (req, res) => {
    try {
        const associacoes = await Associacao.find();
        res.json(associacoes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { clienteId, produtoId } = req.body;

    // Verificar se o cliente existe
    const cliente = await Cliente.findById(clienteId);
    if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    // Verificar se o produto existe
    const produto = await Produto.findById(produtoId);
    if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }

    // Se o cliente e o produto existirem, criar a associação
    const associacao = new Associacao({
        clienteId: clienteId,
        produtoId: produtoId,
        nomeCliente: cliente.nome, // Adicione o nome do cliente à associação
        nomeProduto: produto.nome // Adicione o nome do produto à associação
    });

    try {
        const newAssociacao = await associacao.save();
        res.status(201).json(newAssociacao);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const associacao = await Associacao.findById(req.params.id);
        if (!associacao) {
            return res.status(404).json({ message: 'Associação não encontrada' });
        }
        await Associacao.deleteOne({ _id: req.params.id }); // Remover a associação pelo ID
        res.json({ message: 'Associação deletada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;