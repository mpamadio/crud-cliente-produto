<template>
  <div>
    <h2>Lista de Produtos</h2>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Ativo</th>
          <th>Cliente Associado</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(produto, index) in produtos" :key="index">
          <td>
            <template v-if="!produto.editando">{{ produto.nome }}</template>

            <template v-else>
              <input type="text" v-model="produto.nomeEditado">
            </template>
          </td>
          <td>{{ produto.ativo }}</td>
          <td>{{ getClienteAssociado(produto) }}</td>
          <td>
            <button @click="editProduto(produto)">
              {{ produto.editando ? 'Salvar' : 'Editar' }}
            </button>
            <button @click="toggleAtivo(produto)">Ativar/Inativar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-if="editandoProduto">
    <h2>Editar Produto</h2>
    <form @submit.prevent="salvarEdicao">
      <input class="mb-6" v-model="produtoEditado.nome" type="text" required>
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      produtos: [],
      editandoProduto: false,
      produtoEditado: {},
      associacoes: []
    };
  },
  mounted() {
    this.listarProdutos();
    this.listarAssociacoes();
  },
  methods: {
    async listarProdutos() {
      try {
        const response = await axios.get('http://localhost:3000/produtos');
        this.produtos = response.data;
      } catch (error) {
        console.error('Erro ao listar produtos:', error);
      }
    },
    async toggleAtivo(produto) {
      try {
        produto.ativo = !produto.ativo;
        const response = await axios.put(`http://localhost:3000/produtos/${produto._id}`, { ativo: produto.ativo });
        console.log('Produto ativado/inativado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao ativar/inativar produto:', error);
      }
    },
    editProduto(produto) {
      this.editandoProduto = true;
      this.produtoEditado = { ...produto };
    },
    async salvarEdicao() {
      try {
        const response = await axios.put(`http://localhost:3000/produtos/${this.produtoEditado._id}`, this.produtoEditado);
        console.log('Produto editado com sucesso:', response.data);
        this.editandoProduto = false;
        this.produtoEditado = {};
        this.listarProdutos();
      } catch (error) {
        console.error('Erro ao editar produto:', error);
      }
    },
    async listarAssociacoes() {
      try {
        const response = await axios.get('http://localhost:3000/associacoes');
        this.associacoes = response.data;
      } catch (error) {
        console.error('Erro ao listar associações:', error);
      }
    },
    getClienteAssociado(produto) {
      const associacao = this.associacoes.find(a => a.produtoId === produto._id);
      if (associacao) {
        return associacao.nomeCliente;
      } else {
        return 'Não há produtos associados ao cliente';
      }
    }
  }
};
</script>