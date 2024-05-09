import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/project',
            name: 'project',
            component: import ('@/pages/ProjectPage.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: import ('@/pages/BlogPage.vue')
        },
        {
            path: '/blog-details',
            name: 'blog-details',
            component: import ('@/pages/BlogDetailsPage.vue')
        },
        {
            path: '/404',
            name: 'NotFoundPage',
            component: import ('@/pages/NotFoundPage.vue')
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})


// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })
export default router