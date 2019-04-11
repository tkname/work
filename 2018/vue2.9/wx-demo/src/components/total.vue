<template>
  
  <div class="index">
	
	<div class="container">
		<div class="header">
			<div class="web-title">{{appInfo.webTitle}}</div>
			<div class="button-switch" v-on:click="url">{{appInfo.buttonSwitch}}</div>
		</div>
		<div class="mian">

		  <div class="title">姓名</div>
      
      <div class="user-box" v-for="item in uesrList">
        <div class="user-list" v-on:click="getData(item.id)">{{item.name}}</div>
      </div>
      
      <div class="user-month">
        <div class="time">2018.2.2(xxx)</div>

        <ul v-for="is in monthList">
          <li>{{is.text}}</li>
        </ul>
      
      </div>

    </div>
	</div>

  </div>

</template>

<script>

export default {
  name: 'index',
  data () {
    return {
    	appInfo:{
    		  webTitle:"记录汇总",
      		buttonSwitch:"返回",
      },
      getUrl:"http://minisite.hocodo.com:3001/day",
      uesrList:[],
      monthList:[]
    }
  }
  ,methods:{
      url:function function_name() {
        this.$router.push({ path: '/todoList' })
      },
      getData:function(e){

        var that=this;
          this.uesrList.forEach(function(item,index){
            if(item.id==e){
              that.monthList=JSON.parse(that.uesrList[index].todo);
              console.log(that.monthList);
            }
          })
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

        var date=new Date();
        var time=date.getFullYear()+"-"+(date.getMonth()*1+1)+"-"+date.getDate();


        var that = this; 
        console.log(this.getUrl);   

        that.$http({      //调用接口

          method:'GET',

          params:{time:time},

          url:this.getUrl //this指data

        }).then(function(response){ //接口返回数据

          // console.log(response.data.data);
          this.uesrList=response.data.data;             

        },function(error){

        })    

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
<style scoped>
*{
	box-sizing: border-box;
}
.container{
  font-size: 0.12rem;
}
ul,li{list-style: none;text-align: left;padding:0; }	
.header{
	width: 100%;
	height: 56px;
	background-color: #7e57c2;
}

.clearFix{
	clear: both;
}

.header .web-title{
	float: left;
	font-size: 20px;
	color: #fff;
	line-height: 56px;
	padding-left: 20px;
}

.header .button-switch{
	float: right;
	color: #fff;
	font-size: 14px;
	line-height: 56px;
	padding-right: 20px;
}

.mian{
  text-align: left;
}
.mian .title{
  font-size: 20px;
  height: 20px;
  line-height: 20px;
  padding: 20px 0 20px 20px;
}

/*.user-box{
  padding-bottom: 20px;
}
*/
.mian .user-box .user-list{
  padding: 20px 0 0px 20px;
}

.user-month{
  /*border-top: 1px solid #eee;*/
  margin: 20px 20px 20px 0px;
  padding-top: 20px;
  box-shadow: 0 5px 20px #eee;
  /*margin: 0 auto;*/
  padding-bottom: 20px;
  padding-left: 20px;
}
.user-month li{
  padding-top: 10px;
}

</style>
