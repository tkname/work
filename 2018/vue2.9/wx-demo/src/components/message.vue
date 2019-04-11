<template lang="pug">
  
  .container 
    .content-box#scroll
      .context-height#cotentH
          .message-list.receive(v-for="item in projects" v-if="item.userId!=id")
            .time {{item.time}}
            .content
              .user-img
                img( :src="item.userImg")
              .user-info.arrow_box
                | {{item.text}} 

          .message-list.send(v-else)
            .time {{item.time}}
            .content
              .user-info.arrow_boxR
                | {{item.text}} 
              .user-img
                img( :src="item.userImg")

            
    .entry#entry
      .entry-box
        .message.fun
        .ipt-box.fun
          input(type="text" v-model="message" v-on:keyup="enter")
        .look.fun
        .more.fun
</template>

<script>

var scroll,diff,hei;

export default {
  name: 'message',
  data () {
    return {
      projects: [
        // {time:"2222",text:"1111",userId:"1"},
        // {time:"2222",text:"2222",userId:"2"}
      ],
      userId:"",
      message:"",
      id:"",
      userImg:require("../images/wx-message/user1.jpg")
    }
  },sockets: {  
        c_hi: function(e){  
          this.projects.push(e);

          //数据渲染不及时，设置延时执行
          setTimeout(function(){
            if(cotentH.offsetHeight>diff){
              scroll.scrollTop=cotentH.offsetHeight-diff;
            }
          },0)
        },
        //链接服务器时执行
        connect:function(){
          scroll=document.getElementById("scroll");
          diff=document.body.offsetHeight-document.getElementById("entry").offsetHeight;
          hei=document.getElementById("cotentH");

          var random = Math.floor(Math.random()*(5-1+1)+1);
          this.userImg=require("../images/wx-message/user"+random+".jpg")
          console.log(random);

          // socket id
          this.id=this.$socket.id;
          console.log("id:"+this.id);
          sessionStorage.setItem("userId",this.id)


          // //得到用户id
          // var userId = sessionStorage.getItem("userId");
          // if(userId){
          //    console.log(userId,222);
          //   this.userId=userId;
          // }else{
          //    console.log(222);
          //    this.$socket.emit('getUserId');
          // }

        },userId:function(e){
            console.log("userid:"+e);
            this.userId=e;
          sessionStorage.setItem("userId", e)
        }

  },methods:{
    enter:function(e){
      var that=this;

      if(e.keyCode==13){

        //用户id为空时
        if(!that.userId){
          console.log("执行了");
          that.id=sessionStorage.getItem("userId");
        }

        var d={
          "time":that.getTime(),
          "text":that.message,
          "userId":that.id,
          "userImg":that.userImg
        };        
        this.$socket.emit('hi',d);
        this.message="";
      }
    },getTime:function(){
      var date=new Date();
      var year=date.getFullYear();
      var month=date.getMonth()+1; 
      var day=date.getDate();
      var s=date.getHours();
      var m=date.getMinutes();
      m=m<10?"0"+m:m;

      return year+"年"+month+"月"+month+"日"+" "+s+":"+m;

    }
  },mounted:{

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

html, body{
    background-color: #ffffff;
}
*{
  box-sizing: border-box;
}

.container{
  overflow:hidden;
  .content-box{
    .context-height{
      padding-bottom:0.2rem;
      position: relative;
      display:block;
    }
    height:100%;
    overflow: scroll;
    // padding-bottom:0.2rem;
    background:#ebebeb;
  }
  font-size: 0.12rem;
  background: #ebebeb;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  // height:616px;

  .message-list{
    text-align:center;
    overflow: hidden;
    .time{text-align:center;background:#cecece;padding: .05rem .4rem;display:inline-block;color:#fff;border-radius:0.1rem;margin-top:.2rem;font-size:0.22rem }
    .content{
      position:relative;
      display:flex;
      justify-content:flex-start; //左右对齐方式
      align-items: flex-start; //上下对齐方式
      margin-top:.27rem;

      .user-img{
        width:.80rem;
        height:.8rem;
        margin-left:.2rem;
        border-radius:.05rem;
        overflow:hidden;
        img{
          width:100%;
        }
      }

      .user-info{
        max-width:5.13rem;
        border-radius:0.1rem;
        background:#fff;
        margin-left:.2rem;
        padding:0.2rem .2rem;
        border:1px solid #cccccc;
        position:relative;
        font-size:0.25rem;
      }

    }
  }

  .send{
    .content{
      justify-content:flex-end; //左右对齐方式
      .user-img{
        margin-right:0.2rem;
      }
      .user-info{
        background:#a0e75a;
      }
    }
  }
}

.entry{
  background:#f5f5f6;
  width:100%;
  height:1rem;
  position:fixed;
  left:0;
  bottom:0;
  border-top:1px solid #d7d7d9;
  .entry-box{
    height:100%;
    display:flex;
    align-items: center; //上下对齐方式
    flex-direction:row;
    justify-content:space-around; //左右对齐方式
    // .fun{
    //   align-items:center;
    // }
    .message,.look,.more{
      width:0.6rem;
      height:0.6rem;
      background:url("../images/wx-message/message.png") no-repeat;
      background-size:100%;
      // background:red;
    }
    .ipt-box input{
      width:4.89rem;
      height:0.72rem;
      border:1px solid #dddddd;
      border-radius:5px;
    }
    .look{
      background:url("../images/wx-message/look.png") no-repeat;
      background-size:100%;
    }
    .more{
      background:url("../images/wx-message/more.png") no-repeat;
      background-size:100%;
    }
  }
}

// 左边箭头
.arrow_box {
  position: relative;
  background: #fff;
}

.arrow_box:after, .arrow_box:before {
  right: 100%;
  top: .3rem;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow_box:after {
  border-color: rgba(136, 183, 213, 0);
  border-right-color: #fff;
  border-width: .1rem;
  // margin-top: -30px;
}

.arrow_box:before {
  border-color: rgba(194, 225, 245, 0);
  border-right-color: #ccc;
  border-width: .1rem;
  // margin-top: -36px;
}

.arrow_boxR {
  position: relative;
  background: #88b7d5;
  border: 4px solid #c2e1f5;
}

.arrow_boxR:after, .arrow_boxR:before {
  left: 100%;
  top: .3rem;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow_boxR:after {
  border-color: rgba(136, 183, 213, 0);
  border-left-color: #a0e75a;
  border-width: .1rem;
  // margin-top: -30rem;
}

.arrow_boxR:before {
  border-color: rgba(194, 225, 245, 0);
  border-left-color: #ccc;
  border-width: .1rem;
  // margin-top: -36px;
}

</style>
