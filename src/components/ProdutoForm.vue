<template>
    <h2>Cadastro Produto</h2>
    <form @submit.prevent="submitForm">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="produto.nome" required>
  
      <label for="ativo">Ativo:</label>
      <select id="ativo" v-model="produto.ativo">
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>
  
      <button type="submit">Salvar</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        produto: {
          nome: '',
          ativo: 'Sim'
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Dados do produto:', this.produto);
        this.produto = {
          nome: '',
          ativo: 'Sim'
        };
      }
    }
  };
  </script>
  