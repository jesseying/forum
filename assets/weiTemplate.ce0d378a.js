import{_ as c,d as p,e,f as m,w as a,o as l,c as d,h as g,F as _,g as o,i as f,t as h}from"./index.e7af1427.js";const v=p({__name:"weiTemplate",setup(w){const s=[{value:`<template>
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
  if (this.$route.query.login_d == undefined) {
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
}`,language:"javascript",fileName:"router.js"}];return(x,y)=>{const n=e("VsTemplate"),i=e("el-col"),r=e("el-row");return l(),m(r,{gutter:10},{default:a(()=>[(l(),d(_,null,g(s,(t,u)=>o(i,{span:12,key:u},{default:a(()=>[f("p",null,"\u6587\u4EF6\uFF1A"+h(t.fileName),1),o(n,{params:t},null,8,["params"])]),_:2},1024)),64))]),_:1})}}});var k=c(v,[["__file","/home/runner/work/nsiForum/nsiForum/src/views/codeTemplate/weiTemplate.vue"]]);export{k as default};
