/** 封装通用信息 */
type BaseProfile = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
}
/** 性别 */
export type Gender = '女' | '男'

/** 小程序登录 登录用户信息 */
export type LoginResult = BaseProfile & {
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}

/** 个人信息 用户详情信息 */
export type ProfileDetail = BaseProfile & {
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
}

/** 个人信息 修改 */
export type ProfileEdit = {
  //昵称
  nickname?: string | null | undefined
  // 性别
  gender?: string | null | undefined
  // 出生日期
  birthday?: string | null | undefined
  // 职位
  profession?: string | null | undefined
  // 省份编码
  provinceCode?: string | null | undefined
  // 城市编码
  cityCode?: string | null | undefined
  // 区县编码
  countyCode?: string | null | undefined
}
