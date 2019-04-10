<template>
  <div class="app" ref="app">

    <div class="logo">
      <div class="logo-left"></div>
      <div class="logo-right"></div>
    </div>

    <div class="content">
        <!-- 首页 -->
        <div class="kv page" v-show="pageShow==1">
          <div class="title"></div>
          <div class="car"></div>
          <div class="icon"></div>
          <div class="agreement">

            <span class="font">
              我已详细阅读并同意<span class="aget" @click="agreementFun">《用户协议》</span>
              <label>
                <input type="checkbox" id="checkbox" v-model="checked" @click="clickCheck">
                <span class="click"></span>
              </label>
              </span>
            </div>
          <div class="btn" @click="startSubmit"></div>
          <div class="desc">
            <p class="small">关注民生信用卡境外消费返现1％活动抽观影券套餐</p>
            <p class="big">数量有限，先到先得</p>
          </div>
        </div>

        <!-- 协议页面 -->
        <div class="page-agreement page" v-show="pageShow==2">
            <div class="close" @click="closeAgreement"></div>
            <div class="title">用户协议</div>
            <div class="cont">
              <!-- <div class="big">笔笔返现1%</div><br/> -->


          <br/><br/>一、总则
          <br/>1.1客户在申请注册流程中点击同意本协议之前，应当仔细阅读本协议。本协议具有合同的法律效力，特别是免除或限制责任的条款、法律使用及争议解决条款。免除或者限制责任的条款将以粗体下划线标识。
          <br/><br/>1.2当客户按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，即表示客户已充分阅读、理解并接受本协议的全部内容，成为中国民生银行股份有限公司信用卡中心（下称“民生银行”）及智能售票机广告运营公司北京万达传媒有限公司及其关联公司（下称“万达传媒”）的“用户”。阅读本协议过程中，如果客户不同意本协议或其中任何条款约定，客户应立即停止注册。
          <br/><br/>1.3客户在进行注册程序过程中点击"注册"按钮即表示客户与民生银行、万达传媒达成以下协议，完全接受本协议项下的全部条款，本协议即在客户与民生银行、万达传媒之间产生法律效力，对各方均具有法律约束力。
          <br/><br/>二、服务内容
          <br/>2.1民生银行通过万达传媒注册页面向客户展示与民生信用卡有关的活动信息。
          <br/><br/>2.2客户同意其填写的信息由万达传媒收集并传输给民生银行，用于民生银行及其委托的第三方向客户营销与民生信用卡有关的业务向客户发送与民生信用卡有关的活动信息，民生银行及其委托的第三方可在事后根据客户预留联系方式通过电话、短信、邮件等方式对客户进行上述营销活动。
          <br/><br/>三、使用规则
          <br/>3.1客户明确声明和保证：客户为具有完全民事权利能力和民事行为能力的自然人、法人，或是能够独立承担民事责任的其他组织，具备足够的法律权利或授权来签署和履行本协议。若客户是未成年人，在客户决定是否注册使用本服务前，请与监护人一起阅读本协议以确保他们明确了解本协议内容，在获得监护人同意之前，客户不得进行注册，交易，或使用本协议项下民生银行所提供的服务。
          <br/><br/>3.2 客户承诺对其上传的所有信息真实、有效、合法，如客户上传信息属于《中华人民共和国著作权法》规定的作品，包括但不限于文字、图片、音乐、电影、表演和录音录像制品和电脑程序等)均享有完整的知识产权，或者已经得到相关权利人的合法授权；如客户违反本条规定造成民生银行被第三人索赔的，客户应全额补偿民生银行一切费用(包括但不限于各种赔偿费、诉讼代理费及为此支出的其它合理费用)。
          <br/><br/>四、客户信息收集、使用及保护
          <br/>4.1客户充分理解并同意：授权民生银行、万达传媒为履行本协议之目的收集客户的信息，这些信息范围包括客户在本次活动中所填写的所有信息，民生银行、万达传媒对客户的个人信息的收集和使用将遵循相关法律的规定。
          <br/><br/>4.2客户充分理解并同意：其填写的信息由万达传媒收集并传输给民生银行，用于民生银行及其委托的第三方向客户营销与民生信用卡有关的业务或向客户发送与民生信用卡有关的活动信息，民生银行及其委托的第三方可在事后根据客户预留联系方式通过电话、短信、邮件等方式对客户进行上述营销活动。
          <br/><br/>4.3民生银行、万达传媒保证不对外公开或向第三方提供您的个人信息，但是存在下列情形之一的除外：
          <br/><br/>(1)公开或提供相关信息之前获得客户许可的；
          <br/><br/>(2)根据法律或政策的规定而公开或提供的；
          <br/><br/>(3)只有公开或提供客户的个人信息，才能提供客户需要的服务的，客户不愿接受的除外；
          <br/><br/>(4)根据国家权力机关要求公开或提供的；
          <br/><br/>(5)根据本协议其他条款约定而公开或提供的。
          <br/><br/>五、版权声明
          <br/>5.1 本活动的文字、图片、音频、视频等版权均归民生银行、万达传媒享有或与作者共同享有，未经许可不得任意转载。 
          <br/><br/>5.2 本活动特有的标识、版面设计、编排方式等版权均属民生银行享有，未经许可不得任意复制或转载。
          <br/><br/>六、责任声明
          <br/>6.1 客户理解其参与本次活动的内容及民生银行、万达传媒收集客户信息的使用目的、适用范围及由此带来的相关风险，如因客户填写信息不真实、不合法给民生银行、万达传媒或其他第三方造成损失的，客户应承担相应责任，民生银行、万达传媒有过错的除外。
          <br/><br/>6.2 本次活动无法保证网络服务一定能满足客户的要求，也不保证网络服务的及时性、安全性、准确性。
          <br/><br/>七、附则
          <br/>7.1 本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。 
          <br/><br/>7.2若客户和民生银行、万达传媒就本协议发生任何纠纷或争议，应友好协商解决；协商不成的，任意一方有权将纠纷或争议提交被告所在地法院管辖。
          <br/><br/>7.3 如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。

            </div>
        </div>

        <!-- 留资页面 -->
        <div class="page data" v-show="pageShow==3">
          <div class="title"></div>
          <div class="car"></div>
          <div class="form">
            <div class="form-group" v-for="(value,index) in formHtml" >
                <label>{{value}}</label>
                <div class="type-box" :style="value=='短信验证'?'padding-right: 2rem;':''" :class="value=='工作地址'?'after':''">

                    <select v-model="formData[formIds[index]]"  v-if="value=='工作地址'" @blur.prevent="overEvent" @focus.prevent="getEvent">
                      <option disabled value="">请选择</option>
                      <option v-for="(value,index) in siteArray" :value="value.item_name">
                        {{value.item_name}}
                      </option>
                    </select>
                    <input type="text"  v-model="formData[formIds[index]]" @blur.prevent="overEvent" @focus.prevent="getEvent"  v-else/>
                    <div class="code-btn" @click="sendCode" v-if="value=='短信验证'">{{codeDesc}}</div>
                </div>

            </div>
            <div class="btn" @click="formSubmit"></div>
          </div>

        </div>

        <!-- 结果 弹窗页面 -->
        <div class="mask" v-show="layerState">
            <div class="layer">
              <div class="close">
                <img :src="img('close')" alt="" @click="layerClose">
              </div>
              <div class="center">

                <div v-if="reqCode!=502">
                      <div class="title">
                        <img :src="img('success-title')" alt="" v-if="reqCode==200">
                        <img :src="img('success-repeat')" alt="" v-if="reqCode==201">
                      </div>
                      <div class="qrcode">
                        <img :src="'http://wandafilm.hocodo.com/service/test/qrcode.php?text='+qrcode" alt="">
                      </div>
                      <div class="code">{{qrcode}}</div>
                      <div class="desc"></div>
                </div>

                <div v-else>
                  <div class="over">
                    <img :src="img('over')" alt="">
                  </div>
                </div>

              </div>
            </div>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {data,cityJson} from '../assets/js/data.js'
