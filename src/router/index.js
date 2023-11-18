import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import About from "../views/AboutView.vue";
import EventDetails from "../views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";
import EventLayout from "../views/event/Layout.vue";
import NotFound from "../views/NotFound.vue";
import netError from "../views/NetworkError.vue";
import Nprogress from "nprogress";
import Request from "@/services/EventService.js";
import Gstore from '@/store'

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
    redirect: { name: "event-details" },
    beforeEnter : to =>{
      return Request.getEvent(to.params.id)
      .then((response) => {
        Gstore.event = response.data;
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          return {
            name: "404",
            params: { res: "event" },
          };
        } else {
          return {
            name: "netError",
          };
        }
      });
    },
    component: EventLayout,
    children: [
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
    ],
  },
  {
    path: "/event/:afterEvent(.*)",
    redirect: (to) => {
      return { path: "/events/" + to.params.afterEvent };
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:res",
    name: "404",
    props: true,
    component: NotFound,
  },
  {
    path:'/network-error',
    name:'netError',
    component:netError
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
router.beforeEach(()=>{
  Nprogress.start()
})
router.afterEach(()=>{
  Nprogress.done()
})

export default router;
