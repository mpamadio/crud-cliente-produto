<template>
  <div>
    <h1>Gerenciamento de Clientes e Produtos</h1>
    <ClienteForm />
    <ClienteList />
  </div>
</template>

<script>
import ClienteForm from './components/ClienteForm.vue';
import ClienteList from './components/ClienteList.vue'

export default {
  name: 'App',
  components: {
    ClienteForm,
    ClienteList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
