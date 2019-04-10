<template>
  <div class="warpper">
    <div class="index" v-if="pageIndex==1">
      <div class="cont">
        <div class="title"></div>
        <div class="product"></div>
        <div class="btn" @click="maskShow"></div>
      </div>
    </div>
    <div class="mask" v-show="maskShowState" @click="maskHide">
        <div class="share-allow" @click="stopHide">

        </div>
    </div>

    <div class="result" v-if="pageIndex==2">
      <div class="cont" :style="htmlSuccess?'':'height:60%;'">
        <!-- 中奖页面显示 -->
        <div v-if="htmlSuccess">
          <div class="desc-box">
            <div class="title">
              <img :src="img('success.png')" alt="" v-if="prize_state">
              <img :src="img('repeat-title.png')" alt="" v-if="!prize_state">
            </div>
            <div class="desc">
              <img :src="img('success-desc.png')" alt="">
            </div>
          </div>
          <div class="product">
              <img :src="'http://wandafilm.hocodo.com/service/test/qrcode.php?text='+qrcode" alt="">
              <div class="text">{{qrcode}}</div>
          </div>
        </div>

        <!-- 未中奖页面显示 -->
        <div v-else>
          <div class="over">
            <img :src="img('over.png')" alt="">
          </div>
        </div>

        <div class="prize"></div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
    }
  },
  props:{
    pageIndex:Number,
    qrcode:Number,
    htmlSuccess:Boolean,
    prize_state:Boolean,
      maskShowState:false

  },
  methods:{
    maskShow(){
      this.maskShowState=true;
    },
    img(e){
        return  require('../assets/images/'+ e)
    },
    maskHide(e){
      this.maskShowState=false;
    },
    stopHide(e){
      e.stopPropagation();
    }

  },
  mounted:()=>{
    console.log("加载完成");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '../assets/style/global.scss';
  .warpper{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    @include bgCover("bg.png");
    .index{
      position: absolute;
      width: 100%;
      height: 100%;
      .cont{
        position: absolute;
        height: 70%;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

      }
      .title{
        width: 5.24rem;
        height: 2.09rem;
        @include bgCover("title.png");
        top: 0rem;
        @include positionCenter("");
        position: absolute;
      }
      .product{
        position: absolute;
        width: 7.38rem;
        height: 4.53rem;
        top: 50%;
        @include bgAuto("product.png");
        @include positionCenter("center");
        transform: translate(-50%,-50%);
      }
      .btn{
        position: absolute;
        width: 3.76rem;
        height: 1.25rem;
        @include bgAuto("btn.png");
        bottom: 0rem;
        @include positionCenter("");
      }
    }

    .mask{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba($color: #000000, $alpha: .8);
      z-index: 2;
      .share-allow{
        position: absolute;
        top: 0rem;
        @include positionCenter("");
        width: 6.85rem;
        height: 6.34rem;
        @include bgCover("arrow-top.png");
      }
    }

    .result{
      position: absolute;
      width: 100%;
      height: 100%;
      .cont{
        position: absolute;
        height: 83%;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-44%);
        .desc-box{
          width: 5.09rem;
          margin: 0 auto;
          top: 0;
          img{
            width: 100%;
          }
        }
        .product{
          width: 2.68rem;
          height: 2.68rem;
          @include bgAuto("product.png");
          margin: 0.2rem auto .5rem auto;
          position: relative;
          img{
            width: 100%;
          }
          .text{
            font-size: 0.25rem;
            letter-spacing: 0.05rem;
            position: absolute;
            bottom: -.35rem;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .over{
          width: 5.02rem;
          margin: 0 auto;
          img{
            width: 100%;
          }
        }
        .prize{
          width: 6.25rem;
          height: 3.80rem;
          @include bgAuto("product.png");
          margin: 0 auto;
        }
      }
    }

  }
</style>
