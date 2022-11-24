import axios from 'axios'
import { generateSignature, createTimeStamp, randomString6 } from './plugins'
import HttpUtils from '../http/HttpUtils'

export default {
  //接口对接
  postAction(params) {
    // 刷新固定字符串
    HttpUtils.encryption.ni_timestamp = createTimeStamp()
    HttpUtils.encryption.ni_nonceStr = randomString6()
    HttpUtils.sign = generateSignature(HttpUtils.encryption)
    const methods = params.method == undefined ? 'POST' : params.method
    const datas = new FormData()
    const headers = params.header == undefined ? { 'Content-Type': 'application/json' } : params.header
    if (params.data.p !== undefined) {
      datas.append('p', String(params.data.p))
    } else {
      datas.append('p', params.data)
    }
    datas.append('ni_sysSrcCode', HttpUtils.encryption.ni_sysCode)
    datas.append('ni_timestamp', HttpUtils.encryption.ni_timestamp)
    datas.append('ni_nonceStr', HttpUtils.encryption.ni_nonceStr)
    datas.append('ni_sign', HttpUtils.sign)

    return new Promise((resolve, reject) => {
      axios({
        url: params.url,
        method: methods,
        header: headers,
        data: datas
      })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  //  上传文件
  postUpload(params) {
    // 刷新固定字符串
    HttpUtils.encryption.ni_timestamp = createTimeStamp()
    HttpUtils.encryption.ni_nonceStr = randomString6()
    HttpUtils.sign = generateSignature(HttpUtils.encryption)
    const methods = params.method == undefined ? 'POST' : params.method
    if (params.data !== undefined) {
      var datas = params.data
    }

    const headers = params.header == undefined ? { 'Content-Type': 'multipart/form-data' } : params.header
    datas.append('ni_sysSrcCode', HttpUtils.encryption.ni_sysCode)
    datas.append('ni_timestamp', HttpUtils.encryption.ni_timestamp)
    datas.append('ni_nonceStr', HttpUtils.encryption.ni_nonceStr)
    datas.append('ni_sign', HttpUtils.sign)
    console.log('aaaaaa', datas)
    return new Promise((resolve, reject) => {
      axios({
        url: params.url,
        method: methods,
        header: headers,
        data: datas
      })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
