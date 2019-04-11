<template>
  
  <div class="index">
	
	<div class="container">
		<div class="header">
			<div class="web-title">{{appInfo.webTitle}}</div>
			<div class="button-switch">{{appInfo.buttonSwitch}}</div>
		</div>
		<div class="mian">

			<div class="input-box-list">
				<div class="icon-box">{{appInfo.nameText}}：</div>
				<div class="input" >
					<input type="text" v-model="name" :placeholder="appInfo.inputNameInfo" >
				</div>
			</div>

      <div class="input-box-list">
        <div class="icon-box">{{appInfo.wordText}}：</div>
        <div class="input" >
          <input type="text" :placeholder="appInfo.inputNameInfo" v-model="work" v-on:keyup="enter">
        </div>
      </div>

		  <!-- 任务详情 -->
      <div class="work-view">
         <div class="date">2017-9-6</div>
         <div class="work-list">
           <ul>
             <li v-for="(item,index) in workList">
                 <div class="text">{{item.text}}</div class="text">
                 <div class="progress"><input type="range" name="progress" v-model="item.Progress"> <span>{{item.Progress}}%</span> </div>
                 <div class="delButton" v-on:click="del(index)"><button>{{appInfo.delText}}</button></div>
             </li>
           </ul>
         </div>
      </div>
    
      <div class="btn-sub btn-big" v-on:click="sub">{{appInfo.subText}}</div>
      <div class="btn-log btn-big" v-on:click="url">{{appInfo.logText}}</div>
    
    </div>
	</div>

  </div>

</template>

<script>

import {test,hellow} from './js/public.js'


export default {
  name: 'index',
  data () {
    return {
    	appInfo:{
    		  webTitle:"TODOLIST",
      		buttonSwitch:"规划明天",
      		inputNameInfo:"请填写你的名字",
      		inputWord:"今天想做些什么呢?",
          nameText:"姓名",
          wordText:"工作安排",
          subText:"提交",
          logText:"记录查看",
          delText:"删除"
      },
      name:"",
      work:"",
      getUrl:"http://minisite.hocodo.com:3001/save",
      workList:[
      ]
    }
  }
  ,methods:{
    sub(e){

        var date=new Date();
        var time=date.getFullYear()+"-"+(date.getMonth()*1+1)+"-"+date.getDate();
        var that=this;
        that.$http({      
          //调用接口

          method:'POST',

          // params:,

          url:this.getUrl, //this指data

          body:{name:that.name,time:time,todolist:that.workList},
          emulateJSON:"application/x-www-form-urlencoded"

        }).then(function(response){ //接口返回数据

          // console.log(response.data.data);
          this.uesrList=response.data.data;             

        },function(error){

        })    


    },
    enter(e){
      if(e.keyCode==13){
        let work=this.work;
        this.workList.push({"text":work,"Progress":"0"});
        this.work="";
        console.log(this.workList);
      }
    },
    del(e){
      //删除数组中的值
      this.workList.splice(e,1)
    },
    url(){
      //路由跳转
      this.$router.push({ path: '/total' })
    }
  }
  ,beforeCreate(){
  	//组建实例刚刚被创建，组件属性计算之前，如data属性等
  	console.log("组建实例刚刚被创建，还未生成data......");
  }
  ,created(){
  	//组件实例创建完成，属性已绑定，但DOM还未未生成，$el属性还不存在
  	console.log("组件实例创建完成,DOM还未生成......");
  
  }
  ,beforeMount(){
  	console.log("模板编译/挂载之前....");
  
  }
  ,mounted(){
  	console.log("模板编译/挂载之后....");

        test();
        hellow();
    

  }
  ,beforeUpdate(){
  	console.log("组件更新之前....");
  }
  ,updated(){
  	console.log("组件更新之后....");
  }
  ,activated(){
  	console.log("for keep-alive , 组件被激活时使用");
  }
  ,deactivated(){
  	console.log("for keep-alive,组件被移除时调用...");
  }
  ,beforeDestroy(){
  	console.log("组件销毁前调用.....");
  }
  ,destroyed(){
  	console.log("组件销毁后调用....");
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style lang="scss" scoped="" type="text/css">

@import "./css/main.css";


body{
  margin:0 !important;
  background:red;
}

.container{font-size:0.12rem;}

.icon-box{display: inline-block;}
.input-box-list{
  width: 80%;min-height: 45px;margin: 0 auto; margin: 20px 0 0 0;display: inline-block;position: relative;

  .input{
    padding-left: 80px;
  }

  .icon-box{
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
    font-size:0.24rem;
    padding-left:0.2rem;
  }

}


.input-box-list input{width: 100%;height: 45px;
-webkit-appearance:none;border: none;border-bottom: 1px solid #eee; padding-left: 10px;
}
.work-view{
  width: 90%;
  min-height: 100px;
  border:1px solid #eee;
  box-shadow: 0 0 5px #eee;
  margin: 20px auto;
  
}

.work-view .date{
  padding: 20px 0 0 20px;
  text-align: left;
}

.work-list ul li{
  padding: 10px 20px 0 20px;
}

.work-list ul li div{
  display: inline-block;
}

.work-list ul li{
  width: 100%;
}
.work-list ul li div.text{
  width: 30%;
}
.work-list ul li div.progress{
  width: 40%;
  overflow: hidden;
  position: relative;
}

.work-list ul li div.progress input{
  width: 60%;
}

.work-list ul li div.progress span{
  position: absolute;
  right: 0;
  line-height: 40px;
}

.work-list ul li div.delButton{
  width: 25%;
  text-align: right;

}

.work-list ul li div.delButton button{
  -webkit-appearance:none;
  outline: none;
  background: red;
  border: none;
  color: #fff;
  width: 50px;
  height: 30px;
  border-radius: 10px;
}


.btn-big{
  width: 80%;
  height: 45px;
  border: 1px solid #eee;
  margin: 0 auto;
  line-height: 45px;
  margin-top:20px;
  border-radius: 10px;
  text-align:center;

}
.btn-big.btn-sub{
  background: #1fa309;
  color: #fff;
  text-align:center;
}

</style>
