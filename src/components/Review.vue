<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    reviewerIcon: String,
    reviewerName: String,
    reviewMessage: String,
    reverse: {
      type: Boolean,
      default: false
    }
});
</script>

<template>
    <section :class="['flex items-center gap-4 px-40 py-10', reverse ? 'flex-row-reverse' : '']">
        <img :src="reviewerIcon" alt="Reviewer Icon" class="w-28 h-28 rounded-full object-cover" />
        <div>
            <p class="text-white text-xl">"{{ reviewMessage }}" - {{ reviewerName }}</p>
        </div>
    </section>
</template>