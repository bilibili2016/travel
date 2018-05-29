<template>
  <div class="icons">
    <swiper :options="swiperOption">
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

  },
  data () {
    return {
      swiperOption: {
        loop:true
//        autoplay: false
      },
      iconList:[
        {
          id:'001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc:'景点门票'
        },
        {
          id:'002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc:'必游榜单'
        },
        {
          id:'003',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc:'踏青赏花'
        },
        {
          id:'004',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc:'一日游'
        },
        {
          id:'005',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc:'动植物园'
        },
        {
          id:'006',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc:'故宫'
        },
        {
          id:'007',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          desc:'古北水镇'
        },
        {
          id:'008',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
          desc:'Q+精选'
        },
        {
          id:'009',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          desc:'演出'
        },
        {
          id:'010',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc:'自然风光'
        }

      ]
    }
  },
  computed:{
    pages () {
      const pages = [];
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
