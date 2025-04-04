import * as qiniu from 'qiniu-js'

export default {
  /**
   * 上传文件到七牛云
   * @param {string} filePath 文件路径
   * @param {string} token 七牛上传凭证
   * @param {string} key 文件key(可选)
   * @param {object} config 配置项
   * @returns {Promise}
   */
  upload(filePath, token, key = null, config = {}) {
    return new Promise((resolve, reject) => {
      const putExtra = {
        fname: '',
        params: {},
        mimeType: null
      }
      console.log(qiniu);
      
      const qiniuConfig = {
        useCdnDomain: true,
        region: 'z1' // 华北
      }
      
      const observable = qiniu.upload(
        filePath,
        key,
        token,
        putExtra,
        qiniuConfig
      )
      
      observable.subscribe({
        next(res) {
          // 上传进度
          console.log('上传进度:', res.total.percent)
        },
        error(err) {
          reject(err)
        },
        complete(res) {
          resolve(res)
        }
      })
    })
  }
}