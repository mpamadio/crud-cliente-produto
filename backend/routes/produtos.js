const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const produto = new Produto({
        nome: req.body.nome,
        ativo: req.body.ativo
    });
    try {
        const newProduto = await produto.save();
        res.status(201).json(newProduto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        produto.nome = req.body.nome;
        produto.ativo = req.body.ativo;
        const updatedProduto = await produto.save();
        res.json(updatedProduto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        await produto.remove();
        res.json({ message: 'Produto deletado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;