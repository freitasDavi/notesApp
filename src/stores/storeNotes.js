import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreNotes = defineStore('storeNotes', () => {
    const notes = ref([{
        id: 1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam, architecto id labore voluptatem alias dicta velit minus ratione esse autem unde, eveniet ducimus quis ad earum facilis quod corrupti.'
    },
    {
        id: 2,
        content: 'This is a shorter note.'
    }]);

    const addNote = (newNote) => {
        let currentDate = new Date().getTime(),
        id = currentDate.toString()

        notes.value.unshift({
            id,
            content: newNote
        });
    };

    function removeNote (id) {
        const filteredNotes = notes.value.filter((note) => note.id != id);

        notes.value = filteredNotes;
    };

    

    return { notes, addNote, removeNote };
});