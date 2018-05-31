<template>
  <div>
    <div class="search">
      <input type="text" v-model="keywords" class="search-input"
      placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keywords">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li
            class="search-item border-bottom"
            v-show="hasNoData">
        没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'HomeSearch',
  props:{
    cities:Object
  },
  data () {
    return {
      keywords:'',
      timer:null,
      list:[]
    }
  },
//  getter类似于组件中的computed作用，当我们需要根据state数据计算出新的数据的时候，借助getter提供新的数据，避免数据的冗余
  methods:{
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch:{
    keywords () {
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.keywords){
        this.list = []
        return
      }
      this.timer = setTimeout( () => {
        const result = [];
        for(let i in this.cities){
          this.cities[i].forEach((value) => {
            if(value.spell.indexOf(this.keywords) > -1 ||
                value.name.indexOf(this.keywords) > -1){
                  result.push(value)
                }
          })
        }
        this.list = result
      },100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed:{
    hasNoData () {
      return !this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding:0 .1rem
    background:$bgColor
    .search-input
      box-sizing: border-box
      width:100%
      height:.62rem
      padding:0 .1rem
      line-height:.62rem
      text-align: center
      border-radius:.06rem
      color: #666
  .search-content
    z-index:1
    overflow: hidden
    position: absolute
    top:1.58rem
    left: 0
    right:0
    bottom:0
    background: #eee
  .search-item
    line-height:.62rem
    padding-left:.2rem
    background: #fff
    color: #666
</style>
