<script setup>
</script>
<template>
  <div class="not-found">

    <img src="/not-found.png" alt="404">

    <RouterLink to="/">
      <button class="not-found__btn"> Back to Home </button>
    </RouterLink>
  </div>
</template>

<style scoped>
  .not-found {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .not-found__btn {
    background-color: #42b983;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
  }
</style>
