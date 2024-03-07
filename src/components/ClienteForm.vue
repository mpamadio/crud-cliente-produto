<template>
    <div class="max-w-sm mx-auto">
        <form class="flex gap-2 mb-6 items-baseline flex-col" @submit.prevent="cadastrarCliente">
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
                <option value="true">Sim</option>
                <option value="false">Não</option>
            </select>

            <button class="mt-2" type="submit">Salvar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            cliente: {
                    nome: '',
                    documento: '',
                    telefone: '',
                    email: '',
                    ativo: true
                }
        };
    },
    methods: {
    async cadastrarCliente() {
      try {
        const response = await axios.post('http://localhost:3000/clientes', {
          nome: this.cliente.nome,
          documento: this.cliente.documento,
          telefone: this.cliente.telefone,
          email: this.cliente.email,
          ativo: this.cliente.ativo
        });
        console.log('Cliente cadastrado com sucesso:', response.data);
        this.cliente.nome = '';
        this.cliente.documento = '';
        this.cliente.telefone = '';
        this.cliente.email = '';
      } catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
      }
    }
  }
};
</script>
