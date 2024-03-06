<template>
    <form @submit.prevent="submitForm">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="cliente.nome" required>

        <label for="documento">Documento:</label>
        <input type="text" id="documento" v-model="cliente.documento" required>

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" v-model="cliente.telefone" required>
        
        <label for="telefone">Email:</label>
        <input type="email" id="email" v-model="cliente.email" required>

        <label for="ativo">Ativo:</label>
        <select id="ativo" v-model="cliente.ativo">
            <option value="Sim">Sim</option>
            <option value="Nao">Não</option>
        </select>

        <button type="submit">Salvar</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                cliente: {
                    nome: '',
                    documento: '',
                    telefone: '',
                    email: '',
                    ativo: 'Sim'
                }
            }
        },
        methods: {
            submitForm() {
                console.log('Dados cliente:', this.cliente);
                this.cliente = {
                    nome: '',
                    documentos: '',
                    telefone: '',
                    email: '',
                    ativo: 'Sim'
                };
            }
        }
    };
</script>
