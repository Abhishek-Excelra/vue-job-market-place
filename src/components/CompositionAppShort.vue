<script setup>
import { ref } from 'vue';

const title = ref('CompositionApp Short')
const status = ref('Active')
const tasks = ref(['task one', 'task two', 'task three'])
const link = ref('https://google.com')

const toggleStatus = () => {
  status.value = status.value === 'Active' ? 'Inactive' : 'Active'
}

</script>

<template>
  <p>{{ title }}</p>

  <p v-if="status === 'Active'">Active</p>
  <p v-else-if="status === 'Inactive'">Inactive</p>
  <p v-else>Unknown</p>

  <h2>Tasks</h2>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Google</a>
  <br />
  <br />
  <button @click="toggleStatus">Status change</button>
</template>
