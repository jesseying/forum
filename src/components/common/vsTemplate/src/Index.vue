<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <div id="inputContainer" ref="inputContainer" style="height: 80vh; max-width: 100%"></div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
// eslint-disable-next-line no-undef
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor
;(self as any).MonacoEnvironment = {
  getWorker(_: any, label: any) {
    if (label === 'json') {
      return new JsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new CssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new HtmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new TsWorker()
    }
    return new EditorWorker()
  }
}

const inputEditor = ref<IStandaloneCodeEditor>()
const inputContainer = ref<HTMLElement>()
onMounted(() => {
  if (inputContainer.value) {
    inputEditor.value = monaco.editor.create(inputContainer.value, {
      value: '', // 编辑器的初始值
      language: 'javascript', // 编辑器的语言类型
      theme: 'vs-dark', // 主题
      formatOnPaste: true, // 使用粘贴格式，默认false
      automaticLayout: true,
      fontSize: 16,
      minimap: {
        enabled: false // 关闭小地图
      },
      readOnly: false // 控制是否只读模式
    })
    setTimeout(() => {
      if (inputEditor.value) {
        inputEditor.value.getAction('editor.action.formatDocument').run()
      }
    }, 500)
    setInterval(() => {
      if (inputEditor.value) {
        localStorage.setItem('draft', toRaw(inputEditor.value).getValue())
      }
    }, 3000)
    console.log(ref[0])
  }
  watch(
    () => inputEditor.value,
    (value, oldValue) => {
      console.log(oldValue)
    }
  )
})
</script>

<style scoped></style>
