<template>
  <router-view />
</template>

<script setup lang="ts"></script>

<style>
#app {
  height: 100%;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.95, 0.95, 0.95);
  }

  100% {
    opacity: 1;
  }
}
@keyframes zoomOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: scale3d(0.95, 0.95, 0.95);
  }
}
</style>
