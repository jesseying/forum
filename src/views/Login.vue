<template>
  <el-form :model="form" label-width="120px" ref="formRef" :rules="rules" @submit.prevent="onSubmit">
    <el-form-item label="账号" prop="username">
      <el-input v-model="form.username" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" placeholder="请输入密码" type="password" />
    </el-form-item>
    <!--<el-form-item prop="imgcode">-->
    <!--  <div class="imgcode-wrap">-->
    <!--    <el-input-->
    <!--      v-model="form.imgcode"-->
    <!--      placeholder="请输入验证码"-->
    <!--      prefix-icon="key" />-->
    <!--    <img-->
    <!--      class="imgcode"-->
    <!--      alt="验证码"-->
    <!--      :src="captchaSrc"-->
    <!--      @click="loadCaptcha">-->
    <!--  </div>-->
    <!--</el-form-item>-->
    <el-form-item>
      <el-button native-type="submit" type="primary" :loading="formLoading">登录</el-button>
      <el-button native-type="reset">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { loading } from '@/utils/loading'
import { reactive, ref } from 'vue'
import { login } from '@/api/user'
import type { FormItemRule, FormInstance } from 'element-plus'
import router from '@/router'

const formRef = ref<FormInstance>()
const form = reactive({
  username: '',
  password: ''
})
const formLoading = ref(false)
// 验证码图片地址
// const captchaSrc = ref('')
// 获取验证码图片地址
// const loadCaptcha = () => {
//   captchaSrc.value = import.meta.env.VITE_API_BASEURL + '/captcha?' + Date.now()
// }
const rules = ref<Record<string, FormItemRule[]>>({
  username: [{ required: true, message: '请输入账号', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }]
  // imgcode: [
  //   { required: true, message: '请输入验证码', trigger: 'change' }
  // ]
})
const onSubmit = async () => {
  if (!formRef.value) return
  const valid = await formRef.value.validate()
  if (!valid) return false
  const res = await login(form)
    .finally(() => {
      loading.show()
    })
    .catch(() => {})
  console.log(res)
  loading.hide()
  await router.replace({
    name: 'Index'
  })

  // onMounted(() => {
  //   loadCaptcha()
  // })
}
</script>

<style scoped></style>
