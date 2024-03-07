import { createRouter, createWebHistory } from 'vue-router';
import ClienteForm from '../components/ClienteForm.vue'
import ClienteList from '../components/ClienteList.vue';
import ProdutoForm from '../components/ProdutoForm.vue';
import ProdutoList from '../components/ProdutoList.vue';
import AssociarProdutos from '../components/AssociarProdutos.vue';


const routes = [
  {
    path: '/',
    redirect: '/clientes'
  },
  {
    path: '/cliente-form',
    name: 'ClienteForm',
    component: ClienteForm
  },
  {
    path: '/clientes',
    name: 'ClienteList',
    component: ClienteList
  },
  {
    path: '/produto-form',
    name: 'ProdutoForm',
    component: ProdutoForm
  },
  {
    path: '/produtos',
    name: 'ProdutoList',
    component: ProdutoList
  },
  {
    path: '/associar-produtos',
    name: 'AssociarProdutos',
    component: AssociarProdutos
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;