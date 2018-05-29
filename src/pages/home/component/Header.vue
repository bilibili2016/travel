<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe6a5;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe61a;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <span>城市</span>
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="less">
  @import "../../../assets/styles/variables.less";
  .header {
    display: flex;
    line-height: .86rem;
    background: #00bcd4;
    color: #fff;
    .header-left {
      width: .64rem;
      float: left;
      .back-icon {
        text-align: center;
        font-size:.4rem
      }
    }
    .header-input {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: .2rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
    }
    .header-right {
      /*min-width: 1.04rem;*/
      width: 1.24rem;
      float: right;
      text-align: center;
      .arrow-icon{
        font-size:.24rem;
      }
    }
  }

</style>
