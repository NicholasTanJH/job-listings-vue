<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import router from '@/router';
import { useToast } from 'vue-toastification';
//firebase
import { db } from '@/firebase';
import { getDocs, query, collection, setDoc, doc, addDoc } from "firebase/firestore";

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

const toast = useToast();

const handleSumbit = async () => {
    const newlisting = {
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
        const docRef = await addDoc(collection(db, "listings"), newlisting);
        toast.success('listing Added Successfully');
        console.log("Document written with ID: ", docRef.id);
        router.push(`/listings/${docRef.id}`);
    } catch (e) {
        toast.error('Error Adding listing');
        console.error("Error adding document: ", e);
    }
};
</script>

<template>
    <section class="bg-gray-800 min-h-screen">
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
                        <textarea v-model="form.note" id="note" name="note" class="border rounded-sm w-full py-2 px-3"
                            rows="4" placeholder="Add any expectations, requirements, etc"></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="location" class="block text-gray-700 font-bold mb-2">
                            Location
                        </label>
                        <input v-model="form.location" type="text" id="location" name="location" maxlength="30" :class="[
                            'border rounded-sm w-full py-2 px-3 mb-2',
                            form.type === 'Remote' ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : ''
                        ]" :disabled="form.type === 'Remote'" placeholder="Your Location" />
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