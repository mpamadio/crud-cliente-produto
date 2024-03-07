<template>
  <div class="mx-auto container">
    <h1>Gerenciamento de Clientes e Produtos</h1>
    <ClienteForm />
    <ClienteList />
    <ProdutoForm />
    <ProdutoList />
    <AssociarProduto />
  </div>
</template>

<script>
import ClienteForm from './components/ClienteForm.vue';
import ClienteList from './components/ClienteList.vue'
import ProdutoForm from './components/ProdutoForm.vue'
import ProdutoList from './components/ProdutoList.vue'
import AssociarProduto from './components/AssociarProdutos.vue'

export default {
  name: 'App',
  components: {
    ClienteForm,
    ClienteList,
    ProdutoForm,
    ProdutoList,
    AssociarProduto,
  }
}
</script>

<style>
</style>
