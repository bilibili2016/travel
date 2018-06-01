<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        :src="bannerImg"
        alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe796;</span>
          <span>100</span>
        </div>
      </div>
    </div>
    <common-gallery
          :gallaryImgs="gallaryImgs"
          v-show="showBanner"
          @close="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import commonGallery from 'common/gallery/Gallery'
  export default {
    name: 'detailBanner',
    props:{
      bannerImg:String,
      sightName:String,
      gallaryImgs:Array
    },
    data () {
      return {
        showBanner:false
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
