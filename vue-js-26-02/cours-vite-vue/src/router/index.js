import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
        path:"/home",
        component:()=> import('../views/Home.vue')
       }, 
       {
        path:"/PokeApi",
        component:()=> import('../views/PokeApi.vue')
       }, 
       {
        path:"/Meteo",
        component:()=> import('../views/MeteoApi.vue')
       }, 
       {
        path:"/:patchMatch(.*)",
        name:'NotFound',
        component:()=> import('../views/NotFound.vue')
       } 
    ]
});
export default router;
