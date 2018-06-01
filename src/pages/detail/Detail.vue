<template>
  <div>
    <detail-banner
        :bannerImg="bannerImg"
        :sightName="sightName"
        :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import detailBanner from './component/Banner.vue'
import detailHeader from './component/Header.vue'
import detailList from './component/List.vue'
import axios from 'axios'
  export default {
    name: 'Detail',
    components:{
      detailBanner,
      detailHeader,
      detailList
    },
    data () {
      return {
        categoryList:[],
        gallaryImgs:[],
        bannerImg:'',
        sightName:''
      }
    },
    methods:{
      getDetailInfo () {
        axios.get('/api/detail.json',{
          params:{
            id:this.$route.params.id
          }
        }).then(this.getDetailInfoSuccess)
      },
      getDetailInfoSuccess (res) {
        console.log(res);
        res = res.data;
        if(res.ret && res){
          let result = res.data
          this.sightName = result.sightName
          this.bannerImg = result.bannerImg
          this.gallaryImgs = result.gallaryImgs
          this.categoryList = result.categoryList
        }

      }
    },
    mounted () {
      this.getDetailInfo()
    }
  }
</script>

<style lang="stylus" scoped>
.content
  height:50rem
</style>
