<template>
    <div class="edit-note">
        <AddEditNote v-model:newNote="noteContent" ref="addEditNoteRef" bgColor="link" placeholder="Edit note"
            label="Edit note">
            <template #buttons>
                <RouterLink to="/" class="button is-link is-light">
                    Cancel
                </RouterLink>
                <button class="button is-link has-background-success" :disabled="!noteContent">
                    Save note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { ref } from "vue";

const noteContent = ref("");

</script>