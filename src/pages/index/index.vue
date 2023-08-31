<script setup lang="ts">
import { HomeBannerAPI, HomeCategoryAPI, HomeHotAPI } from '@/apis/home'
import PageSkeleton from './components/PageSkeleton.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { onLoad } from '@dcloudio/uni-app'

// 获取首页-广告区域数据
const bannerList: any = ref([])
const getHomeBanner = async () => {
  const res = await HomeBannerAPI()
  bannerList.value = res.result
}
// 获取分类数据
const categoryList: any = ref([])
const getHomeCategory = async () => {
  const res = await HomeCategoryAPI()
  categoryList.value = res.result
}
// 获取热门数据
const hotList: any = ref([])
const getHot = async () => {
  const res = await HomeHotAPI()
  hotList.value = res.result
}
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBanner(), getHomeCategory(), getHot()])
  isLoading.value = false
})

// 猜你喜欢
const guessRef = ref()
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

// 刷新
const isTriggered = ref(false) // 下拉刷新状态
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([getHomeBanner(), getHomeCategory(), getHot(), guessRef.value?.getMore()])
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <PageSkeleton v-if="isLoading" />
  <template v-else>
    <scroll-view
      scroll-y
      refresher-enabled
      :refresher-triggered="isTriggered"
      @refresherrefresh="onRefresherrefresh"
      @scrolltolower="onScrolltolower"
      class="scroll-view"
    >
      <!-- 首页轮播 -->
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <!-- 分类 -->
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <!-- 热门推荐 -->
      <HotPanel :list="hotList"></HotPanel>
      <!-- 猜你喜欢 -->
      <XtxGuessLike ref="guessRef"></XtxGuessLike>
    </scroll-view>
  </template>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