import layer from 'vue-layer'

Vue.prototype.$layer = layer(Vue)

import {share,ajax,ctTime,boJJ} from '../util/main.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      pageShow: 1,
      formHtml:["姓　　名","电　　话","工作地址","短信验证"],
      layerState:false,
      reqCode:502,
      urlData:{},
      shareInfo:{
        appId: '',
        secret: '',
        url: window.location.href.split("#")[0]
      },
      shareData:{
        title:"",
        desc:'',
        imgUrl:'',
        link:''
      },
      apiUrl:'http://wandafilm.hocodo.com/apps/CMBC/api/index.php?',
      startState:true, //按钮是否可点击
      checked:true, //协议按钮
      message:"",    //错误提示
      formData:{
        name:"",
        ipone:"",
        area:"",
        code:""
      },
      qrcode:'',      //二维码 code值
      formIds:[],     //表单id name
      sendSate:true,  //发送状态
      codeDesc:'获取验证码', //
      site:{},
      siteArray:[],
      focus:0,
      appHeight:0,
      iosState:!!(navigator.userAgent).match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

    }
  },
  created(){
    let that=this;
    this.formIds=['name','ipone','area','code'];
    this.urlData=this.$route.query;


    boJJ(this,'info-首页')

    //用影院id 得到对应的省份 城市
    this.site=data.filter(function(item,index,array) {
        return (item.cinemaId==that.urlData.cinemaID);
    });
    console.log(this.site,"val",that.site[0].province);

    //得到省份的code值
    let prosCode=cityJson.filter(function(item,index,array) {
        return (item.item_name.substr(0, 2) == that.site[0].province.substr(0, 2));
    });
    console.log(prosCode,"省份值");

    //用省份获取下面的唯一城市值
    let cityCode=cityJson.filter(function(item,index,array) {
        return ((prosCode[0].item_code.substr(0, 2) && item.item_code.substr(2, 4) != '0000' && item.item_code.substr(4, 2) == '00') && item.item_name.substr(0, 2)==that.site[0].city.substr(0, 2));
    });
    console.log(cityCode,"城市值");

    //用城市值code值 查出对应的区县
    cityJson.forEach(function(item,index){
      if (cityCode[0].item_code == '110100' || cityCode[0].item_code == "120100" || cityCode[0].item_code == "310100" || cityCode[0].item_code == "500100") {
        if (item.item_code.substr(0, 3) == cityCode[0].item_code.substr(0, 3) && item.item_code.substr(4, 2) != '00') {
          that.siteArray.push({'item_code':item.item_code,'item_name':item.item_name})
        }
      }
      else {
        if ((item.item_code.substr(0, 4) == cityCode[0].item_code.substr(0, 4)) && item.item_code.substr(4, 2) != '00') {
          that.siteArray.push({'item_code':item.item_code,'item_name':item.item_name})
        }
      }
    })

    // console.log(that.siteArray,"对应的区县");

    //微信分享
    let url="http://app.hocodo.com/webapps/weixinservice/weixinservice.php?callback=?";
    let sendData={"param": JSON.stringify(this.shareInfo)};

    console.log(this.urlData,"url")

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
          //分享执行
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

    // 判断用户是否中国奖
    ajax(this.apiUrl+'con=Award&mod=check',param,function(res){
        res=res.data;
        if(res.code==200){
          // 未参与

        }else if(res.code==201){
          boJJ(that,'info-用户中过奖')
          //中过奖
          that.pageShow=1;
          that.layerState=true;
          that.reqCode=201;
          that.qrcode=res.data.code;
        }else if(res.code==502){
          boJJ(that,'info-用户未中过奖')
          //用户没用中将
          that.pageShow=1;
          that.layerState=true;
          that.reqCode=502;
        }else{
          that.startState=false;
          that.$layer.msg(res.message);
        }
    },function(error){
        console.log(error);
    });


  },
  methods:{
    //图片调用
    img(e){
      return  require('../assets/images/'+e+'.png')
    },
    //协议勾选 按钮
    clickCheck(){
      boJJ(this,'Event-协议勾选按钮')
    },
    //kv页面提交
    startSubmit(){
      boJJ(this,'Event-参与活动按钮')

      if(!this.startState){
          this.$layer.msg(this.message);
          return false;
      }

      if(!this.checked){
          this.$layer.msg('请先勾选用户协议');
          return false;
      }
      this.pageShow=3;
    },
    //查看协议
    agreementFun(){
      this.pageShow=2;
      boJJ(this,'Event-协议查看按钮')
    },
    //关闭协议
    closeAgreement(){
      this.pageShow=1;
      boJJ(this,'Event-关闭协议按钮')
    },
    //短信发送
    sendCode(){
      boJJ(this,'Event-获取验证码按钮')
      //短信发送接口
      let that=this;
      let param={
        phone:this.formData.ipone
      }

      let iponeVlidate=/^[1][3,4,5,7,8,9][0-9]{9}$/;
      if(!this.formData.ipone.trim() || !iponeVlidate.test(this.formData.ipone)){
        this.$layer.msg('手机号格式错误');
        return false;
      }

      if(this.sendSate){
        this.sendSate=false;
        //短信请求
        ajax('http://wandafilm.hocodo.com/apps/CMBC/api/message.php',param,function(res){
            res=res.data;
            if(res.code==200){
              that.$layer.msg(res.message);
              ctTime(that,60);
            }else{
              that.$layer.msg(res.message);
              that.sendSate=true;
            }

        },function(error){
            console.log(error);
        });
      }

    },
    //表单提交
    formSubmit(){
      boJJ(this,'Event-表单提交按钮')
      let that=this;
      console.log(this.formData);

      if(!this.formData.name.trim() || this.formData.name.trim().length>32){
        console.log(3333);
        this.$layer.msg('请填写姓名');
        return false;
      }
      //手机号码 验证规则
      let iponeVlidate=/^[1][3,4,5,7,8,9][0-9]{9}$/;
      if(!this.formData.ipone.trim() || !iponeVlidate.test(this.formData.ipone)){
        this.$layer.msg('手机号格式错误');
        return false;
      }
      if(!this.formData.area.trim()){
        this.$layer.msg('请选择区域');
        return false;
      }

      if(!this.formData.code.trim()){
        this.$layer.msg('请输入验证码');
        return false;
      }
      let param={
        phone:this.formData.ipone,
        name:this.formData.name,
        area:this.formData.area,
        code:this.formData.code,
        smscode:this.urlData.smscode,
        stamp:this.urlData.stamp,
        result:this.urlData.result,
        cinemaid:this.urlData.cinemaID,
        openid:this.urlData.openid

      }
      //验证通过  接口抽奖
      ajax(this.apiUrl+'con=Award&mod=info',param,function(res){
          res=res.data;
          // console.log(res,'中奖');
          if(res.code==200){
            boJJ(that,'info-中奖页面')
            // 中奖
            that.pageShow=3;
            that.layerState=true;
            that.reqCode=200;
            that.qrcode=res.data.code;
          }else if(res.code==201){
            boJJ(that,'info-未中过奖页面')
            //中过奖
            that.pageShow=3;
            that.layerState=true;
            that.qrcode=res.data.code;
            that.reqCode=201;
          }else if(res.code==502){
            boJJ(that,'info-未中奖页面')
            //未中奖
            that.pageShow=3;
            that.layerState=true;
            that.reqCode=502;
          }else{
            //错误信息
            that.startState=false;
            that.$layer.msg(res.message);
          }
      },function(error){
          console.log(error);
      });

    },
    //弹窗关闭
    layerClose(){
      boJJ(this,'info-中奖弹窗关闭')
      this.layerState=false;
    },
    //失去焦点
    overEvent(){
      //  document.documentElement.scrollTop=0;
       this.focus=0;
       this.focu();
    },
    //得到焦点
    getEvent(){
      let that=this;
      this.focus=1;
      this.focu();
      /*** 解决安卓 弹出  背景被裁剪问题 start***/
      this.appHeight=this.$refs.app.clientHeight;
      this.$refs.app.style.height=this.appHeight+"px";
      /*** 解决安卓 弹出  背景被裁剪问题 end***/

      if(this.iosState){
        /*解决  弹出form表单  被遮挡问题 start*/
        that.$refs.app.style.marginTop="-1rem";
        /*解决  弹出form表单  被遮挡问题 end*/
      }

    },
    focu(){
      let that=this;
      setTimeout(function(){
        if(that.focus==0){
          if(that.iosState){
            that.$refs.app.style.marginTop="0";
          }
          window.scrollTo(0,0);
        }
      },0)

    }

  },
  mounted:()=>{

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/style/global.scss';

  .app{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: yellow;
    z-index: 999;
    transform: translate3d(0,0,0);
    @include bgCover('bg.png');
    background-repeat: no-repeat;
    .logo{
      position: absolute;
      height: 0.24*1.5+rem;
      left: 0.24rem;
      right: 0.24rem;
      top:0.3rem;
      .logo-left{
        width: 2.02*1.5+rem;
        height: 0.24*1.5+rem;
        position: absolute;
        left: 0;
        top: 0;
        @include bgAuto('logo.png');
        background-repeat: no-repeat;
      }
      .logo-right{
        width: 1.78*1.5+rem;
        height: 0.15*1.4+rem;
        position: absolute;
        @include bgAuto('logo-right.png');
        background-repeat: no-repeat;
        right: 0;
      }
    }
    .content{
      // width: 100%;
      // height: 100%;
      .page{
        width: 100%;
        height: 82.5%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-52%);
      }

      .kv{
        .title{
          position: absolute;
          width: 7.36rem;
          height: 3.55rem;
          top: -1rem;
          left: 0;
          @include bgCover('kv-title.png');
        }
        .car{
          position: absolute;
          width: 3.86rem;
          height: 2.89rem;
          top: 2.12rem;
          @include bgCover('car.png');
          @include positionCenter('');
        }
        .icon{
          position: absolute;
          width: 5.40rem;
          height: 1.28rem;
          top: 5.42rem;
          @include bgCover('kv-icon.png');
          @include positionCenter('');
        }
        .agreement{
          position: absolute;
          width: 100%;
          // height: 1.28rem;
          top: 7.58rem;
          padding-left: .35rem;
          font-size: 0.28rem;
          color: #fff;
          @include positionCenter('');
          span.font{
            padding-left: .4rem;
            position: relative;
            .aget{
              text-decoration: underline;
            }
          label{
            position: absolute;
            top: 15%;
            left: 0;
            input{
              opacity: 0;
              position: absolute;
              left: 0;
              top: 0;
              &:checked + span::before {
                content: "";
                width: .32rem;
                height: .31rem;
                top: -28%;
                display: block;
                position: absolute;
                @include bgAuto('click.png');
              }
            }
            span.click{
              position: absolute;
              left: 0;
              top: 0;
              display: block;
              width: 0.26rem;
              height: 0.26rem;
              @include bgAuto('kv-checkbox.png');
            }
          }


          }
        }
        .btn{
          position: absolute;
          width: 3.20rem;
          height: 0.77rem;
          left: 0;
          top:8.35rem;
          @include bgCover('start-btn.png');
          @include positionCenter('');
        }
        .desc{

          .small{
            font-size: 0.22rem;
          }
          position: absolute;
          top:9.5rem;
          width: 100%;
          text-align: center;
          @include positionCenter('');
          font-size: .3rem;
          color: #fff;
        }
      }

      .page-agreement{
        .title{
          font-size: 0.4rem;
          color: #fff;
        }
        .cont{
          margin-top: 0.1rem;
          padding:0 0.45rem 0 0.45rem;
          font-size: .2rem;
          color: #fff;
          text-align: left;
          line-height: 0.4rem;
          height: 95%;
          overflow: auto;
          -webkit-overflow-scrolling:touch;
          position: relative;
          .big{
            font-size: .3rem;

          }
        }
        .close{
            position: absolute;
            width: .31rem;
            height: .31rem;
            @include bgAuto('close.png');
            right: 0.6rem;
            top: -.0rem;
        }
      }

      .data{
        .title{
          position: absolute;
          width: 7.36rem;
          height: 3.55rem;
          top: -1rem;
          left: 0;
          @include bgAuto('kv-title.png');
        }
        .car{
          position: absolute;
          width: 3.86rem;
          height: 2.59rem;
          top: 1.7rem;
          @include bgCover('car.png');
          @include positionCenter('');
        }
        .form{
          position: absolute;
          width: 5.74rem;
          top: 4.91rem;
          font-size: .34rem;
          color: #fff;
          @include positionCenter('');
          .form-group{
            width: 100%;
            padding-left: 1.6rem;
            position: relative;
            height: 0.6rem;
            margin-bottom: .3rem;
            label{
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .type-box{
              width: 100%;
              height: 100%;
              overflow: hidden;
              position: relative;
              &.after::after{
                content: "";
                width: 0.3rem;
                height: 0.3rem;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 2%;
                @include bgAuto('select.png');
              }
              input,select{
                width: 100%;
                height: 100%;
                background: #fff;
                -webkit-appearance: none;
                border: none;
                padding-left: .1rem;
                font-size: .28rem;
                border-radius: 0.1rem;
                position: relative;
              }

              .code-btn{
                background: #e60012;
                width: 1.78rem;
                height: 0.6rem;
                position: absolute;
                top: 0;
                right: 0;
                font-size: .30rem;
                text-align: center;
                line-height: .6rem;
                border-radius: .06rem;
              }

            }

          }
          .btn{
            margin-top: .9rem;
            @include bgAuto('data-submit.png');
            width: 5.7rem;
            height: .75rem;
          }
        }
      }

      .mask{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: .6);
        z-index: 99;
        .layer{
          width: 5.74rem;
          height: 6.85rem;
          border-radius: 0.1rem;
          background: #fff;
          position: absolute;
          overflow: hidden;
          @include positionCenter('center');
          .close{
            width: 1.36rem;
            height: 1.36rem;
            background: #ee9a23;
            border-radius: 50%;
            position: absolute;
            right: -0.69rem;
            top:-0.69rem;
            img{
              width: 0.3rem;
              position: absolute;
              left: 0.25rem;
              bottom:0.24rem;
            }
          }
          .center{
            position: absolute;
            @include positionCenter('center');

            .title{
              width: 2.74rem;
              height: 1.03rem;
              // @include bgAuto('success-title.png');
              margin: 0 auto;
              img{
                width: 100%;
              }
            }
            .qrcode{
                width: 2.46rem;
                height: 2.46rem;
                margin: .3rem auto 0rem auto;

              img{
                width: 100%;
                height: 100%;
              }
            }
            .code{
              font-size: .3rem;
              margin-bottom: 0.1rem;
            }
            .desc{
              width: 3.71rem;
              height: 1.07rem;
              @include bgAuto('success-desc.png');
              margin: 0 auto;
            }

            .over{
              width: 3.48rem;
              img{
                width: 100%;
              }
            }
          }

        }
      }

    }
  }
</style>
