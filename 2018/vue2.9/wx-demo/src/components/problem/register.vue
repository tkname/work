<template lang="pug">
    section.form-page.register
        .logo
        form
            .form-group
                input(type='text', placeholder='手机号' v-model="phoneNumber")
            .form-group
                input(type='text', placeholder='昵称（6-10个字符）' v-model="userAccount")
            .form-group
                input(type='password', placeholder='设置密码（6-10个字符）' v-model="passWord")
            .form-group.code
                input(type='text', placeholder='短信验证码' v-model="codeNumber")
                a.btn.btn-yellow(@click="getVerifyCode", v-show="!computedTime") 获取验证码
                a.btn.btn-yellow(v-show="computedTime") 已发送{{computedTime}}s
            button.btn(type="submit" @click.prevent="mobileRegister") 注册
            .unlogin
                .login-text
                    span 已有账号 ?
                    router-link.link.to_login(to='/login')  马上登录
        alert-tip(v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText")
</template>

<script>
    // import alertTip from '../../components/common/alertTip'
    // import {mapState, mapMutations} from 'vuex'
    // import {mobileCode, checkExsis, sendLogin, accountLogin} from '../../service/getData'

    // export default {
    //     data(){
    //         return {
    //             mobileCode: null, //短信验证码
    //             computedTime: 0, //倒记时
    //             userAccount: null, //用户名
    //             passWord: null, //密码
    //             codeNumber: null, //验证码
    //             showAlert: false, //显示提示组件
    //             alertText: null, //提示的内容
    //         }
    //     },
    //     created(){
    //     },
    //     components: {
    //         alertTip,
    //     },
    //     computed: {
    //         //判断手机号码
    //         rightPhoneNumber: function (){
    //             return /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/gi.test(this.phoneNumber)
    //         },
    //         //判断昵称
    //         rightUserAccount: function (){
    //             return (this.userAccount.length >= 6 && this.userAccount.length <= 10)
    //         },
    //         //判断密码
    //         rightPassWord: function (){
    //             return (this.passWord.length >= 6 && this.passWord.length <= 10)
    //         },
    //     },
    //     methods: {
    //         ...mapMutations([
    //             'RECORD_USERINFO',
    //         ]),
    //         //获取验证吗，线上环境使用固定的图片，生产环境使用真实的验证码
    //         async getCaptchaCode(){
    //             let res = await getcaptchas();
    //             this.captchaCodeImg = res.code;
    //         },
    //         //获取短信验证码
    //         async getVerifyCode(){
    //             if (this.rightPhoneNumber) {
    //                 this.computedTime = 60;
    //                 this.timer = setInterval(() => {
    //                     this.computedTime --;
    //                     if (this.computedTime == 0) {
    //                         clearInterval(this.timer)
    //                     }
    //                 }, 1000);
    //                 //发送短信验证码
    //                 let res = await mobileCode(this.phoneNumber);
    //                 if (res.message) {
    //                     this.showAlert = true;
    //                     this.alertText = res.message;
    //                     return
    //                 }
    //                 this.validate_token = res.validate_token;
    //             }else {
    //                 this.showAlert = true;
    //                 this.alertText = '请输入正确的手机号';
    //             }
    //         },
    //         //发送注册信息
    //         async mobileRegister(){
    //             if (!this.phoneNumber) {
    //                 this.showAlert = true;
    //                 this.alertText = '请输入手机号';
    //                 return
    //             }else if(!this.userAccount){
    //                 this.showAlert = true;
    //                 this.alertText = '请输入昵称';
    //                 return
    //             }else if(!this.rightUserAccount){
    //                 this.showAlert = true;
    //                 this.alertText = '请输入6-10个字符昵称';
    //                 return
    //             }else if(!this.passWord){
    //                 this.showAlert = true;
    //                 this.alertText = '请输入密码';
    //                 return
    //             }else if(!this.rightPassWord){
    //                 this.showAlert = true;
    //                 this.alertText = '请输入6-10个字符密码';
    //                 return
    //             }
    //             //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
    //             if (!this.userInfo.user_id) {
    //                 this.showAlert = true;
    //                 this.alertText = this.userInfo.message;
    //             }else{
    //                 this.RECORD_USERINFO(this.userInfo);
    //                 this.$router.go(-1);
    //             }
    //         },
    //         closeTip(){
    //             this.showAlert = false;
    //         }
    //     }
    // }

</script>
