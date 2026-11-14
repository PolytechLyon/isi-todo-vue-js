<script setup>
import TodoAddItem from "./TodoAddItem.vue";
import TodoItemList from "./TodoItemList.vue";
import TodoEditItem from "./TodoEditItem.vue";

</script>

<template>
    <RouterLink to="/printable">Version imprimable</RouterLink>
    <TodoItemList />
    <TodoAddItem />
    <TodoEditItem />
</template>
