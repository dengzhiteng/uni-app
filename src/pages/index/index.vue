<script setup lang="ts">
import { HomeBannerAPI, HomeCategoryAPI, HomeHotAPI } from '@/apis/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

// 获取首页-广告区域数据
const bannerList: any = ref([])
const getHomeBanner = async () => {
  const res = await HomeBannerAPI()
  bannerList.value = res.result
}
getHomeBanner()

// 获取分类数据
const categoryList: any = ref([])
const getHomeCategory = async () => {
  const res = await HomeCategoryAPI()
  categoryList.value = res.result
}
getHomeCategory()

// 获取热门数据
const hotList: any = ref([])
const getHot = async () => {
  const res = await HomeHotAPI()
  hotList.value = res.result
}
getHot()
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <CategoryPanel :list="categoryList"></CategoryPanel>
  <HotPanel :list="hotList"></HotPanel>
</template>
