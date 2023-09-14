## 问题记录
1. 在文件中写样式的时候不能写scoped,写了也不会有作用
2. scroll-view  scroll-top 回到顶部不能粗暴的写成0 ;如果直接写成0 ,那么很有可能会不生效

```ts
const onTab = (index: number) => {
  activeIndex.value = index
  // 特别注意这里不能写死成0
  scrollTop.value = Math.random()
}

```
