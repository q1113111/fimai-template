import { rest } from '../index'

const Api = {
  getall: '/ops/api/opslog/getall' // 取的切換解析紀錄
}

export default {
  Getall (params) {
    return rest.get(Api.getall, params)
  }
}
