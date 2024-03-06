<template>
    <div>
      <h2>Associar Produtos a Clientes</h2>
      <div class="form-group">
        <label for="cliente">Cliente:</label>
        <select v-model="clienteSelecionado" @change="carregarProdutosDoCliente">
          <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nome }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="produtos">Produtos Disponíveis:</label>
        <select v-model="produtoSelecionado">
          <option v-for="produto in produtosDisponiveis" :key="produto.id" :value="produto.id">{{ produto.nome }}</option>
        </select>
        <button @click="associarProduto">Associar Produto</button>
      </div>
      <div>
        <h3>Produtos Associados:</h3>
        <ul>
          <li v-for="produto in produtosAssociados" :key="produto.id">
            {{ produto.nome }}
            <button @click="removerProdutoAssociado(produto)">Remover</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clienteSelecionado: null,
        produtoSelecionado: null,
        clientes: [
          { id: 1, nome: 'Cliente 1' },
          { id: 2, nome: 'Cliente 2' }
        ],
        produtosDisponiveis: [
          { id: 1, nome: 'Produto 1' },
          { id: 2, nome: 'Produto 2' }
        ],
        produtosAssociados: []
      };
    },
    methods: {
      carregarProdutosDoCliente() {
      },
      associarProduto() {
        const produtoIndex = this.produtosDisponiveis.findIndex(p => p.id === this.produtoSelecionado);
        if (produtoIndex !== -1) {
          const produto = this.produtosDisponiveis.splice(produtoIndex, 1)[0];
          this.produtosAssociados.push(produto);
        }
      },
      removerProdutoAssociado(produto) {
        const index = this.produtosAssociados.indexOf(produto);
        if (index !== -1) {
          this.produtosAssociados.splice(index, 1);
          this.produtosDisponiveis.push(produto);
        }
      }
    }
  };
  </script>