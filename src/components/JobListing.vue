<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, ref, computed } from 'vue';
import exchange from '@/assets/img/exchange.png'

const props = defineProps({
    job: Object
});

const showDescription = ref(false);

const toggleFullDescription = () => {
    showDescription.value = !showDescription.value;
}

</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4 flex flex-col">
            <div class="mb-6">
                <div class="flex flex-col items-center justify-around">
                    <h3 class="text-3xl text-lime-700 font-bold m-5">{{ job.offering }}</h3>
                    <img class="h-20 w-auto" :src="exchange" alt="<=>" />
                    <h3 class="text-3xl text-orange-800 font-bold m-5">{{ job.requesting }}</h3>
                </div>

            </div>

            <div class="mb-5">
                <div>
                    {{ job.note }}
                </div>
            </div>

            <div class="border border-gray-100 mb-5"></div>

            <div id="last" class="flex justify-between items-center">
                <!-- Left items -->
                <div class="text-black-700 mb-3">
                    <i class="pi pi-user text-black-700"></i>
                    {{ job.person.name }}
                </div>

                <div class="text-orange-700 mb-3">
                    <div>
                        <i class="pi pi-map-marker text-orange-700"></i>
                        {{ job.location }}
                    </div>
                    ({{ job.type }})
                </div>

                <!-- Right item -->
                <RouterLink :to="'/listings/' + job.id"
                    class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-6 rounded-lg text-sm flex items-center justify-center">
                    Read More
                </RouterLink>
            </div>
        </div>
    </div>
</template>