<template>
  <div class="ebook">
    <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow" ></title-bar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMeun"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <meun-bar :ifTitleAndMenuShow="ifTitleAndMenuShow" ref="meunBar"></meun-bar>
  </div>

</template>

<script>
  import TitleBar from '@/components/TitleBar'
  import MeunBar from '@/components/MeunBar'

  import Epub from "epubjs"
  const Book_url='./static/huihua.epub';
  export default {
    components:{
      TitleBar,
      MeunBar
    },
    data(){
      return {
        ifTitleAndMenuShow:false
      }
    },
    methods:{
      //电子书的解析和渲染
      showEpub(){
        //生成Ebook
        this.book=new Epub(Book_url)

        //生成Rendition
        this.rendition=this.book.renderTo('read',{
          width:window.innerWidth,
          height:window.innerHeight
        })

        //通过Rendtion.display渲染电子书
        this.rendition.display()
        console.log(this.rendition)
      },
      prevPage(){
        this.rendition.prev();
      },
      nextPage(){
        this.rendition.next();
      },
      toggleTitleAndMeun(){
        this.ifTitleAndMenuShow=!this.ifTitleAndMenuShow;
        if(!this.ifTitleAndMenuShow){
          this.$refs.meunBar.hideSetting();
        }
      }

    },
    mounted(){
      console.log("开始执行");
      this.showEpub();
    }

  }
</script>

<style lang='scss' scoped>
  @import 'assets/style/global';

  .ebook{

    .read-wrapper{
      #read{
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
      }
      .mask{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        width: 100%;
        height: 100%;
        opacity: 0.2;

        .left{
          flex: 0 0 1.5rem;
        }
        .center{
          flex: 1;
        }
        .right{
          flex: 0 0 1.5rem;
        }
      }
    }

}


</style>
