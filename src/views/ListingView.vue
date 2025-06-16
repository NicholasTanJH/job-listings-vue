<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
import { reactive, onMounted } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';
import { useToast } from 'vue-toastification';
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '@/firebase';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const listingId = route.params.id;

const state = reactive({
    listing: {},
    isLoading: true
});

onMounted(async () => {
    const docRef = doc(db, "listings", listingId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        state.listing = docSnap.data();
        state.isLoading = false;
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        router.push(`/notFound`);
    }
})

const deletelisting = async () => {
    try {
        const confirmDelete = window.confirm('Are you sure you want to delete?');
        if (confirmDelete) {
            await deleteDoc(doc(db, "listings", listingId));
            toast.success('Delete listing Successfully');
            router.push('/listings');
        }
    } catch (error) {
        toast.error('Delete listing Failed');
    }
}
</script>

<template>
    <BackButton />
    <section v-if="!state.isLoading" class="bg-green-50">
        <div class="container m-auto py-10 px-6">
            <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                    <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">

                       <div class="flex justify-between items-center">
                            <!-- Left items -->
                            <div class="flex space-x-4">
                                <div class="text-black-700 mb-3">
                                    <i class="pi pi-user text-black-700"></i>
                                    {{ state.listing.person.name }}
                                </div>
                                <div class="text-orange-700 mb-3">
                                    <i class="pi pi-map-marker text-orange-700"></i>
                                    {{ state.listing.location }} ({{ state.listing.type }})
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 class="text-black-800 text-lg font-bold mb-6">
                            Offering:
                        </h3>

                        <p class="text-lime-700 text-3xl mb-4">
                            {{ state.listing.offering }}
                        </p>

                        <h3 class="text-black-800 text-lg font-bold mb-6">Requesting:</h3>

                        <p class="text-orange-800 text-3xl mb-4">{{ state.listing.requesting }}</p>

                        <h3 class="text-black-800 text-lg font-bold mb-6">Note:</h3>

                        <p class="mb-4">{{ state.listing.note }}</p>
                    </div>
                </main>

                <!-- Sidebar -->
                <aside>
                    <!-- person Info -->
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-6">About Myself</h3>

                        <h2 class="text-2xl">{{ state.listing.person.name }}</h2>

                        <p class="my-2">
                            {{ state.listing.person.bio }}
                        </p>

                        <hr class="my-4" />

                        <h3 class="text-xl">Contact Email:</h3>

                        <p class="my-2 bg-green-100 p-2 font-bold">
                            {{ state.listing.person.contactEmail }}
                        </p>

                        <h3 class="text-xl">Contact Phone:</h3>

                        <p class="my-2 bg-green-100 p-2 font-bold">{{ state.listing.person.contactPhone }}</p>
                    </div>

                    <!-- Manage -->
                    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 class="text-xl font-bold mb-6">Manage listing</h3>
                        <RouterLink :to="`/listings/edit/${listingId}`"
                            class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-hidden focus:shadow-outline mt-4 block">
                            Edit
                            listing</RouterLink>
                        <button @click="deletelisting"
                            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-hidden focus:shadow-outline mt-4 block">
                            Delete listing
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    </section>
    <div v-else class="text-center text-gray-500 py-6">
        <PulseLoader />
    </div>
</template>