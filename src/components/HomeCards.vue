<script setup>
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue'
</script>

<template>
  <!-- Developers and Employers -->
  <section class="py-4 bg-gray-800">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">Explore Skill Posts</h2>
          <p class="mt-2 mb-4">
            Discover what others are offering and requesting, and find your opportunity to help or learn.
          </p>
          <RouterLink to="/listings" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Browse Offers & Requests
          </RouterLink>
        </Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">Offer or Request Skills</h2>
          <p class="mt-2 mb-4">
            Whether you want to help or need a hand, create a post and connect with others in the community.
          </p>
          <RouterLink to="listings/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
            Start a post
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>