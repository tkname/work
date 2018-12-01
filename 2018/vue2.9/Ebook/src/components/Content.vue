<template>
  <transition name="slide-right">
    <div class="content">
      <div class="content-wrapper" v-if="bookAvailable">
        <div class="content-item" v-for="(item,index) in navigation.toc" :key="index" @click="jumpTo(item)">
          <span class="text">{{item.label}}</span>
        </div>
      </div>
      <div class="empty" v-else>加载中...</div>
    </div>
  </transition>
</template>

<script>
  export default {
    props:{
      ifShowContent:Boolean,
      navigation:{},
      bookAvailable:Boolean
    }
    ,
    methods:{
      jumpTo(target){
        this.$emit('jumpTo',target.href);
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../assets/style/global';
  .content{
    position: absolute;
    z-index: 102;
    width: 80%;
    height: 100%;
    position: absolute;
    // overflow: scroll;
    background: #fff;
    left: 0;
    top: 0;
    font-size: 0.3rem;
    color: #000;
    .content-wrapper{
      .content-item{
        text-align: left;
        padding:0.4rem;
        border: 1px solid #eee;
      }
    }
    .empty{
      width: 100%;
      height: 100%;
      position: absolute;
      left:0;
      top:0;
      display: flex;
      @include center();
    }
  }
</style>
