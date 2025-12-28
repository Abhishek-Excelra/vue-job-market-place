<script setup>
  import {ref, onMounted} from 'vue'
  import Card from '@/components/common/Card/Card.vue'
const jobs = ref([])
onMounted(async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await response.json()
  jobs.value = data
})
</script>
<template>
  <div class="job-list">
    <div class="row g-3">
      <div class="col-md-4" v-for="job in jobs" :key="job.id">
        <Card :title="job.name" :text="job.email" :button="job.body.slice(0, 40) + '…'" />
      </div>
    </div>
  </div>
</template>
