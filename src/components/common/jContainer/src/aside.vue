<template>
  <el-menu default-active="/index" router>
    <el-menu-item index="/index">首页</el-menu-item>
    <el-sub-menu>
      <template #title>
        <el-icon><icon-menu /></el-icon>代码模板
      </template>
      <el-menu-item-group>
        <el-menu-item index="/weiTemplate">微网站模板</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss"></style>
