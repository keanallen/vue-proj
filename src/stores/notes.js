import { defineStore } from 'pinia' // state mgmt

export const useNotesStore = defineStore({
    id: 'notes',
    state: () => ({
        notes: [],
        errorMsg: "",
    }),
    actions: {
        save(title, content) {

            if (title.trim() == '' || content.trim() == '') {
                this.errorMsg = "Title and Content is required!";
                return;
            }

            let uniqueId = this.notes.length + 1;

            let note = {
                "id": uniqueId,
                "title": title,
                "content": content,
            };

            this.notes.push(note);
            this.errorMsg = '';
        },
        delete(id) {
            this.notes = this.notes.filter((el) => el.id != id);
        }
    }
});