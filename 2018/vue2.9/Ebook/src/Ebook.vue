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
    <meun-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"
              :deFaultFontSize="deFaultFontSize"
              :fontSizeList="fontSizeList"
              ref="meunBar"
              :themeList="themeList"
              :defaultTheme="defaultTheme"
              @setTheme="setTheme"
              :bookAvailable="bookAvailable"
              @onProgressChange="onProgressChange"
              @jumpTo="jumpTo"
              @hideTitle="hideTitle"
              :navigation="navigation"
              @setFontSize="setFontSize"></meun-bar>
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
        ifTitleAndMenuShow:false,
        fontSizeList:[
          {fontSize:12},
          {fontSize:14},
          {fontSize:16},
          {fontSize:18},
          {fontSize:20},
          {fontSize:22},
          {fontSize:24},
        ],
        deFaultFontSize:16,
        themeList:[
          {
            name:"default",
            style:{
              body:{
                'color':'#000','background':'#fff'
              }
            }
          },
          {
            name:"eye",
            style:{
              body:{
                'color':'#000','background':'#cee'
              }
            }
          },
          {
            name:"night",
            style:{
              body:{
                'color':'#fff','background':'#000'
              }
            }
          },
           {
            name:"gold",
            style:{
              body:{
                'color':'#000','background':'rgb(241,236,226)'
              }
            }
          }
        ],
        defaultTheme:0,
        //图书是否加载完成
        bookAvailable:false,
        navigation:Object
      }
    },
    methods:{
      // 根据连接跳转到指定位置
      jumpTo(href){
        this.rendition.display(href);
        this.ifTitleAndMenuShow=false;
      },
      hideTitle(){
        this.ifTitleAndMenuShow=false;
      },
      // 隐藏标题栏和菜单栏
      hideTitleAndMeun(){
        // 隐藏标题栏和菜单栏
        this.ifTitleAndMenuShow=false;
        console.log(111);
        // 隐藏菜单栏弹出的设置栏
        this.$refs.meunBar.hideSetting();
        // 隐藏目录
        this.$refs.meunBar.hideCountent();
      },
      //进度条的数值 0 - 100
      onProgressChange(progress){
        const percentage=progress/100;
        const location=percentage >0 ?this.locations.cfiFromPercentage(percentage):0;
        this.rendition.display(location);
      },
      //皮肤设置
      setTheme(index){
        this.themes.select(this.themeList[index].name);
        this.defaultTheme=index;
      },
      //皮肤设置 挂载
      registerTheme(){
        this.themeList.forEach(theme=>{
          this.themes.register(theme.name,theme.style);
        })
      },
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
        //获取theme 对象
        this.themes=this.rendition.themes;
        //设置默认字体
        this.setFontSize(this.deFaultFontSize);

        //设置皮肤
        this.registerTheme();
        this.setTheme(this.defaultTheme);

        //获取Locations对象
        //通过epubjs的钩子函数来实现
        this.book.ready.then(()=>{
          this.navigation=this.book.navigation;
          console.log(this.navigation,1);
          //生成Locations对象
          return this.book.locations.generate();
          //异步执行
        }).then(result=>{
          this.locations=this.book.locations;
          this.bookAvailable=true;
          // this.onProgressChange(100);
        })
      },
      // 上一页
      prevPage(){
        this.rendition.prev();
      },
      // 下一页
      nextPage(){
        this.rendition.next();
      },
      toggleTitleAndMeun(){
        this.ifTitleAndMenuShow=!this.ifTitleAndMenuShow;
        if(!this.ifTitleAndMenuShow){
          this.$refs.meunBar.hideSetting();
        }
      },
      //接收子组件 传入的方法
      setFontSize(fontSize){
        this.deFaultFontSize=fontSize;
        if(this.themes){
          console.log(fontSize);
          this.themes.fontSize(fontSize+'px');
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
          flex: 0 0 35%;
        }
        .center{
          flex: 1;
        }
        .right{
          flex: 0 0 35%;
        }
      }
    }

}


</style>
