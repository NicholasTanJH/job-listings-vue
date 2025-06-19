import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import ListingsView from "@/views/ListingsView.vue";
import NotFound from "@/views/NotFound.vue";
import ListingView from "@/views/ListingView.vue";
import AddListingView from "@/views/AddListingView.vue";
import EditListingView from "@/views/EditListingView.vue";

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
            component: ListingsView
        },
        {
            path: '/listings/:id',
            name: 'listing',
            component: ListingView 
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/listings/add',
            name: 'add-listing',
            component: AddListingView
        },
        {
            path: '/listings/edit/:id',
            name: 'editPage',
            component: EditListingView
        }
    ],
});

export default router; 