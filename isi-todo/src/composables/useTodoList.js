import { ref, readonly } from "vue";

let lastId = 0;

const items = ref([]);
const itemUnderEdit = ref();

function addItem(text) {
    const newItem = {
        id: lastId++,
        text,
    }
    items.value = [...items.value, newItem];
}

function removeItem(id) {
    items.value = items.value.filter(i => i.id !== id);
}

function updateItem(text) {
    itemUnderEdit.value.text = text;
}

function resetEdit() {
    itemUnderEdit.value = undefined;
}

function editItem(id) {
    itemUnderEdit.value = items.value.find(i => i.id === id);
}

function toggleDone(id) {
    const item = items.value.find(i => i.id === id);
    if (item) {
        item.done = !item.done;
    }
}

export default function useTodoList() {
    return {
        items: readonly(items),
        itemUnderEdit: readonly(itemUnderEdit),
        addItem,
        removeItem,
        updateItem,
        resetEdit,
        editItem,
        toggleDone,
    };
}