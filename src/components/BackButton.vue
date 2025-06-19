<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="bg-gray-800">
        <div class="container m-auto py-6 px-6">
            <RouterLink to="/listings" class="text-white hover:text-green-600 flex items-center">
                <i class="pi pi-arrow-circle-left mr-5"></i>
                Back to posts
            </RouterLink>
        </div>
    </section>
</template>