<script setup>
import { RouterLink } from 'vue-router';
import Listing from './Listing.vue';
import { ref, defineProps, onMounted, reactive } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

const state = reactive({
    listings: [],
    isLoading: true
})

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    },
    fullScreen: {
        type: Boolean,
        default: false
    }
})

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "listings"));
    state.listings = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    state.isLoading = false;
})
</script>

<template>
    <section :class="['bg-gray-800', fullScreen ? 'min-h-screen' : '']">
        <section class="bg-gray-800 px-y py-10">
            <div class="container-xl lg:container m-auto">
                <h2 class="text-3xl font-bold text-white mb-6 text-center">
                    Browse Posts
                </h2>
                <!-- Loading listings-->
                <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                    <PulseLoader />
                </div>
                <!-- Done loading listings -->
                <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Listing v-for="listing in state.listings.slice(0, limit || state.listings.length)" :listing="listing" />
                </div>
            </div>
        </section>

        <section v-if="showButton" class="m-auto max-w-lg py-6 px-6">
            <RouterLink to="/listings"
                class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
                All Post</RouterLink>
        </section>
    </section>
</template>