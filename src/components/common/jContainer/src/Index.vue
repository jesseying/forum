<template>
  <div class="common-layout">
    <el-container class="is-vertical">
      <Header />
      <el-scrollbar ref="mainScrollbarRef">
        <el-row class="frontend-footer-brother" justify="center">
          <el-col class="user-layouts" :span="16" :xs="24">
            <Aside class="hidden-sm-and-down" />
            <slot></slot>
          </el-col>
        </el-row>
        <Footer />
      </el-scrollbar>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import Header from './header.vue'
import Aside from './aside.vue'
import Footer from './footer.vue'
console.log(router)
</script>

<style scoped lang="scss">
.user-layouts {
  display: flex;
  padding-top: 15px;
  align-items: flex-start;
}
@media screen and (max-width: 768px) {
  .user-layouts {
    padding-top: 0;
  }
}
</style>
