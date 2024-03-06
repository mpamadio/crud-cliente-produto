<template>
    <div>
      <h2>Lista de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ativo</th>
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
  </template>
  
  <script>
  export default {
    data() {
      return {
        produtos: [
          { nome: 'Produto 1', nomeEditado: '', ativo: true, editando: false },
          { nome: 'Produto 2', nomeEditado: '', ativo: false, editando: false }
        ]
      };
    },
    methods: {
      editProduto(produto) {
        if (produto.editando) {
          produto.nome = produto.nomeEditado;
          produto.editando = false;
        } else {
          produto.nomeEditado = produto.nome;
          produto.editando = true;
        }
      },
      toggleAtivo(produto) {
        produto.ativo = !produto.ativo;
      }
    }
  };
  </script>