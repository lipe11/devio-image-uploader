<script setup>
defineProps({
  progress: Number,
});
</script>

<template>
  <div class="box column">
    <div class="title">Uploading...</div>
    <div class="progress">
      <div :style="{ width: `${progress}%` }"></div>
    </div>
  </div>
</template>

<style scoped>
.column {
  align-items: flex-start;
  gap: 2em;
}
.progress {
  height: 8px;
  width: 330px;
  background: #f2f2f2;
  border-radius: 8px;
}
.progress > div {
  height: 100%;
  background: #2f80ed;
  border-radius: 8px;
}
</style>
