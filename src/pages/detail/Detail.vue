<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import detailBanner from './component/Banner.vue'
import detailHeader from './component/Header.vue'
  export default {
    name: 'Detail',
    components:{
      detailBanner,
      detailHeader
    }
  }
</script>

<style lang="stylus" scoped>
.content
  height:50rem
</style>
