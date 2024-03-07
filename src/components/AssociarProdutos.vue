<template>
  <div class="max-w-sm mx-auto">
    <h2>Associar Produtos a Clientes</h2>
    <div class="form-group">
      <label for="cliente">Cliente:</label>
      <select v-model="clienteSelecionado">
        <option v-for="cliente in clientes" :key="cliente.id" :value="cliente._id">{{ cliente.nome }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="produto">Produto:</label>
      <select v-model="produtoSelecionado">
        <option v-for="produto in produtos" :key="produto.id" :value="produto._id">{{ produto.nome }}</option>
      </select>
    </div>
    <button @click="associarProduto">Associar</button>

    <div>
      <h3>Produtos Associados:</h3>
      <ul>
        <li v-for="associacao in associacoes" :key="associacao.id">
          {{ associacao.nomeCliente && associacao.nomeProduto ? associacao.nomeCliente + ' - ' + associacao.nomeProduto : 'Nome do Produto Indisponível' }}
          <button @click="removerAssociacao(associacao)">Remover</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clienteSelecionado: null,
      produtoSelecionado: null,
      clientes: [],
      produtos: [],
      associacoes: []
    };
  },
  created() {
    this.listarClientes();
    this.listarProdutos();
    this.listarAssociacoes();
  },
  methods: {
    async listarClientes() {
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        this.clientes = response.data;
      } catch (error) {
        console.error('Erro ao listar clientes:', error);
      }
    },
    async listarProdutos() {
      try {
        const response = await axios.get('http://localhost:3000/produtos');
        this.produtos = response.data;
        console.log(this.produtos)
      } catch (error) {
        console.error('Erro ao listar produtos:', error);
      }
    },
    async listarAssociacoes() {
      try {
        const response = await axios.get('http://localhost:3000/associacoes');
        this.associacoes = response.data;
        console.log(this.associacoes)
      } catch (error) {
        console.error('Erro ao listar associações:', error);
      }
    },
    async associarProduto() {
      try {
        console.log('Lista de clientes:', this.clientes);
        console.log('ID do cliente selecionado:', this.clienteSelecionado);

        await axios.post('http://localhost:3000/associacoes', {
          clienteId: this.clienteSelecionado,
          produtoId: this.produtoSelecionado,
          nomeCliente: this.clienteSelecionado,
          nomeProduto: this.produtoSelecionado,
        });
        console.log('Associação realizada com sucesso.');
        this.listarAssociacoes();
      } catch (error) {
        console.error('Erro ao associar produto:', error);
      }
    },
    async removerAssociacao(associacao) {
      try {
        await axios.delete(`http://localhost:3000/associacoes/${associacao._id}`);
        console.log('Associação removida com sucesso.');
        this.listarAssociacoes();
      } catch (error) {
        console.error('Erro ao remover associação:', error);
      }
    }
  }
};
</script>
