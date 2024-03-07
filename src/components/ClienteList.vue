<template>
  <div>
    <h2>Lista de Clientes</h2>
    <table class="mb-6">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Documento</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="index">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.documento }}</td>
          <td>{{ cliente.telefone }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.ativo }}</td>
          <td>
            <button @click="editCliente(cliente)">Editar</button>
            <button @click="toggleAtivo(cliente)">Ativar/Inativar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="max-w-sm mx-auto" v-if="editandoCliente">
      <h2>Editar Cliente</h2>
      <form @submit.prevent="salvarEdicao">
        <input class="mb-6" v-model="clienteEditado.nome" type="text" required>
        <input class="mb-6" v-model="clienteEditado.documento" type="text" required>
        <input class="mb-6" v-model="clienteEditado.telefone" type="text" required>
        <input class="mb-6" v-model="clienteEditado.email" type="email" required>
        <button type="submit">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      clientes: [],
      editandoCliente: false,
      clienteEditado: {}
    };
  },
  mounted() {
    this.listarClientes();
  },
  methods: {
    async listarClientes() {
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        this.clientes = response.data;
      } catch (error) {
        console.error('Erro ao listar produtos:', error);
      }
    },
    async salvarEdicao() {
      try {
        const response = await axios.put(`http://localhost:3000/clientes/${this.clienteEditado._id}`, this.clienteEditado);
        console.log('Cliente editado com sucesso:', response.data);
        this.editandoCliente = false;
        this.clienteEditado = {};
        this.listarClientes();
      } catch (error) {
        console.error('Erro ao editar cliente:', error);
      }
    },
    async toggleAtivo(cliente) {
      try {
        cliente.ativo = !cliente.ativo;
        const response = await axios.put(`http://localhost:3000/clientes/${cliente._id}`, { ativo: cliente.ativo });
        console.log('Cliente ativado/inativado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao ativar/inativar cliente:', error);
      }
    },
    editCliente(cliente) {
      this.editandoCliente = true;
      this.clienteEditado = { ...cliente };
    },

  }
};
</script>