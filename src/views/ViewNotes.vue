

<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea v-model="newNote" ref="newNoteRef" class="textarea" placeholder="Add a new note" />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button @click="submitNewNote" class="button is-link 
                    has-background-success" :disabled="!newNote">Add new note</button>
                </div>
            </div>
        </div>

        <Note @deleteNote="removeNote" v-for="note in notes" :key="note.id" :note="note" />

    </div>
</template>

<script setup>
import Note from "@/components/Notes/Note.vue";
import { ref } from "vue";
// Notes
const newNote = ref("");
const newNoteRef = ref(null);
const notes = ref([
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam, architecto id labore voluptatem alias dicta velit minus ratione esse autem unde, eveniet ducimus quis ad earum facilis quod corrupti.'
    },
    {
        id: 2,
        content: 'This is a shorter note.'
    },
]);

const submitNewNote = () => {
    let currentDate = new Date().getTime(),
        id = currentDate.toString()

    notes.value.unshift({
        id,
        content: newNote.value
    });

    newNote.value = "";
    newNoteRef.value.focus();
}

const removeNote = (id) => {
    notes.value = notes.value.filter((note) => note.id !== id);
}

</script>