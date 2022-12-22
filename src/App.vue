<template>
  <jContainer>
    <router-view />
  </jContainer>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100%;
  line-height: 1.4;
  font-size: 16px;
  font-weight: 400;
  color: var(--text-color);
  background-color: #f5f5f5;
  direction: ltr;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color var(--el-transition-duration-fast);
}
</style>
