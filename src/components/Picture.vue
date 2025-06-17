<script setup>
import image from '@/assets/img/Tennis-skill-scaled.png'
</script>

<template>
    <div class="relative w-full h-[550px] bg-cover bg-center" :style="`background-image: 
        linear-gradient(
                    transparent 20%,
                    transparent 80%,
                    green),
        url(${image})`">
    </div>
</template>