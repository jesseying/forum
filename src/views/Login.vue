<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="账号">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { login } from '@/api/user'

const form = reactive({
  username: '',
  password: ''
})
const onSubmit = async () => {
  const res = await login(form).catch(() => {})
  console.log(res)
}
</script>

<style scoped></style>
