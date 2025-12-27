<script setup>
import { ref } from 'vue';

const name = ref('Abhishek');
const email = ref('abhishek@gmail.com');

const submitForm = () => {
  alert(`${name.value}, ${email.value}`);
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <label for="name">Name : </label>
    <input type="text" id="name" v-model="name" />
    <br />
    <br />
    <label for="email">Email : </label>
    <input type="email" id="email" v-model="email" />
    <br />
    <br />
    <button type="submit">Submit</button>
  </form>
</template>
