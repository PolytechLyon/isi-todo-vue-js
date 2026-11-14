<script setup>
import { ref, watchEffect } from "vue";
import useTodoList from "../composables/useTodoList";

const {
    addItem,
    itemUnderEdit,
} = useTodoList();

const text = ref();
const input = ref();

watchEffect(() => input.value?.focus());

function add() {
    if (text.value) {
        addItem(text.value);
    }
    clear();
}

function clear() {
    text.value = "";
}


</script>

<template>
    <div v-if="!itemUnderEdit">
        <label for="new-item-text">Nouvel item</label>
        <input id="new-item-text" ref="input" v-model.trim="text" @keyup.enter="add" @keyup.escape="clear" />
        <button @click="add">Ajouter</button>
    </div>
</template>