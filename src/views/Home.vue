<template lang="pug">
  .home-content
    .operation-header
      .app-button
        i
        span 上传
      .app-button
        i
        span 新建文件夹
      .app-button
        i
        span 下载
    .file-panel-body
      FilePanel
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilePanel from '@/components/FilePanel.vue'; // @ is an alias to /src

@Component({
  components: {
    FilePanel,
  },
})
export default class Home extends Vue {}
</script>
<style lang="sass" scoped>
.home-content
  width: calc(100% - 20px)
  .operation-header
    display: inline-flex
    margin: 20px
    .app-button
      margin-right: 20px
    .app-button:first-child
      background-color: #09AAFF
      border-color: #09AAFF
      span
        color: #fff
  .file-panel-body
    width: 100%
    margin: 0px 20px 20px 20px
</style>
