export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

export type CategoryItem = {
  icon: string
  id: string
  name: string
}

export type HotItem = {
  id: string
  title: string
  target: string
  type: string | number
  alt?: string
  pictures: [string]
  [propName: string]: any
}

/** 猜你喜欢-商品类型 */
export type GuessItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
  pages: number
  items: Array
}
