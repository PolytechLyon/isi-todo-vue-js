<script setup>
import { ref, watchEffect } from "vue";
import useTodoList from "../composables/useTodoList";

const {
    itemUnderEdit,
    updateItem,
    resetEdit,
} = useTodoList();

const text = ref();
const input = ref();

watchEffect(() => {
    text.value = itemUnderEdit.value?.text;
    input.value?.focus();
});

function update() {
    if (text.value) {
        updateItem(text.value);
        clear();
    }
}

function clear() {
    text.value = "";
    resetEdit();
}

</script>

<template>
    <div v-if="itemUnderEdit">
        <label for="edit-item-text">Mise à jour d'item</label>
        <input id="edit-item-text" ref="input" v-model.trim="text" @keyup.enter="update" @keyup.escape="clear" />
        <button @click="clear">Annuler</button>
        <button @click="update">Modifier</button>
    </div>
</template>