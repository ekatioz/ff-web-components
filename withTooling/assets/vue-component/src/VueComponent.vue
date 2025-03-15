<style>
.wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
}

.button {
    background: #42b883;
    border: none;
    border-Radius: 4px;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.input {
    background: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    width: 100px;
    text-align: right;
    flex-grow: 1;
}
</style>

<script setup>
import { ref } from "vue";
const count = ref(0);
const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<template>
    <div class="wrapper">
        <button type="button" class="button" @click="decrement">-1</button>
        <input type="text" class="input" v-model="count" />
        <button type="button" class="button" @click="increment">+1</button>
    </div>
</template>

