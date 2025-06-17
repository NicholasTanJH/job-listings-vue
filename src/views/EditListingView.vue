<script setup>
import axios from 'axios';
import router from '@/router';
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';

import { db } from '@/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const route = useRoute();
const toast = useToast();

const jobId = route.params.id;

const form = reactive({
    type: 'In-Person',
    offering: '',
    requesting: '',
    note: '',
    location: '',
    person: {
        name: '',
        bio: '',
        contactEmail: '',
        contactPhone: '',
    },
})

const state = reactive({
    job: {},
    isLoading: true,
});

async function handleUpdate() {
    const updatedJob = {
        type: form.type,
        offering: form.offering,
        requesting: form.requesting,
        note: form.note,
        location: form.location,
        person: {
            name: form.person.name,
            bio: form.person.bio,
            contactEmail: form.person.contactEmail,
            contactPhone: form.person.contactPhone,
        },
    }

    try {
        const docRef = doc(db, "listings", jobId);
        await updateDoc(docRef, updatedJob);
        toast.success('Job Updated Successfully');
        router.push(`/listings/${jobId}`);
    } catch (error) {
        toast.error('Error Updating Job');
    }
};

onMounted(async () => {
    try {
        const docRef = doc(db, "listings", jobId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            state.job = docSnap.data();
            form.type = state.job.type;
            form.offering = state.job.offering;
            form.requesting = state.job.requesting;
            form.note = state.job.note;
            form.location = state.job.location;
            form.person.name = state.job.person.name;
            form.person.bio = state.job.person.bio;
            form.person.contactEmail = state.job.person.contactEmail;
            form.person.contactPhone = state.job.person.contactPhone;
        } else {
            throw ('No such job found');
        }
    } catch (error) {
        console.log('Error Fetching Job Data', error);
    } finally {
        state.isLoading = false;
    }
})
</script>

<template>
    <section class="bg-green-50">
        <div class="container m-auto max-w-2xl py-24">
            <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form @submit.prevent="handleSumbit">
                    <h2 class="text-3xl text-center font-semibold mb-6">Add A Post</h2>

                    <div class="mb-4">
                        <label for="type" class="block text-gray-700 font-bold mb-2">Meeting Method</label>
                        <select v-model="form.type" id="type" name="type" class="border rounded-sm w-full py-2 px-3"
                            required>
                            <option value="In-Person">In-Person</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label for="offering" class="block text-gray-700 font-bold mb-2">Offering</label>
                        <input v-model="form.offering" type="text" id="offering" name="offering" maxlength="30"
                            class="border rounded-sm w-full py-2 px-3 mb-2" placeholder="eg. JavaScript tutoring"
                            required />
                    </div>
                    <div class="mb-4">
                        <label for="requesting" class="block text-gray-700 font-bold mb-2">Requesting</label>
                        <input v-model="form.requesting" type="text" id="requesting" name="requesting" maxlength="30"
                            class="border rounded-sm w-full py-2 px-3 mb-2" placeholder="eg. Graphic design" required />
                    </div>
                    <div class="mb-4">
                        <label for="note" class="block text-gray-700 font-bold mb-2">Note</label>
                        <textarea v-model="form.note" id="note" name="note"
                            class="border rounded-sm w-full py-2 px-3" rows="4"
                            placeholder="Add any expectations, requirements, etc"></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="location" class="block text-gray-700 font-bold mb-2">
                            Location
                        </label>
                        <input v-model="form.location" type="text" id="location" name="location" maxlength="30"
                            class="border rounded-sm w-full py-2 px-3 mb-2" placeholder="Your Location" required />
                    </div>

                    <h3 class="text-2xl mb-5">About Yourself</h3>

                    <div class="mb-4">
                        <label for="person" class="block text-gray-700 font-bold mb-2">Your Name</label>
                        <input v-model="form.person.name" type="text" id="person" name="person" maxlength="50"
                            class="border rounded-sm w-full py-2 px-3"
                            placeholder="What would you like people to call you?" />
                    </div>

                    <div class="mb-4">
                        <label for="person_bio" class="block text-gray-700 font-bold mb-2">Short Bio</label>
                        <textarea v-model="form.person.bio" id="person_bio" name="person_bio"
                            class="border rounded-sm w-full py-2 px-3" rows="4"
                            placeholder="Let others know more about you"></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="contact_phone" class="block text-gray-700 font-bold mb-2">Contact Phone</label>
                        <input v-model="form.person.contactPhone" type="tel" id="contact_phone" name="contact_phone"
                            class="border rounded-sm w-full py-2 px-3" placeholder="Phone Number" required />
                    </div>
                    <div class="mb-4">
                        <label for="contact_email" class="block text-gray-700 font-bold mb-2">Contact Email</label>
                        <input v-model="form.person.contactEmail" type="email" id="contact_email" name="contact_email"
                            class="border rounded-sm w-full py-2 px-3" placeholder="Optional Email address" />
                    </div>

                    <div>
                        <button
                            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-hidden focus:shadow-outline"
                            type="submit">
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>