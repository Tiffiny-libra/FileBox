<template lang="pug">
  #app
    Header
    main#main-content
      .slider-left
        Slider
      .content
        transition(name="fade-transform" mode="out-in")
          router-view
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Slider from '@/components/Slider.vue';
@Component({
  components: {
    Header,
    Slider
  },
})
export default class Home extends Vue{
  
}
</script>

<style lang="scss">
@import './styles/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}
#main-content {
  display: flex;
  .slider-left{
    padding: 10px;
    width: 190px;
    background-color: rgba(204,204,204,0.5)
  }
  .content{
    display: flex;
    flex: 1;
  }
}
</style>
