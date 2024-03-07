const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', getCliente, (req, res) => {
    res.json(res.cliente);
});

router.post('/', async (req, res) => {
    const cliente = new Cliente({
        nome: req.body.nome,
        documento: req.body.documento,
        telefone: req.body.telefone,
        email: req.body.email,
        ativo: req.body.ativo
    });
    try {
        const newCliente = await cliente.save();
        res.status(201).json(newCliente);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id', getCliente, async (req, res) => {
    if (req.body.nome != null) {
        res.cliente.nome = req.body.nome;
    }
    if (req.body.documento != null) {
        res.cliente.documento = req.body.documento;
    }
    if (req.body.telefone != null) {
        res.cliente.telefone = req.body.telefone;
    }
    if (req.body.email != null) {
        res.cliente.email = req.body.email;
    }
    if (req.body.ativo != null) {
        res.cliente.ativo = req.body.ativo;
    }
    try {
        const updatedCliente = await res.cliente.save();
        res.json(updatedCliente);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', getCliente, async (req, res) => {
    try {
        await res.cliente.remove();
        res.json({ message: 'Cliente removido com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCliente(req, res, next) {
    let cliente;
    try {
        cliente = await Cliente.findById(req.params.id);
        if (cliente == null) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.cliente = cliente;
    next();
}

module.exports = router;
