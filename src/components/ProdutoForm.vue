<template>
  <div class="max-w-sm mx-auto mt-6">
    <h2>Cadastro Produto</h2>
    <form class="flex gap-2 mb-6 items-baseline flex-col" @submit.prevent="cadastrarProduto">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="produto.nome" required>
  
      <label for="ativo">Ativo:</label>
      <select id="ativo" v-model="produto.ativo">
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>
  
      <button type="submit">Salvar</button>
    </form>
  </div>
  </template>
  
  <script>
  import axios from 'axios';


  export default {
    data() {
      return {
        produto: {
          nome: '',
          ativo: true
        }
      };
    },
    methods: {
      async cadastrarProduto() {
      try {
        const response = await axios.post('http://localhost:3000/produtos', {
          nome: this.produto.nome,
          ativo: this.produto.ativo
        });
        console.log('Produto cadastrado com sucesso:', response.data);
        this.produto.nome = '';
      } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
      }
    }
    }
  };
  </script>
  