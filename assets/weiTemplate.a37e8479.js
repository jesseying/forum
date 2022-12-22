import{d as c,r as e,o as a,c as p,a as l,j as d,k as g,F as m,b as n,m as f,t as _}from"./index.f4b1f889.js";const k=c({setup(h){const o=[{value:`<template>
  <div class="content_v">
    <div class="page_title" v-if="!wxFlag">
      <el-page-header @back="goBack" content="\u503C\u73ED\u6982\u89C8"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginId: '',
      loginKey: '',
      wxFlag: false,
    }
  }
},
mounted() {
  if (this.$route.query.login_id == undefined) {
    this.wxFlag = false
  } else {
    this.loginId = this.$route.query.login_id
    this.loginKey = this.$route.query.key
    this.$ls.setLoginId(this.loginId)
    this.$ls.setKey(this.loginKey)
  }
  this.wxFlag = this.$route.query.wxFlag == undefined ? false : true
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
<\/script>
<style scoped>
  .content_v {
    display: flex;
    flex-direction: column;
  }
  .page_title {
    padding:12px10px;
    background:#fff;
  }
</style>
`,language:"html",fileName:"*.vue"},{value:`const route = {
  path: '/*',
  name: '/*',
  meta: { title: '*' },
  component: () => import('@view/*.vue')
}`,language:"javascript",fileName:"router.js"}];return(v,y)=>{const s=e("VsTemplate"),i=e("el-col"),r=e("el-row");return a(),p(r,{gutter:10},{default:l(()=>[(a(),d(m,null,g(o,(t,u)=>n(i,{span:12,key:u},{default:l(()=>[f("p",null,"\u6587\u4EF6\uFF1A"+_(t.fileName),1),n(s,{params:t},null,8,["params"])]),_:2},1024)),64))]),_:1})}}});export{k as default};
