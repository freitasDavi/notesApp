

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
    </div>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes';

const store = useStoreNotes();

</script>