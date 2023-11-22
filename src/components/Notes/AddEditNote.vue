

<template>
    <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
        <label class="label has-text-white" v-if="label">
            {{ label }}
        </label>
        <div class="field">
            <div class="control">
                <textarea :value="newNote" @input="$emit('update:newNote', $event.target.value)" class="textarea"
                    ref="noteRef" :placeholder="placeholder" />
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const noteRef = ref();

const props = defineProps({
    newNote: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String
    }
})

const emit = defineEmits(['update:newNote'])

function focusTextArea() {
    noteRef.value.focus();
}

defineExpose({
    focusTextArea
})

</script>