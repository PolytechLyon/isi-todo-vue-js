import TodoHomepageView from "./components/TodoHomepageView.vue";
import TodoPrintableView from "./components/TodoPrintableView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: TodoHomepageView },
    { path: "/printable", component: TodoPrintableView },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});