

<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ carachterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item">Edit</RouterLink>
            <a @click.prevent="handleDeleteClick(note.id)" href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from "vue"
import { useStoreNotes } from "../../stores/storeNotes";

const { removeNote } = useStoreNotes();

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const carachterLength = computed(() => {
    let length = props.note.content.length,
        description = length > 1 ? ' characters' : ' character'

    return length + description;
})

const handleDeleteClick = (id) => {
    removeNote(id);
}

</script>