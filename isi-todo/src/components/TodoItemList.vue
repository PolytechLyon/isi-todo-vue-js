<script setup>
import useTodoList from '../composables/useTodoList';

const {
    items,
    removeItem,
    editItem,
    toggleDone,
    itemUnderEdit,
} = useTodoList();

function disableRemove(id) {
    return itemUnderEdit.value?.id === id;
}

</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <span>{{ item.text }}</span>
            <input type="checkbox" :checked="item.done" @change="toggleDone(item.id)" />
            <button @click='editItem(item.id)'>Modifier</button>
            <button @click='removeItem(item.id)' :disabled="disableRemove(item.id)">Supprimer</button>
        </li>
    </ul>
</template>