<script setup>
import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
import { ref, defineProps, onMounted, reactive } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

const state = reactive({
    jobs: [],
    isLoading: true
})

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "listings"));
    state.jobs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    state.isLoading = false;
})
</script>

<template>
    <section class="bg-blue-50 px-y py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Missing Pets
            </h2>
            <!-- Loading jobs-->
            <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader />
            </div>
            <!-- Done loading jobs -->
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Missing Pets</RouterLink>
    </section>
</template>