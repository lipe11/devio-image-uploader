<script setup>
import { useStorage } from "./firebase/firebase";
import UploadView from "./components/UploadView.vue";
import ProgressView from "./components/ProgressView.vue";
import DoneView from "./components/ImageView.vue";

const { data, uploadImage } = useStorage();
</script>

<template>
  <UploadView @drop="uploadImage" v-if="data.state === 'idle'" />
  <ProgressView :progress="data.progress" v-if="data.state === 'running'" />
  <DoneView :url="data.url" v-if="data.state === 'done'" />
  <footer>Created by Luis Castillo - devchallenges.io</footer>
</template>
