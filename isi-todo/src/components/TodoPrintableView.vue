<script setup>
import { computed } from 'vue';
import useTodoList from '../composables/useTodoList';

const {
    items,
} = useTodoList();

const undone = computed(() => items.value.filter(i => !i.done).length);
const total = computed(() => items.value.length);


</script>

<template>
    <RouterLink to="/">Page d'accueil</RouterLink>
    <div>{{ total }} item(s), dont {{ undone }} encore à faire.</div>
    <ul v-if="items.length">
        <li v-for="{id, text, done} in items" :key="id" :class="{ done }">{{ text }}</li>
    </ul>
    <div v-else>
        La liste est vide.
    </div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
