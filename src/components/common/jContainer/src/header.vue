<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <div class="header-container">
        <div class="logo-container">LOGO</div>
        <div class="content">
          <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
            <div class="flex-grow" />
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/xuexi">学习</el-menu-item>
            <el-menu-item index="/redian">热点</el-menu-item>
            <el-sub-menu index="/grxc" style="margin-left: 30px">
              <template #title>
                <span style="margin: 0 10px 0 0">Jesse</span>
                <img style="width: 40px; height: 40px; border-radius: 50%" :src="imgUrl" alt="头像" />
              </template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const imgUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<style scoped lang="scss">
.navbar {
  top: 0;
  left: 0;
  position: relative;
  z-index: 999;
  .navbar-wrapper {
    position: relative;
    border-bottom: 1px solid #dcdfe6;
    height: var(--header-height);
    padding: 0 12px 0 24px;
    background-image: radial-gradient(transparent 1px, #fff 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
    top: 0;
    .header-container {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .logo-container {
        display: flex;
        align-items: center;
        height: var(--header-height);
      }
      .content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
        .el-menu-demo {
          height: 55px;
        }
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .navbar-wrapper .header-container {
    max-width: calc(1600px);
  }
}
@media screen and (min-width: 1280px) {
  .navbar-wrapper {
    padding: 0 32px;
  }
}
@media screen and (min-width: 960px) {
  .navbar {
    position: fixed;
    width: 100%;
  }
}
@media screen and (min-width: 768px) {
  .navbar-wrapper {
    padding: 0 12px 0 32px;
    .content {
      padding-top: 1px;
    }
  }
}
</style>
