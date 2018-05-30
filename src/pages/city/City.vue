<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hot="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './component/Header.vue'
import CitySearch from './component/Search.vue'
import CityList from './component/List.vue'
import CityAlphabet from './component/Alphabet.vue'
import axios from 'axios'
export default {
  name:'City',
  data () {
    return {
      hotCities:[],
      cities:{}
    }
  },
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted () {
    this.getCityInfo()
  },
  methods:{
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess(res){
      console.log(res);
      res = res.data;
      if(res.ret && res.data){
        const result = res.data;
        this.hotCities = result.hotCities
        this.cities = result.cities
      }
    }
  }
}
</script>

<style lang="stylus" scoped>


</style>
