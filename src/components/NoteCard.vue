<script setup>
defineProps({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
});

const emits = defineEmits(['deleteAction']);

function remove(id) {
    emits('deleteAction', id);
}
</script>
<template>
    <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
            <h5>{{ title }}</h5>
            <button class="btn btn-danger" @click="remove(id)">Remove</button>
        </div>
        <div class="card-body">{{ content }}</div>
    </div>
</template>
