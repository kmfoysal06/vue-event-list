import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import About from "../views/AboutView.vue";
import EventDetails from "../views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";
import EventLayout from "../views/event/Layout.vue";

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventListView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/event/:id",
    props: true,
    name: "event-layout",
    component: EventLayout,
    children:[
      {
        path: "",
        name: "event-details",
        component: EventDetails,
      },
      {
        path: "register",
        name: "event-register",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "event-edit",
        component: EventEdit,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
