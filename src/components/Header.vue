<template lang="pug">
  .header
    .logo-area logo image
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


