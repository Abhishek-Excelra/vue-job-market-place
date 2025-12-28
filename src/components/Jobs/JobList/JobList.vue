<script setup>
import Card from '@/components/common/Card/Card.vue'
import { ref, onMounted } from 'vue'

const jobs = ref([])

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  console.log(data)
  jobs.value = data.map(el => el.title)
})
</script>

<template>
  <div class="jobs-container">
    <Card v-for="(job, index) in jobs" :key="index">
      <div class="job-box">
        <p>{{ job }}</p>
        <button>Submit</button>
      </div>
    </Card>
  </div>
</template>
<style scoped>
button {
  margin-left: 8px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.jobs-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* This forces 3 columns */
  gap: 16px;
  margin-top: 20px;
}

.job-box {
  background-color: #f4f4f4;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.job-box p {
  font-size: 16px;
  color: #333;
}

.card-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
