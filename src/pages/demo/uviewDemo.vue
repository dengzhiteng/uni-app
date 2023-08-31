<script setup>
const count = ref(4)
const value = ref(2)
</script>
<template>
  <view>
    <u-rate :count="count" v-model="value"></u-rate>
  </view>
</template>
<style lang="scss"></style>
