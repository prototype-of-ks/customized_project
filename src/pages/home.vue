<template>
    <div class="app">
        <div class="img-content">
            <image :src="loginPageImg" class="login-page-img"></image>
        </div>    
        <div class="wrapper">
            <div 
                class="matters-content" 
                v-for="matter in matterLists" 
                :key="matter.id"
                @click="jumpTo(matter)"
            >
                <image :src="matter.src" class="matter-img"></image>    
            </div>    
        </div>   

        <div class="sign-out">
            <button 
                class="button" 
                text="退出"
                @click="signOut"
            ></button>
        </div>

        <wxc-dialog
            title="退出"
            content="确认退出?"
            :show="signOutShow"
            @wxcDialogCancelBtnClicked="wxcDialogCancelBtnClicked"
            @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked"
        ></wxc-dialog>
    </div>
</template>

<script>
const eeui = app.requireModule('eeui');
import { WxcDialog } from 'weex-ui';
import api from '@/API';
export default {
    name: 'home',
    components: { WxcDialog },
    data () {
        return {
            loginPageImg: 'root://images/login_page_img.png',
            matterLists: [{
                id: 0,
                src: 'root://images/loading_call.png',
                url: 'loading_call.js'
            }, {
                id: 1,
                src: 'root://images/loading.png',
                url: 'loading.js'
            }, {
                id: 2,
                src: 'root://images/unloading.png',
                url: 'unloading.js'
            }, {
                id: 3,
                src: 'root://images/instore_check_weight.png',
                url: 'instock_check_weight.js'
            }, {
                id: 4,
                src: 'root://images/outstore_check_weight.png',
                url: 'outstock_check_weight.js'
            }, {
                id: 5,
                src: 'root://images/owned_buckets_instock.png',
                url: 'owned_buckets_instock.js'
            }, {
                id: 6,
                src: 'root://images/packaging_collar.png',
                url: 'packaging_collar.js'
            }],
            signOutShow: false
        }
    },
    methods: {
        jumpTo (matter) {
            if (matter.url) {
                api.openPage(matter.url);
            }
        },
        signOut () {
            this.signOutShow = true;
        },
        wxcDialogCancelBtnClicked () {
            this.signOutShow = false;
        },
        wxcDialogConfirmBtnClicked () {
            eeui.clearAllCaches();
            api.openPage('index.js');
        }
    }
}
</script>

<style scoped>
    .app {
        flex: 1;
        background-color: rgb(35, 35, 35);
    }

    .img-content {
        margin-bottom: 20px;
    }
    
    .login-page-img {
        width: 750px;
        height: 300px;
    }

    .wrapper {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin: 30px;
    }

    .matters-content {
        margin-bottom: 20px;
    }

    .matter-img {
        width: 220px;
        height: 160px;
    }

    .sign-out {
        justify-content: center;
        align-items: center;
        width: 750px;
        position: absolute;
        bottom: 40px;
    }

    .button {
        width: 600px;
        height: 60px;
        background-color: rgb(53, 78, 181);
    }
</style>
