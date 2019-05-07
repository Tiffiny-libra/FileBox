<template lang="pug">
.file-panel
  .file-panel-title
    span 全部文件
    span 已全部加载，共5个
  .file-panel-wrapper
    span 文件显示区域
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
<style lang="sass" scoped>
.file-panel
  font-size: 14px
  .file-panel-title
    display: inline-flex
    width: 100%
    span:first-child
      flex: 1
    span:last-child
  .file-panel-wrapper
    margin-top: 10px
</style>

