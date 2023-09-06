import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

// 分类列表
export const categoryTopAPI = () => {
  return http<CategoryTopItem>({
    method: 'GET',
    url: '/category/top',
  })
}
