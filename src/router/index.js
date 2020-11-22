import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:{path:"/home"}
  },
{
  path: "/home",
  name: "Home",
  meta: {
    label: '主页'
  },
  component:  Home
}, 
{
  path: '/about',
  name: 'About',
  component: () => import("../views/About.vue"),
  meta: {
    label: '关于'
  },
}, 
{
  path: "/content/:id",
  name: "content",
  component: () => import("../components/Content.vue"),
  meta: {
    label: '测试'
  },
}];

const router = new VueRouter({
  routes
});

export default router;