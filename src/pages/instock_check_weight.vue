<template>
    <div class="app">
        <topHeader :title="'入厂检斤'" :url="'home.js'"></topHeader>
        <div class="content">
            <div class="row">
                <div class="row-item">
                    <text class="text right">单号：</text>
                </div>
                <div class="row-item">
                    <input 
                        type="text" 
                        class="no-input"
                        v-model="no"
                        return-key-type="done"
                    >
                </div>
                <div class="row-item right-item">
                    <image 
                        src="root://images/scaner_white.png" 
                        style="width: 60px; height: 60px"
                        @click="openScaner"
                    ></image>
                </div>
            </div>
            <div class="row triple">
                <div class="row-item">
                    <text class="text right">车牌号：</text>
                </div>
                <div class="row-item">
                    <text class="text">京A666666</text>
                </div>
                <div class="row-item right-item" style="right: 100px">
                    <icon content="md-search" class="search-icon"></icon>
                </div>
            </div>
            <div class="row">
                <div class="row-item">
                    <text class="text right">重量(吨)：</text>
                </div>
                <div class="row-item">
                    <text class="text">2121</text>
                </div>
            </div>
            <div class="row">
                <div class="row-item">
                    <text class="text right">过磅时间：</text>
                </div>
                <div class="row-item">
                    <text class="text">2020-07-18 14:19:22</text>
                </div>
            </div>
            <div class="row btn-group">
                <button class="button cancel" text="取消"></button>
                <button class="button save" text="保存"></button>
            </div>
        </div>
    </div>
</template>

<script>
const eeui = app.requireModule('eeui');
import api from '@/API';
import topHeader from '@/components/topHeader';
export default {
    name: 'instock_check_weight',
    components: { topHeader },
    data () {
        return {
            no: '-DBDHD202007180033'
        }
    },
    methods: {
        openScaner () {
            api.openScaner({
                desc: ''
            }, res => {
                switch (res.status) {
                    case 'success': 
                        eeui.toast({
                            message: '扫码成功'
                        });
                        break;
                    case 'error':
                        eeui.toast({
                            message: '扫码失败'
                        });
                        break;
                }
            })
        }
    }
}
</script>

<style scoped>
    .app {
        flex: 1;
        background-color: rgb(0, 0, 0);
    }

    .title {
        font-size: 28px;
        color: rgb(255, 255, 255);
    }

    .text {
        font-size: 28px;
        line-height: 60px;
        color: rgb(255, 255, 255);
    }

    .right {
        width: 150px;
        text-align: right;
    }

    .iconr {
        width: 80px;
        height: 80px;
        color: rgb(255, 255, 255);
        z-index: 99;
    }

    .navbar {
        background-color: rgb(52, 77, 178);
        height: 80px;
    }

    .content {
        flex: 1;
        justify-content: flex-start;
        align-items: center;
        margin-top: 300px;
    }

    .row {
        width: 550px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .right-item {
        position: absolute;
        right: 0;
    }

    .no-input {
        width: 300px;
        height: 50px;
        line-height: 50px;
        font-size: 28px;
        color: rgb(255, 255, 255);
    }

    .search-icon {
        width: 50px;
        height: 50px;
        color: rgb(255, 255, 255);
    }

    .btn-group {
        margin-top: 30px;
        justify-content: flex-end;
    }

    .button {
        width: 140px;
        height: 50px;
        font-size: 24px;
    }

    .cancel {
        background-color: rgb(255, 255, 255);
        color: blue;
    }

    .save {
        background-color: rgb(52, 77, 178);
        color: rgb(255, 255, 255);
    }

</style>