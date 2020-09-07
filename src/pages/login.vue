<template>
    <div class="app">
        <div class="img-content">
            <image :src="loginPageImg" class="login-page-img"></image>
        </div>
        <div class="login-container">
            <div class="box">
                <text class="text">账号</text>
                <input 
                    class="login-input" 
                    type="text" 
                    v-model="loginInfo.userId"
                    autocomplete="false"
                    return-key-type="done"
                >
            </div>
            <div class="box">
                <text class="text">密码</text>
                <input 
                    class="login-input" 
                    :type="showPwd ? 'text' : 'password'" 
                    v-model="loginInfo.userPwd"
                    autocomplete="false"
                    return-key-type="done"
                >
                <icon 
                    :content="showPwd ? 'md-eye' : 'md-eye-off'" 
                    class="iconr" 
                    @click="showPwdIcon"
                ></icon>
            </div>
            <div class="box button-box">
                <button 
                    class="button" 
                    :text="isLogining ? '登录中' : '登录'" 
                    :loading="isLogining"
                    @click="signIn"
                ></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .app {
        flex: 1;
        background-color: rgb(35, 35, 35);
    }

    /* 显示密码icon */
    .iconr {
        width: 60px;
        height: 60px;
        color: rgb(255, 255, 255);
        position: absolute;
        right: 0;
        z-index: 99;
    }

    .login-container {
        flex-direction: column;
        width: 750px;
        justify-content: center;
        align-items: center;
    }

    .box {
        flex-direction: row;
        height: 60px;
    }

    .button-box {
        margin-top: 20px;
    }

    .img-content {
        margin-bottom: 20px;
    }

    .login-input {
        width: 500px;
        line-height: 60px;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: rgb(77, 77, 77);
        color: rgb(255, 255, 255);
    }

    .login-page-img {
        width: 750px;
        height: 400px;
    }

    .text {
        font-size: 28px;
        line-height: 60px;
        color: rgb(255, 255, 255);
        padding-right: 28px;
    }

    .button {
        width: 600px;
        height: 60px;
        background-color: rgb(53, 78, 181);
    }
</style>

<script>
const eeui = app.requireModule('eeui');
import api from '@/API';
export default {
    name: '',
    data () {
        return {
            loginPageImg: 'root://images/login_page_img.png',
            showPwd: false,
            isLogining: false,
            loginInfo: {
                userId: '',
                userPwd: ''
            }
        }
    },
    mounted () {
        if (eeui.getCaches('loginStatu')) {
            this.loginInfo = eeui.getCaches('loginInfo');
            this.isLogining = false;
        }
    },
    methods: {
        showPwdIcon () {
            this.showPwd = !this.showPwd;
        },
        signIn () {
            // eeui.ajax();
            const that = this;
			let successLogin = function(res){
				if(res.status == 'success') {
					console.log(res.result.data);
					eeui.setCaches('loginInfo', that.loginInfo, 0);
					eeui.setCaches('loginStatu', true, 0);
					eeui.setCaches('userinfo', res.result.data, 0);
					that.isLogining = true;
					api.openPage('home.js');
				} else {
					console.log('error');
					eeui.toast({
					    message: '账号或密码错误',
					    gravity: 'middle'
					})
				}
            }
			let errorCallback = function(res){
				eeui.toast({
				    message: '账号或密码错误',
				    gravity: 'middle'
				})
            }
            if (this.loginInfo.userId) {
                api.SVR.doLogin(this.loginInfo.userId, this.loginInfo.userPwd, {}, undefined, null, successLogin, errorCallback);
                // if (this.loginInfo.userId == 'admin' && this.loginInfo.userPwd == '123456') {
                //     eeui.setCaches('loginStatu', true, 0);
                //     eeui.setCaches('loginInfo', this.loginInfo, 0);
                //     this.isLogining = true;
                //     eeui.openPage({
                //         url: 'home.js',
                //         pageType: 'app'
                //     })
                // } else {
                //     eeui.toast({
                //         message: '账号或密码错误',
                //         gravity: 'middle'
                //     })
                // }
            } else {
                eeui.toast({
                    message: '请输入账号',
                    gravity: 'middle'
                })
            }

        }
    }
}
</script>

