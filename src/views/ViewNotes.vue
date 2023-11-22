<template>
    <div class="notes">
        <AddEditNote v-model:newNote="newNote" ref="addEditNoteRef" placeholder="Add a new note">
            <template #buttons>
                <button @click="submitNewNote" :disabled="!newNote" class="button is-link has-background-success">
                    Add new note
                </button>
            </template>
        </AddEditNote>

        <Note v-for="note in store.notes" :key="note.id" :note="note" />

    </div>
</template>

<script setup>
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useStoreNotes } from "../stores/storeNotes";
// Notes
const newNote = ref("");
const addEditNoteRef = ref(null);
const store = useStoreNotes();

const submitNewNote = () => {

    store.addNote(newNote.value);

    newNote.value = "";
    addEditNoteRef.value.focusTextArea();
}



</script>