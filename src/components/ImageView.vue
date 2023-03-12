<script setup>
const props = defineProps({
  url: String,
});

function copyToClipboard() {
  navigator.clipboard.writeText(props.url);
}
</script>

<template>
  <div class="box column">
    <img src="../assets/check_circle.svg" alt="check" />
    <div class="title">Uploaded Successfully!</div>
    <img :src="url" class="image" alt="image" />
    <div class="url-box">
      <div class="text-small">{{ url }}</div>
      <button @click="copyToClipboard">Copy Link</button>
    </div>
  </div>
</template>

<style scoped>
.column {
  gap: 2em;
}
.image {
  width: 330px;
  border-radius: 12px;
}
.url-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f8fb;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2px;
  width: 330px;
}
.text-small {
  width: 200px;
  padding: 0 4px;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
