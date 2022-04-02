<script setup>
import NoteCard from "../components/NoteCard.vue";
import { ref } from "@vue/reactivity";
import { useNotesStore } from "../stores/notes";

const notesStore = useNotesStore();

const title = ref('');
const content = ref('');


function add() {
    notesStore.save(title.value, content.value);
    title.value = "";
    content.value = "";
}

function removeNote(id) {
    notesStore.delete(id);

}

</script>
<template>
    <div class="d-flex align-items-center flex-column vh-100">
        <h1>Notes App</h1>

        <div
            v-if="notesStore.errorMsg.trim() !== ''"
            class="alert w-50 alert-danger"
        >{{ notesStore.errorMsg }}</div>

        <div class="w-50">
            <div class="form-group">
                <label for>Title</label>
                <input v-model="title" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label for>Content</label>
                <textarea v-model="content" rows="5" class="form-control"></textarea>
            </div>
            <button class="btn mt-2 btn-primary" @click="add">Save Note</button>
        </div>

        <div class="w-50 mt-5">
            <div class="row p-3">
                <div class="col-lg-5 mb-3" v-for="note in notesStore.notes" :key="note.id">
                    <NoteCard
                        @deleteAction="removeNote"
                        :title="note.title"
                        :id="note.id"
                        :content="note.content"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>