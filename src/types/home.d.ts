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
