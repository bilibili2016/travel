<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        src="http://img1.qunarzz.com/sight/p0/201405/23/0265195fc4b7913a758674357c3cc8f6.jpg_600x330_8b674516.jpg"
        alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe796;</span>
          <span>100</span>
        </div>
      </div>
    </div>
    <common-gallery
          :imgs="imgs"
          v-show="showBanner"
          @close="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import commonGallery from 'common/gallery/Gallery'
  export default {
    name: 'detailBanner',
    data () {
      return {
        showBanner:false,
        imgs:[
          'http://img1.qunarzz.com/sight/p0/201405/23/0265195fc4b7913a758674357c3cc8f6.jpg_600x330_8b674516.jpg',
          'http://img1.qunarzz.com/sight/p0/1612/4e/4ea64b1974f97db9a3.water.jpg_r_800x800_64007950.jpg'
        ]
      }
    },
    components:{
      commonGallery
    },
    methods:{
      handleBannerClick () {
        this.showBanner = true;
      },
      handleGalleryClose () {
        this.showBanner = false;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height:0
    padding-bottom:55%
    .banner-img
      width:100%
    .banner-info
      display: flex
      position: absolute
      left:0
      right:0
      bottom:0
      line-height:.6rem
      color: #fff
      background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-tittle
        flex:1
        font-size:.32rem
        padding:0 .2rem
      .banner-number
        float:right
        height:.32rem
        line-height:.32rem
        margin-top:.14rem
        padding:0 .4rem
        border-radius:.2rem
        background:rgba(0,0,0,.8)
        font-size:.24rem
        .banner-icon
          font-size:.24rem
</style>
