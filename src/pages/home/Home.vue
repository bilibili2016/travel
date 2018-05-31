<template>
  <div>
    <home-header></home-header>
    <home-swiper :lists="swiperList"></home-swiper>
    <home-icons :lists="iconList"></home-icons>
    <home-recommend :lists="recommendList"></home-recommend>
    <home-weekend :lists="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './component/Header.vue'
import HomeSwiper from './component/Swiper.vue'
import HomeIcons from './component/Icons.vue'
import HomeRecommend from './component/Recommend.vue'
import HomeWeekend from './component/Weekend.vue'
import  axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods:{
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      res = res.data;
      if(res.ret && res.data){
      const result = res.data
        this.swiperList = result.swiperList
        this.iconList = result.iconList
        this.recommendList = result.recommendList
        this.weekendList = result.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
