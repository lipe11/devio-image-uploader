<script setup>
import { ref } from "vue";
import { useDropZone } from "@vueuse/core";

const dropZone = ref();
const fileSelector = ref();
const emit = defineEmits(["drop"]);

function chooseFile() {
  fileSelector.value.click();
}

function receiveFile(files) {
  const file = files && files[0];
  if (file && ["image/jpeg", "image/png"].includes(file.type)) {
    emit("drop", file);
  } else {
    alert("Invalid file type");
  }
}

const { isOverDropZone } = useDropZone(dropZone, receiveFile);
</script>

<template>
  <section class="box column">
    <div class="title">Upload your image</div>
    <div class="small-text">File should be Jpeg, Png,...</div>
    <div
      class="drop-zone column"
      ref="dropZone"
      :class="{ 'over-drop-zone': isOverDropZone }"
    >
      <img src="../assets/image.svg" />
      <div class="text">Drag &amp; Drop your image here</div>
    </div>
    <div class="text">Or</div>
    <button @click="chooseFile">Choose a file</button>
    <input
      type="file"
      ref="fileSelector"
      accept="image/jpeg, image/png, image/jpg"
      @change="receiveFile($event.target.files)"
    />
  </section>
</template>

<style scoped>
.drop-zone {
  margin-top: 1em;
  gap: 2em;
  width: 330px;
  height: 220px;
  background: #f6f8fb;
  border: 1px dashed #97bef4;
  border-radius: 12px;
}

.over-drop-zone {
  border-width: 3px;
  opacity: 0.8;
}

input[type="file"] {
  display: none;
}
</style>
