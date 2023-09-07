export type Goods = {
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number
  inventory: number
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: string[]
  videoScale: number
  mainPictures: string[]
  isPreSale: boolean
  isCollect: boolean
  recommends: unknown
  userAddresses: unknown
  evaluationInfo: unknown
  brand: {
    id: string
    name: string
    nameEn: string
    picture: string
    logo: string
    type: unknown
    desc: string
    place: string
  }
  specs: [
    {
      id: string
      name: string
      values: [
        {
          name: string
          picture: string
          available: boolean
          desc: string
        },
      ]
    },
  ]
  skus: [
    {
      id: string
      skuCode: string
      price: string
      oldPrice: string
      inventory: number
      picture: string
      specs: [
        {
          name: string
          valueName: string
        },
      ]
    },
  ]
  categories: [
    {
      id: string
      name: string
      layer: number
      parent: {
        id: string
        name: string
        layer: number
        parent: unknown
      }
    },
  ]
  details: {
    properties: [
      {
        name: string
        value: string
      },
    ]
    pictures: string[]
  }

  similarProducts: [
    {
      id: string
      picture: string
      name: string
      price: string
      desc: string
      orderNum: number
      discount: unknown
    },
  ]
  hotByDay: [
    {
      id: string
      picture: string
      name: string
      price: string
      desc: string
      orderNum: number
      discount: unknown
    },
  ]
}
