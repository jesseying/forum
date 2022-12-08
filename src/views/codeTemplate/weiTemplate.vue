<template>
  <el-row :gutter="10">
    <el-col :span="12" v-for="(item, index) in templates" :key="index">
      <p>文件：{{ item.fileName }}</p>
      <VsTemplate :params="item"></VsTemplate>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
const templates = [
  {
    value:
      '<template>\n' +
      '  ' +
      '<div class="content_v">\n' +
      '    ' +
      '<div class="page_title" v-if="!wxFlag">\n' +
      '      ' +
      '<el-page-header @back="goBack" content="值班概览"/>\n' +
      '    ' +
      '</div>\n' +
      '  ' +
      '</div>\n' +
      '' +
      '</template>\n' +
      '<' +
      'script>\n' +
      '' +
      'export default {\n' +
      '  ' +
      'data() {\n' +
      '    ' +
      'return {\n' +
      '      ' +
      "loginId: '',\n" +
      '      ' +
      "loginKey: '',\n" +
      '      ' +
      'wxFlag: false,\n' +
      '    ' +
      '}\n' +
      '  ' +
      '}\n' +
      '' +
      '},\n' +
      '' +
      'mounted() {\n' +
      '  ' +
      'if (this.$route.query.login_d == undefined) {\n' +
      '    ' +
      'this.wxFlag = false\n' +
      '  ' +
      '} else {\n' +
      '    ' +
      'this.loginId = this.$route.query.login_id\n' +
      '    ' +
      'this.loginKey = this.$route.query.key\n' +
      '    ' +
      'this.$ls.setLoginId(this.loginId)\n' +
      '    ' +
      'this.$ls.setKey(this.loginKey)\n' +
      '  ' +
      '}\n' +
      '  ' +
      'this.wxFlag = this.$route.query.wxFlag == undefined ? false : true\n' +
      '  ' +
      '},\n' +
      '  ' +
      'methods: {\n' +
      '    ' +
      'goBack() {\n' +
      '      ' +
      'this.$router.go(-1)\n' +
      '    ' +
      '}\n' +
      '  ' +
      '}\n' +
      '' +
      '}\n' +
      '</' +
      'script>\n' +
      '' +
      '<style scoped>\n' +
      '  ' +
      '.content_v {\n' +
      '    ' +
      'display: flex;\n' +
      '    ' +
      'flex-direction: column;\n' +
      '  ' +
      '}\n' +
      '  ' +
      '.page_title {\n' +
      '    ' +
      'padding:12px10px;\n' +
      '    ' +
      'background:#fff;\n' +
      '  ' +
      '}\n' +
      '</' +
      'style>\n',
    language: 'html',
    fileName: '*.vue'
  },
  {
    value: 'const route = {\n' + '  ' + "path: '/*',\n" + '  ' + "name: '/*',\n" + '  ' + "meta: { title: '*' },\n" + '  ' + "component: () => import('@view/*.vue')\n" + '}',
    language: 'javascript',
    fileName: 'router.js'
  }
]
</script>

<style scoped></style>
