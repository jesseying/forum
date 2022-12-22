<template>
  <el-row :gutter="10">
    <el-col :span="14" :offset="2">
      <el-card class="box-card" style="height: 1900px">

      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card" style="height: 300px">

      </el-card>
      <el-card class="box-card" style="height: 300px;margin-top: 1%">

      </el-card>
    </el-col>

  </el-row>
</template>

<script setup lang="ts">
import { getCategories } from '@/api/category'
const res = await getCategories()
console.log(res)
</script>

<style scoped>
.box-card {
  box-shadow: none;
  border: none;
}
</style>
