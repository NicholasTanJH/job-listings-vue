<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/exchange-removebg-preview.png'

const isActive = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
  <nav class="bg-gray-700 border-b border-gray-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo"/>
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Skill Exchange</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/"
                :class="[isActive('/') ? 'bg-gray-600' : 'hover:bg-gray-900', 'text-white', 'rounded-md', 'px-3', 'py-2']">
                Home
              </RouterLink>
              <RouterLink to="/listings"
                :class="[isActive('/listings') ? 'bg-gray-600' : 'hover:bg-gray-900', 'text-white', 'rounded-md', 'px-3', 'py-2']">
                Listings
              </RouterLink>
              <RouterLink to="/listings/add"
                :class="[isActive('/listings/add') ? 'bg-gray-600' : 'hover:bg-gray-900', 'text-white', 'rounded-md', 'px-3', 'py-2']">
                Add
                New Listing</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>