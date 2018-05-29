<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[
      {id:'001',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_640x170_c1e8baeb.jpg'},
      {id:'002',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/5c/969bfa7af00a2702.jpg_640x170_ec465291.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 26.33%
    background: #eee
    .swiper-img
      width: 100%
      height:100%
</style>
