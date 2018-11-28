<template>
    <div class="meun-up">
      <transition name="slide-up">
        <div class="meun-wrapper" v-show="ifTitleAndMenuShow" :class="{'hide-box-shadow':ifSettingShow || !ifTitleAndMenuShow}">
          <div class="icon-wrapper">
            <span class="icon-caidan iconfont"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-tiaoshi iconfont"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-liangdu iconfont"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-zitidaxiaoim iconfont" @click="showSetting"></span>
          </div>
        </div>
      </transition>
      <transition name="slide-up">
        <div class="setting-wrapper" v-show="ifSettingShow">
          <div class="setting-font-size">

          </div>
        </div>
      </transition>
    </div>

</template>

<script>
  export default {
    props:{
      ifTitleAndMenuShow:{
        type:Boolean,
        default:false
      }
    },
    data(){
     return {
       ifSettingShow:false,
     }
    },
    methods:{
      showSetting(){
        this.ifSettingShow=true;
      },
      hideSetting(){
        this.ifSettingShow=false;
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../assets/style/global';
  .meun-up{
    .meun-wrapper{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.96rem;
      z-index: 101;
      display: flex;
      background: #fff;
      box-shadow: 0 -0.16rem 0.16rem rgba(0,0,0,0.2);
      .icon-wrapper{
        flex: 1;
        @include center();
      }
      &.hide-box-shadow{
        box-shadow: none;
      }
    }
    .setting-wrapper{
      position: absolute;
      left: 0;
      bottom:0.96rem;
      height:1.2rem;
      width: 100%;
      background: white;
      box-shadow: 0 -0.16rem 0.16rem rgba(0,0,0,0.2);
      .setting-font-size{

      }
    }
  }

</style>
