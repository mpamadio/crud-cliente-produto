<template>
  <nav class="flex justify-center p-4 mb-10">
    <ul class="list-none flex gap-4">
      <li>
        <router-link to="/cliente-form" class="btn-router">Cadastro Cliente</router-link>
      </li>
      <li>
        <router-link to="/clientes" class="btn-router">Lista de Clientes</router-link>
      </li>
      <li>
        <router-link to="/produto-form" class="btn-router">Cadastro Produto</router-link>
      </li>
      <li>
        <router-link to="/produtos" class="btn-router">Lista de Produtos</router-link>
      </li>
      <li>
        <router-link to="/associar-produtos" class="btn-router">Associar Produtos</router-link>
      </li>
    </ul>
  </nav>  
</template>

<script>
export default {
  name: 'MenuComponent',
};
</script>