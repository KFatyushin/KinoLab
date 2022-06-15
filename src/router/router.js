import {createRouter, createWebHistory} from "vue-router";
import MoviePage from "@/pages/MoviesPage";
import MovieIdPage from "@/pages/MovieIdPage";

const routes = [
    {
        path: '/',
        component: MoviePage
    },
    {
        path: '/:id',
        component: MovieIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;