<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon"
             v-for="item in page"
             :key="item.id">
          <div class="icon-img">
            <img class="icon-img-con" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>

    </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props:{
    lists:Array
  },
  data () {
    return {
      swiperOption: {
        loop:true
//        autoplay: false
      }
    }
  },
  computed:{
    pages () {
      const pages = [];
      this.lists.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
        pages[page] = []
      }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.lists.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top:.2rem
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        right: 0
        left: 0
        bottom: .54rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-con
          display: block
          height: 100%
          margin: 0 auto
      .icon-desc
        position: absolute
        right: 0
        left: 0
        bottom: 0
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
