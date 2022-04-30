import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/login-step-1",
  //   name: "Login",
  //   component: () => import("../views/Login.vue"),
  // },
  // {
  //   path: "/login-step-2",
  //   name: "LoginStep2",
  //   component: () => import("../views/LoginStep2.vue"),
  // },
  {
    path: "/login-host",
    name: "LoginHost",
    component: () => import("../views/LoginHost.vue"),
  },
  // {
  //   path: "/host",
  //   name: "Host",
  //   component: () => import("../views/Host.vue"),
  // },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue"),
  },
  {
    path: "/moderators",
    name: "Moderators",
    component: () => import("../views/Moderators.vue"),
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: () => import("../views/Transactions.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/training",
    name: "Training",
    component: () => import("../views/Training.vue"),
  },
  {
    path: "/marathon",
    name: "Marathon",
    component: () => import("../views/Marathon.vue"),
  },
  {
    path: "/stories",
    name: "Stories",
    component: () => import("../views/Stories.vue"),
  },
  {
    path: "/tariffs",
    name: "Tariffs",
    component: () => import("../views/Tariffs.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: () => import("../views/Statistics.vue"),
  },
  // {
  //   path: "/authors",
  //   name: "Authors",
  //   component: () => import("../views/Authors.vue"),
  // },
  // {
  //   path: "/spheres",
  //   name: "Spheres",
  //   component: () => import("../views/Spheres.vue"),
  // },
  // {
  //   path: "/courses",
  //   name: "Courses",
  //   component: () => import("../views/Courses.vue"),
  // },
  // {
  //   path: "/tariffs-author-account",
  //   name: "TariffsAuthorAccount",
  //   component: () => import("../views/TariffsAuthorAccount.vue"),
  // },
  // {
  //   path: "/tariffs-subscriptions",
  //   name: "TariffsSubscriptions",
  //   component: () => import("../views/TariffsSubscriptions.vue"),
  // },
  // {
  //   path: "/tariffs-promotion",
  //   name: "TariffsPromotion",
  //   component: () => import("../views/TariffsPromotion.vue"),
  // },
  // {
  //   path: "/promotion",
  //   name: "Promotion",
  //   component: () => import("../views/Promotion.vue"),
  // },
  // {
  //   path: "/promotion-promoters",
  //   name: "Promoters",
  //   component: () => import("../views/Promoters.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "sidebar-list__link--active",
});

export default router;
