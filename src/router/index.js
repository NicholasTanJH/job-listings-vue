import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import JobListings from "@/views/ListingsView.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/ListingView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditListingView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/listings',
            name: 'listings',
            component: JobListings
        },
        {
            path: '/listings/:id',
            name: 'listing',
            component: JobView 
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/listings/add',
            name: 'add-listing',
            component: AddJobView
        },
        {
            path: '/listings/edit/:id',
            name: 'editPage',
            component: EditJobView
        }
    ],
});

export default router; 