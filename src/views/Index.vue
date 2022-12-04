<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <VsTemplate :params="params"></VsTemplate>
      </el-col>
      <el-col :span="12">
        <p>123</p>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const params = {
  value: '// 在此行下面填写代码 \nconst nums: number = 123456',
  language: 'ts',
  fontSize: 16
}
</script>

<style scoped></style>
