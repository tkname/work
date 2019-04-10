<template>
  <div id="app">
    <div class="logo">
    </div>
    <router-view :pageIndex='this.pageIndex' :qrcode='this.qrcode'  :htmlSuccess='htmlSuccess' :prize_state='prize_state' :maskShowState='maskShowState'/>
  </div>
</template>

<script>
import Vue from 'vue'
// import wx from 'weixin-js-sdk'
import {share,ajax} from './util/public/main.js'
import eruda from 'eruda'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue)

// // 移动端调试工具
// let el = document.createElement('div');
// document.body.appendChild(el);
// eruda.init({
//     container: el,
//     tool: ['console', 'elements'],
//     useShadowDom: true
// });

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?581bf4e8ba080d61671d0e28857215fb";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

export default {
  name: 'App',
  data(){
    return {
      shareInfo:{
        appId: '',
        secret: '',
        url: window.location.href.split("#")[0]
      },
      shareData:{
        title:"欢迎关注我们广州轻工集团",
        desc:'广货2.0革新升级行动，更多惊喜等你来',
        imgUrl:'http://wandafilm.hocodo.com/apps/gzqg/share.png',
        link:'http://wandafilm.hocodo.com/apps/gzqg/share.html'
      },
      pageIndex:1,
      apiUrl:'http://wandafilm.hocodo.com/apps/gzqg/api/index.php?',
      qrcode:111,
      htmlSuccess:true,
      prize_state:true,
      maskShowState:false
    }
  },
  methods:{
  },
  created(){

    //微信分享
    let that=this;
    let url="http://app.hocodo.com/webapps/weixinservice/weixinservice.php?callback=?";
    let sendData={"param": JSON.stringify(this.shareInfo)};
    this.urlData=this.$route.query;


    let param_user={
      openid:this.urlData.openid,
      smscode:this.urlData.smscode,
      stamp:this.urlData.stamp,
      result:this.urlData.result,
      cinemaid:this.urlData.cinemaID
    }

    this.$jsonp(url,sendData).then(data => {
      　// 返回数据 json， 返回的数据就是json格式
        share(data,that,function(type){

          //判断用户是否中将
          ajax(that.apiUrl+'con=Award&mod=info',param_user,function(res){
              res=res.data;
              if(res.code==200){
                // 未参与
                that.pageIndex=2;
                that.qrcode=res.data.code;
                that.htmlSuccess=true;
              }else if(res.code==502){
                //用户没用中将
                that.pageIndex=2;
                that.htmlSuccess=false;
              }else{
                that.$layer.msg(res.message);
              }
              that.maskShowState=false;
          },function(error){

          })

        });
    }).catch(err => {
        console.log(err)
    })


    let param={
      openid:this.urlData.openid,
      smscode:this.urlData.smscode,
      stamp:this.urlData.stamp,
      result:this.urlData.result
    };


    // layer.msg('111')
    //判断用户是否中国奖
    ajax(this.apiUrl+'con=Award&mod=check',param,function(res){
        res=res.data;
        if(res.code==200){
          // 未参与
        }else if(res.code==201){
          //中过奖
          that.pageIndex=2;
          that.qrcode=res.data.code;
          that.prize_state=false;
        }else if(res.code==502){
          //用户没用中将
          that.pageIndex=2;
          that.htmlSuccess=false;

        }else{
          that.$layer.msg(res.message);
        }
    },function(error){
        console.log(error);
    });


  },
  mounted(){
    console.log(this.$route.query);

  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.logo{
  width: 2.42rem;
  height: 0.58rem;
  position: absolute;
  background: url(./assets/images/logo.png);
  background-size:100%;
  left: 0.5rem;
  top: 0.3rem;
}
.input{
  position: absolute;
  top: 0;
  left: 0;
  background: red;
  z-index: 99;
  color: #000;
}
</style>
