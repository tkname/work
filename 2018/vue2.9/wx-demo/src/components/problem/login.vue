<template lang="pug">

    span 11224454541212

    //- section.form-page.login
    //-     .logo
    //-     form
    //-         .form-group
    //-             input(type='text', placeholder='账号' v-model="userAccount")
    //-         .form-group
    //-             input(type='password', placeholder='密码' v-model="passWord")
    //-         button.btn(type="submit" @click.prevent="mobileLogin") 登录
    //-         .unlogin.clear
    //-             router-link.link.fl-r.to_forget(to='/problem/forget') 忘记密码 ？
    //-             .register-text
    //-                 span 没有账户 ？
    //-                 router-link.link.to_register(to='/problem/register') 注册
        
    //-     <!-- <div class="third-account">
    //-         <div class="white-line">第三方账号登录</div>
    //-         <div class="account-ico">
    //-             <i class="ico ico-weibo"></i>
    //-             <i class="ico ico-qq"></i>
    //-             <i class="ico ico-wechat"></i>
    //-         </div>
    //-     </div> -->

    //-     alert-tip(v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText")
</template>

<style type="text/css">
    span{
        position: absolute;
        z-index: 999;
    }

</style>

<script>
		
	// import f

    export default {
        data(){
            return {
                userAccount: null, //用户名
                passWord: null, //密码
                showAlert: false, //显示提示组件
                alertText: null, //提示的内容
            }
        },
        components: {
        	
        },
        methods: {
          
        }
    }

</script>
