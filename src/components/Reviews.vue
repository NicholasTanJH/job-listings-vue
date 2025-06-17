<script setup>
import { ref, onMounted } from 'vue';
import Review from './Review.vue';
import face1 from '@/assets/img/face1.png'
import face2 from '@/assets/img/face2.png'
import face3 from '@/assets/img/face3.png'

const reviews = [
    {
        icon: face1,
        name: 'Mellisa',
        message: 'This platform made it so easy to connect with others and trade skills I never thought I’d use again. Highly recommend!',
        reverse: false,
    },
    {
        icon: face2,
        name: 'Brandon',
        message: 'This site helped me finally finish a project I kept putting off. Someone jumped in and guided me through it!',
        reverse: true,
    },
    {
        icon: face3,
        name: 'Jackson',
        message: 'Was skeptical at first, but it’s super easy to use and surprisingly rewarding.',
        reverse: false,
    },
];

const visibleReviews = ref([]);

onMounted(() => {
    reviews.forEach((review, index) => {
        setTimeout(() => {
            visibleReviews.value.push(review);
        }, index * 800);
    });
});
</script>

<template>
    <section class="bg-gray-800 flex flex-col items-center pt-15 min-h-[750px]">
        <p class="text-white font-bold text-4xl mb-15">
            <span class="border-b-3 border-green-400 pb-1">Real Feedback</span>
        </p>
        <TransitionGroup name="fade" tag="div">
            <Review v-for="(r, index) in visibleReviews" :key="r.name" :reviewerIcon="r.icon" :reviewerName="r.name"
                :reviewMessage="r.message" :reverse="r.reverse" />
        </TransitionGroup>
    </section>
</template>

<style scoped>
.fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.fade-enter-active {
    transition: all 0.5s ease;
}
</style>