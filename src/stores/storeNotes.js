import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useStoreNotes = defineStore('storeNotes', () => {
    const notes = ref([{
        id: '1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam, architecto id labore voluptatem alias dicta velit minus ratione esse autem unde, eveniet ducimus quis ad earum facilis quod corrupti.'
    },
    {
        id: '2',
        content: 'This is a shorter note.'
    }]);

    /** Getters */
    function getNoteContent (id) {
        return notes.value.filter((note) => note.id === id)[0].content;
    }

    const totalNotesCount = computed(() => {
        return notes.value.length;
    })

    const totalCharacters = computed(() => {
        let count = 0;

        notes.value.forEach((note) => count += note.content.length);

        return count;
    })

    /** Actions */

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

    function updateNotes(dto) {
        notes.value == notes.value.map((n) => {
            if (n.id === dto.id) {
                n.content = dto.content
            }

            return n;
        });
    }
    

    return { notes, addNote, removeNote, getNoteContent, updateNotes, totalNotesCount, totalCharacters };
});