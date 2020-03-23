import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Me = () => import('views/me/Me')

const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/cart',
      component:Cart
    },
    {
      path: '/me',
      component:Me
    }
  ]


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
