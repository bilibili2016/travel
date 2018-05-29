<template>
  <div class="recommend">
    <div class="title">
      <span>周末去哪儿</span>
    </div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"  alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList:[
        {
          id:'001',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title:'北京欢乐谷',
          desc:'朝阳区'
        },
        {
          id:'002',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
          title:'世界花卉大观园',
          desc:'丰台区'
        },
        {
          id:'003',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title:'北京野生动物园',
          desc:'大兴区'
        },
        {
          id:'004',
          imgUrl:'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title:'北京海洋馆',
          desc:'西城区'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height:.8rem
    background:#eee
    text-indent:.2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width:100%
  .item-info
    padding:.1rem
    .item-title
      line-height:.54rem
      font-size:.32rem
      ellipsis()
    .item-desc
      line-height:.4rem
      color:#ccc
      ellipsis()
</style>
