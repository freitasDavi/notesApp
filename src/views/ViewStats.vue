

<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ store.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of characters (of all notes)</td>
                    <td>{{ store.totalCharacters }}</td>
                </tr>
            </tbody>
        </table>
        <input v-auto-focus class="input" type="text" placeholder="Do you love notepad?" />
    </div>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes';
import { vAutoFocus } from "@/directives/vAutoFocus"

const store = useStoreNotes();

</script>