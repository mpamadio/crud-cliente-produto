const express = require('express');
const router = express.Router();
const Associacao = require('../models/associacao');

router.get('/', async (req, res) => {
    try {
        const associacoes = await Associacao.find();
        res.json(associacoes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const associacao = new Associacao({
        clienteId: req.body.clienteId,
        produtoId: req.body.produtoId
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
        await associacao.remove();
        res.json({ message: 'Associação deletada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;