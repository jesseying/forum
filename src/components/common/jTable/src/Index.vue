<template>
  <div>123</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// 子组件声明了的 props ，若父组件未传，则该值为 undefined
// const props = defineProps({
//   child: {
//     type: String, // 参数类型
//     default: '1', //默认值
//     required: true, //是否必传
//     validator: (value: number) => {
//       return value >= 0 // 除了验证是否符合type的类型，此处再判断该值结果是否符合验证
//     }
//   },
//   sda: String, //undefined
//   strData: String,
//   arrFor: Array
// })

// 设置默认值
interface Props {
  // either: '必传且限定' | '其中一个' | '值' // 利用TS：限定父组件传 either 的值
  // child: string | number
  // sda?: string // 未设置默认值，为 undefined
  // strData: string
  // msg?: string
  // labels?: string[]
  // obj?: { a: number }
  data: Array<any> | any // 表格数据
  labelList: Array<object> // 表头数据
  pageNum?: number // 分页页码
  pageSize?: number // 分页每页条数
  total: number // 分页总条数
  selectData?: object // 查询参数
}
// 编译默认值

const props = withDefaults(defineProps<Props>(), {
  pageNum: 1,
  pageSize: 10,
  selectData: () => {
    return {}
  }
})
console.log(props)
</script>

<style scoped></style>
