<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
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
  methods:{
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
