<template>
    <div>
      <h2>Lista de Clientes</h2>
      <table>
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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clientes: [
          { nome: 'Cliente 1', documento: '123456789', telefone: '6666-6666', email: 'cliente1@exemplo.com', ativo: 'Sim' },
          { nome: 'Cliente 2', documento: '989898988', telefone: '9999-9999', email: 'cliente2@exemplo.com', ativo: 'Não' }
        ]
      };
    },
    methods: {
      editCliente(cliente) {
        console.log('Editar cliente:', cliente);
      },
      toggleAtivo(cliente) {
        cliente.ativo = cliente.ativo === 'Sim' ? 'Não' : 'Sim';
        console.log('Ativar/Inativar cliente:', cliente);
      }
    }
  };
  </script>