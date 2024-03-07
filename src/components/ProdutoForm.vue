<template>
  <div class="max-w-sm mx-auto mt-6">
    <h2>Cadastro Produto</h2>
    <form class="flex gap-2 mb-6 items-baseline flex-col" @submit.prevent="submitForm">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="produto.nome" required>
  
      <label for="ativo">Ativo:</label>
      <select id="ativo" v-model="produto.ativo">
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>
  
      <button type="submit">Salvar</button>
    </form>
  </div>
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
  