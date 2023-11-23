<template>
    <div class="edit-note">
        <AddEditNote v-model:newNote="noteContent" ref="addEditNoteRef" bgColor="link" placeholder="Edit note"
            label="Edit note">
            <template #buttons>
                <RouterLink to="/" class="button is-link is-light mr-2">
                    Cancel
                </RouterLink>
                <button @click="handleSaveClick" class="button is-link has-background-success" :disabled="!noteContent">
                    Save note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from "vue";

import { useStoreNotes } from "../stores/storeNotes";

const route = useRoute();
const router = useRouter();
const storeNotes = useStoreNotes();

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClick = () => {
    const payload = {
        id: route.params.id,
        content: noteContent.value
    };

    storeNotes.updateNotes(payload);

    router.push("/");
}

</script>