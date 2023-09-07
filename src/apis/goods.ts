import type { Goods } from '@/types/goods'
import { http } from '@/utils/http'

/**
 * 商品详情
 * @param id
 */
export const GoodsAPI = (id: string) => {
  return http<Goods>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
