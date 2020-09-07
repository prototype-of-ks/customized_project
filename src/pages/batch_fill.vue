<template>
    <div class="app">
        <topHeader :title="'批次'" :url="'home.js'"></topHeader>
        <div class="main">
            <div class="head">
                <div>
                    <text class="text">批次号</text>
                </div>
                <div>
                    <text class="text">数量</text>
                </div>
            </div>
            <div class="content">
                <div 
                    v-for="(v, index) in batchList" 
                    :key="index"
                    class="content-item"
                    @click="selectBatch(v)"
                >
                    <text class="text">{{ v.aNo }}</text>
                    <text class="text">{{ v.count }}</text>
                </div>
            </div>
        </div>

        <wxc-dialog 
            title="选择批次"
            content="确认选择该批次？"
            :show="showDialog"
            :single="false"
            :show-no-prompt="false"
            @wxcDialogCancelBtnClicked="wxcDialogCancelBtnClicked"
            @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked"
        >
        </wxc-dialog>
    </div>
</template>

<script>
const eeui = app.requireModule('eeui');
import { WxcDialog } from 'weex-ui';
import topHeader from '@/components/topHeader';
import api from '@/API';
export default {
    components: { WxcDialog, topHeader },
    name: 'batch_fill',
    data () {
        return {
            showDialog: false,
            isChecked: false,
            batchList: [{
                aNo: 'FB19810C38',
                count: '50,300'
            }, {
                aNo: 'FB19810C38',
                count: '50,300'
            }, {
                aNo: 'FB19810C38',
                count: '50,300'
            }],
            selectedBatch: {}
        }
    },
    methods: {
        selectBatch (v) {
            this.showDialog = true;  
            this.selectedBatch = v;
        },
        wxcDialogCancelBtnClicked () {
            this.showDialog = false;
        },
        wxcDialogConfirmBtnClicked () {
            const self = this;
            this.showDialog = false;
            eeui.setCaches('selectedBatch', self.selectedBatch);
            api.openPage('loading_work.js');
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

    .iconr {
        width: 50px;
        height: 50px;
        color: rgb(255, 255, 255);
        z-index: 99;
    }

    .navbar {
        background-color: rgb(52, 77, 178);
        height: 80px;
    }
    
    .head {
        width: 500px;
        border-bottom-color: rgb(255, 255, 255);
        border-bottom-style: solid;
        border-bottom-width: 1px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .content {
        width: 500px;
    }

    .content-item {
        width: 500px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
</style>