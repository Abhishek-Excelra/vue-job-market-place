<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px red;
  overflow: hidden;
  max-width: 300px;
  margin: 16px;
  display: flex;
  flex-direction: column;
}
.card-media img {
  width: 100%;
  height: auto;
}
.card-header {
  padding: 16px;
}
.card-title {
  font-size: 1.25rem;
  margin: 0;
}
.card-subtitle {
  font-size: 0.875rem;
  color: #666;
  margin-top: 4px;
}
.card-content {
  padding: 0 16px 16px;
}
.card-actions {
  padding: 8px 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
}
</style>
