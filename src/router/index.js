import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }, {
    path: "/menu",
    name: "Menu",
    component: () =>
      import("../components/Menu.vue")
  }, {
    path: "/container",
    name: "Container",
    component: () =>
      import("../components/Container.vue"),
    children: [{
      path: 'content/:id',
      component: () => import("../components/Content.vue"),
      meta: { label: '测试页' }
    }, {
      path: 'home',
      component: Home,
      meta: { label: '主页' }
    }]
  }
];

const router = new VueRouter({
  routes
});

export default router;
