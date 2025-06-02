import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import JobListings from "@/views/JobsView.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobListings
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView 
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobView
        },
        {
            path: '/jobs/edit/:id',
            name: 'editPage',
            component: EditJobView
        }
    ],
});

export default router; 