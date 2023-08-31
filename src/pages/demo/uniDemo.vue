<script lang="ts" setup>
const x = ref(30)
const y = ref(30)
const onChange = (e: any) => {
  x.value = e.detail.x
  y.value = e.detail.y
}

// 获取手机号
const decryptPhoneNumber = (env: any) => {
  console.log(env)
}

// checkbox
const isChecked = ref(true)
</script>
<template>
  <movable-area class="area">
    <movable-view :x="x" :y="y" class="view" direction="all">text</movable-view>
  </movable-area>
  <view class="button-sp-area">
    <button type="primary" plain>页面主操作 Normal</button>
    <button type="default" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">
      获取手机号
    </button>
    <view> <checkbox value="cb" :checked="isChecked" />选中 </view>
    <view> <checkbox value="cb" disabled />禁用 </view>
  </view>
  <view>
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</text>
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <view class="example-body">
        <uni-badge class="uni-badge-left-margin" text="1" />
        <uni-badge class="uni-badge-left-margin" text="2" type="primary" />
        <uni-badge class="uni-badge-left-margin" text="34" type="success" />
        <uni-badge class="uni-badge-left-margin" text="45" type="warning" />
      </view>
    </uni-section>

    <view>
      <uni-section title="卡片标题+额外信息" type="line">
        <uni-card title="基础卡片" extra="额外信息">
          <text class="uni-body"
            >这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text
          >
        </uni-card>
      </uni-section>
    </view>
  </view>
</template>
<style lang="scss">
:host {
  padding: 20rpx;
  box-sizing: border-box;
}
.area {
  width: 100%;
  height: 400rpx;
  background-color: #dcdcdc;
  .view {
    width: 200rpx;
    height: 200rpx;
    background-color: blue;
  }
}

.button-sp-area {
  margin: 0 auto;
  width: 60%;
}
</style>
