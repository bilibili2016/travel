<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities"
    @change="handleLetterChange"></city-alphabet>
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
      cities:{},
      letter:''
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
      res = res.data;
      if(res.ret && res.data){
        const result = res.data;
        this.hotCities = result.hotCities
        this.cities = result.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
