import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Container",
  redirect: 'home',
  component: () =>
    import("../components/Container.vue"),
  children: [{
    path: 'content/:id',
    component: () => import("../components/Content.vue"),
    meta: {
      label: '测试页'
    }
  }, {
    path: 'home',
    component: Home,
    meta: {
      label: '主页'
    }
  }]
}, {
  path: '/about',
  name: 'About',
  component: () => import("../views/About.vue")
}];

const router = new VueRouter({
  routes
});

export default router;