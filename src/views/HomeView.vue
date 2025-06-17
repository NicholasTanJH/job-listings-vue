<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
import Picture from '@/components/Picture.vue';
import Reviews from '@/components/Reviews.vue';
</script>

<template>
    <Picture />
    <Hero />
    <Reviews />
    <HomeCards />
    <JobListings :limit="3" :showButton="true" />
</template>