import {createRouter,createWebHistory} from "vue-router"
import Home from "@/views/Home.vue"
import Score from "@/views/Score.vue"
import Images from "@/views/Images.vue"

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/leaderboard',
            name: 'leaderboard',
            component: Score
        },
    /*     {
            path: '/images',
            name: 'images',
            component: Images
        } */


    ]
})


export default router