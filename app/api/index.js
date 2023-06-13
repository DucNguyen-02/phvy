import appAxios from '../config/axiosConfig'

export const END_POINT = {
  DKBH: `/dkbh`,
  TYPE_PRODUCT: `/loaisp`,
  CSBH: `/csbh`,
}

export default class AppAPI {
  static getHistory = (params = {}) => appAxios.get(END_POINT.DKBH, params)

  static registerPolicy = (params = {}) => appAxios.post(END_POINT.DKBH, params)

  static getTypeProduct = (params = {}) =>
    appAxios.get(END_POINT.TYPE_PRODUCT, params)

  static getPolicy = (params = {}) => appAxios.get(END_POINT.CSBH, params)

  static updatePolicy = (params = {}) => appAxios.put(END_POINT.CSBH, params)

  static createPolicy = (params = {}) => appAxios.post(END_POINT.CSBH, params)
}
