<template lang="pug">
  .slider
    ul.menu-wrapper(@click="go")
      li.menu-item(v-for="m in menulist" :value="m.menuPath" :class="{'isActive': activeMenu === m.menuPath}") {{m.menuName}}
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      menulist:[
        { menuName:'全部文件',menuPath:'home'},
        { menuName:'图片',menuPath:'picture'},
        { menuName:'文档',menuPath:'document'},
        { menuName:'视频',menuPath:'video'}
      ],
      activeMenu: 'home'
    }
  },
  methods:{
    go(ev){
      this.activeMenu = ev.target.attributes.value.value || ''
      this.$router.push({name: this.activeMenu})
    }
  }
})
</script>
<style lang="sass" scoped>
.slider
  .menu-wrapper
    list-style: none
    display: flex
    flex-direction: column
    .menu-item
      padding-top: 10px
      line-height: 40px
      display: inline-flex
      justify-content: center
      align-items: center
      letter-spacing: 5px
      cursor: pointer
      &.isActive
        background-color: rgba(0, 0, 0, .05)
        color: #09AAFF
</style>


