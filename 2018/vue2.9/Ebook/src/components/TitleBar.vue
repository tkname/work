<template>
    <transition name="slide-down">
      <div class="title-wrapper" v-show="ifTitleAndMenuShow">
          <div class="left">
            <span class="icon-fanhui iconfont"></span>
          </div>
          <div class="right">
            <div class="icon-wrapper ">
              <span class="icon-gouwuche iconfont"></span>
            </div>
            <div class="icon-wrapper">
              <span class="icon-wode iconfont"></span>
            </div>
            <div class="icon-wrapper">
              <span class="icon-gengduo iconfont"></span>
            </div>
          </div>
      </div>
    </transition>
</template>

<script>
  export default {
    props:{
      ifTitleAndMenuShow:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../assets/style/global';
  .title-wrapper{
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.96rem;
    z-index: 101;
    background: #fff;
    box-shadow: 0 0.16rem 0.16rem rgba(0,0,0,0.2);
    .left{
      flex:0 0 1.2rem;
      @include center();
    }
    .right{
      flex:1;
      display: flex;
      justify-content: flex-end;//最后
      .icon-wrapper{
        flex: 0 0 0.8rem;
        @include center();
      }
    }
  }
</style>
