<template>
    <div class="app">

        <topHeader :title="'包装领用'" :url="'home.js'"></topHeader>
        <div class="main">
            <div class="head">
                <div class="row single-row">
                    <div class="row-item">
                        <text class="text">工厂：</text>
                    </div>
                    <div class="row-item">
                        <am-picker
                            :show.sync="factorySelector"
                            v-model="unloadingInfo.no"
                            :data="testList"
                            @ok="ok"
                        >
                            <template slot-scope="{ extra, show }">
                                <input 
                                    type="text"
                                    class="single-row-input"
                                    return-key-type="done"
                                    :value="extra"
                                    @click="show"
                                    disabled="true"
                                >
                            </template>
                        </am-picker>
                    </div>
                    <div class="row-item right-item">
                        <icon content="md-search" class="search-icon"></icon>
                        <button 
                            class="button" 
                            text="保存"
                            @click="startUnloading"
                            style="z-index: 99"
                        ></button>
                    </div>
                </div>
                <div class="row single-row">
                    <div class="row-item">
                        <text class="text">客户：</text>
                    </div>
                    <div class="row-item">
                        <input 
                            type="text"
                            class="single-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.custom"
                        >
                    </div>
                    <div class="row-item right-item">
                        <icon content="md-search" class="search-icon"></icon>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="row double-row">
                    <div class="double-row-item">
                        <text class="text">用车类型：</text>
                        <input 
                            type="text"
                            class="double-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.materialType"
                        >
                        <div class="row-item right-item">
                            <icon content="md-search" class="search-icon"></icon>
                        </div>
                    </div>
                    <div class="double-row-item">
                        <text class="text">领用日期：</text>
                        <input 
                            type="text"
                            class="double-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.materialGroup"
                        >
                        <div class="row-item right-item">
                            <icon content="md-search" class="search-icon"></icon>
                        </div>
                    </div>
                </div>  
                <div class="row single-row">
                    <div class="row-item">
                        <text class="text">物料：</text>
                    </div>
                    <div class="row-item">
                        <input 
                            type="text"
                            class="single-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.factory"
                            style="width: 600px"
                        >
                    </div>
                    <div class="row-item right-item">
                        <icon content="md-search" class="search-icon"></icon>
                    </div>
                </div>
                <div class="row double-row">
                    <div class="double-row-item">
                        <text class="text">物料类型：</text>
                        <input 
                            type="text"
                            class="double-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.materialType"
                        >
                        <div class="row-item right-item">
                            <icon content="md-search" class="search-icon"></icon>
                        </div>
                    </div>
                    <div class="double-row-item">
                        <text class="text">物料组：</text>
                        <input 
                            type="text"
                            class="double-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.materialGroup"
                        >
                        <div class="row-item right-item">
                            <icon content="md-search" class="search-icon"></icon>
                        </div>
                    </div>
                </div>   
                <div class="row double-row">
                    <div class="double-row-item">
                        <text class="text">桶型：</text>
                        <input 
                            type="text"
                            class="double-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.barrelType"
                        >
                        <div class="row-item right-item">
                            <icon content="md-search" class="search-icon"></icon>
                        </div>
                    </div>
                    <div class="double-row-item">
                        <text class="text">用途：</text>
                        <input 
                            type="text"
                            class="double-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.for"
                        >
                        <div class="row-item right-item">
                            <icon content="md-search" class="search-icon"></icon>
                        </div>
                    </div>
                </div>  
                <div class="row double-row">
                    <div class="double-row-item">
                        <text class="text">颜色：</text>
                        <input 
                            type="text"
                            class="double-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.color"
                        >
                        <div class="row-item right-item">
                            <icon content="md-search" class="search-icon"></icon>
                        </div>
                    </div>
                    <div class="double-row-item">
                        <text class="text">规格型号：</text>
                        <input 
                            type="text"
                            class="double-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.color"
                        >
                        <div class="row-item right-item">
                            <icon content="md-search" class="search-icon"></icon>
                        </div>
                    </div>
                </div> 
                <div class="row double-row">
                    <div class="double-row-item">
                        <text class="text">数量：</text>
                        <input 
                            type="text"
                            class="double-row-input"
                            return-key-type="done"
                            v-model="unloadingInfo.count"
                        >
                        <div class="row-item right-item">
                            <icon content="md-search" class="search-icon"></icon>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    </div>
</template>

<script>
import topHeader from '@/components/topHeader';
const eeui = app.requireModule('eeui');
import { AmPicker } from 'weex-amui';
export default {
    components: { topHeader, AmPicker },
    data () {
        return {
            factorySelector: false,
            show: false,
            testList: [
                {
                    label: '-RKTZD202007210001',
                    value: '0001'
                }
            ],
            unloadingInfo: {
                no: ['-RKTZD202007210001'],
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
        ok (value, label) {
            console.log(value[0], label[0]);
        },
        startUnloading () {
            if (this.show) {

            } else {            
                this.show = true;
            }
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

    .content {
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: rgb(255, 255, 255);
    }

    .row {
        justify-content: flex-start;
        align-items: center;
    }

    .row-item {
        flex-direction: row;
        justify-content: center;
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
        z-index: 99;
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

    .single-row-input {
        width: 430px;
        height: 40px;
        font-size: 28px;
        line-height: 40px;
        color: rgb(255, 255, 255);
    }
    
    .double-row-input {
        width: 180px;
        height: 40px;
        font-size: 28px;
        color: rgb(255, 255, 255);
        margin-top: 8px;
    }
</style>
