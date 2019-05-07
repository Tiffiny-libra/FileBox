<template lang="pug">
  .header
    .logo-area
      .logo-truck
      .logo-intro File Box
    .user-info
      .user-info-phtoto
      .user-info-name 张三
</template>
<script lang="ts">
import Vue from 'vue'
export default class Header extends Vue{
  
}
</script>
<style lang="sass" scoped>
.header
  display: inline-flex
  padding: 10px 20px
  align-items: center
  box-shadow: 0 2px 6px 0 #cccccc
  height: 42px
  .logo-area
    flex: 1
    display: inline-flex
    align-items: center
    .logo-truck
      background: url('~@/assets/trunck.svg')  no-repeat center
      height: 40px
      width: 80px
      background-size: contain
    .logo-intro
      display: flex
      align-items: flex-end
      font-weight: bold
      font-size: 24px
      padding-left: 10px
      height: 40px
  .user-info
    display: inline-flex
    align-items: center
    &-phtoto
      border: 1px solid #cccccc
      border-radius: 50%
      height: 30px
      width: 30px
      margin-right: 10px
    &-name
</style>


