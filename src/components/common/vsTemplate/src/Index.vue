<template>
  <div id="inputContainer" ref="inputContainer" style="height: 700px; max-width: 100%"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
// eslint-disable-next-line no-undef
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor
interface Props {
  params?: {
    value?: string
    language?: string
    fontSize?: number
    fileName?: string
    // height: number | string
  }
}
const props = withDefaults(defineProps<Props>(), {
  params: () => {
    return {
      value: '',
      language: 'javascript',
      fontSize: 16,
      fileName: '*'
      // height: '200px'
    }
  }
})
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
  const value = props.params.value
  const language = props.params.language
  const fontSize = props.params.fontSize
  if (inputContainer.value) {
    inputEditor.value = monaco.editor.create(inputContainer.value, {
      value: value, // 编辑器的初始值
      language: language, // 编辑器的语言类型
      theme: 'vs-dark', // 主题
      formatOnPaste: true, // 使用粘贴格式，默认false
      automaticLayout: true,
      fontSize: fontSize,
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
        // eslint-disable-next-line no-undef
        localStorage.setItem('draft', toRaw(inputEditor.value).getValue())
        // console.log(toRaw(inputEditor.value).getValue())
        // console.log(typeof toRaw(inputEditor.value).getValue())
      }
    }, 3000)
  }
})
</script>

<style scoped></style>
