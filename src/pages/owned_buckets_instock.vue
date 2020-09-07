<template>
    <div class="app">
        <topHeader :title="'自备桶入库'" :url="'home.js'"></topHeader>

        <div class="main">
            <div class="head">
                <div class="row single-row">
                    <div class="row-item">
                        <text class="text">通知单号：</text>
                    </div>
                    <div class="row-item">
                        <text class="text">{{ unloadingInfo.no }}</text>
                    </div>
                    <div class="row-item right-item">
                        <button 
                            class="button" 
                            :text="startUnloadingBtnTxt"
                            @click="startUnloading"
                        ></button>
                    </div>
                </div>
                <div class="row single-row">
                    <div class="row-item">
                        <text class="text">开始时间：</text>
                    </div>
                    <div class="row-item">
                        <text class="text">{{ unloadingInfo.startDate }}</text>
                    </div>
                </div>
            </div>
            <div class="content" v-if="show">
                <div class="row single-row">
                    <div class="row-item">
                        <text class="text">工厂：</text>
                    </div>
                    <div class="row-item">
                        <text class="text">{{ unloadingInfo.factory }}</text>
                    </div>
                    <div class="row-item right-item">
                        <icon content="md-search" class="search-icon"></icon>
                    </div>
                </div>
                <div class="row single-row">
                    <div class="row-item">
                        <text class="text">客户：</text>
                    </div>
                    <div class="row-item">
                        <text class="text">{{ unloadingInfo.custom }}</text>
                    </div>
                    <div class="row-item right-item">
                        <icon content="md-search" class="search-icon"></icon>
                    </div>
                </div>
                <div class="row single-row">
                    <div class="row-item">
                        <text class="text">物料：</text>
                    </div>
                    <div class="row-item">
                        <text class="text">{{ unloadingInfo.material }}</text>
                    </div>
                </div>
                <div class="row double-row">
                    <div class="double-row-item">
                        <text class="text">物料类型：</text>
                        <text class="text">{{ unloadingInfo.materialType }}</text>
                    </div>
                    <div class="double-row-item">
                        <text class="text">物料组：</text>
                        <text class="text">{{ unloadingInfo.materialGroup }}</text>
                    </div>
                </div>   
                <div class="row double-row">
                    <div class="double-row-item">
                        <text class="text">桶型：</text>
                        <text class="text">{{ unloadingInfo.barrelType }}</text>
                    </div>
                    <div class="double-row-item">
                        <text class="text">用途：</text>
                        <text class="text">{{ unloadingInfo.for }}</text>
                    </div>
                </div>  
                <div class="row double-row">
                    <div class="double-row-item">
                        <text class="text">颜色：</text>
                        <text class="text">{{ unloadingInfo.color }}</text>
                    </div>
                    <div class="double-row-item">
                        <text class="text">规格型号：</text>
                        <text class="text"></text>
                    </div>
                </div> 
                <div class="row double-row">
                    <div class="double-row-item triple">
                        <text class="text">数量：</text>
                        <text class="text">{{ unloadingInfo.count }}</text>
                        <text class="text">件</text>
                    </div>
                    <div class="double-row-item triple">
                        <text class="text">卸货数量：</text>
                        <text class="text">{{ unloadingInfo.unloading_count }}</text>
                        <text class="text">件</text>
                    </div>
                </div>             
            </div>
            <div v-else class="occupancy">
                <image 
                    src="root://images/new_scaner.png" 
                    style="width: 300px; height: 300px"
                    @click="openScaner"
                ></image>
            </div>
        </div>
    </div>
</template>

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
        width: 80px;
        height: 80px;
        color: rgb(255, 255, 255);
        z-index: 99;
    }

    .navbar {
        background-color: rgb(52, 77, 178);
        height: 80px;
    }

    .main {
        flex: 1;
        padding: 20px;
        width: 750px;
    }

    .row {
        justify-content: flex-start;
        align-items: center;
    }

    .single-row, .double-row {
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .double-row {
        justify-content: space-between;
    }

    .double-row-item {
        width: 330px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .triple {
        justify-content: space-between;
    }

    .right-item {
        position: absolute;
        right: 0;
    }

    .button {
        width: 140px;
        height: 50px;
        background-color: rgb(49, 78, 180);
        font-size: 22px;
    }

    .occupancy {
        justify-content: flex-start;
        align-items: center;
        margin-top: 300px;
    }

    .search-icon {
        width: 50px;
        height: 50px;
        color: rgb(255, 255, 255);
    }
</style>

<script>
const eeui = app.requireModule('eeui');
import api from '@/API';
import topHeader from '@/components/topHeader';
export default {
    components: { topHeader },
    data () {
        return {
            startUnloadingBtnTxt: '开始卸货',
            show: false,
            unloadingInfo: {
                no: '-RKTZD202007210001',
                startDate: '2020-07-01 17:58:57',
                factory: 'CHEMICAL VIET NAM PSC COMPANY LIMIT',
                custom: 'AFRICAN INTERNATIONAL GROUP FOR',
                material: '平平O-25_编织袋无字_25KG',
                materialType: '成品',
                materialGroup: '便面活性剂',
                barrelType: '吨桶',
                for: '装运物料',
                color: '白色',
                count: '100',
                unloading_count: '100'
            }
        }
    },
    methods: {
        startUnloading () {
            if (this.show) {

            } else {     
                this.getPailStockDetail();       
                this.startUnloadingBtnTxt = '卸货完成';
                this.show = true;
            }
        },
        getPailStockDetail () {
            const self = this;
            function onSuccess (res) {
                console.log(res);
                if (res.status == 'success') {
                    let result = res.result.data;
                    console.log(result);
                }
            }
            function onErr (err) {
                console.log(err);
            }
            api.SVR.invokeService('PailStockInIn', ['SHFJ-ZBTLYD202008270001'], onSuccess, onErr);
        },
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