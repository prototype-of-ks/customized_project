<template>
    <div class="app">
        <navbar class="navbar">
            <navbar-item type="left" @click="wrap">
                <icon content="md-arrow-back" class="iconr"></icon>
            </navbar-item>
            <navbar-item type="title">
                <text class="title">装货叫号</text>
            </navbar-item>
            <navbar-item type="right">
                <icon class="iconr" content="md-refresh"></icon>
            </navbar-item>
        </navbar>

        <scroll-view 
            class="scroller"
            ref="scroller"
            @pullLoadListener="pullLoadListener"
            @refreshListener="refreshListener"
        >
            <div class="search-area">
                <am-picker
                    :show.sync="factoryShow"
                    title="请选择工厂"
                    placeholder="请选择工厂"
                    :data="factoryList"
                    v-model="searchInfo.factory"
                >
                    <template slot-scope="{ extra, show }">
                        <div class="box" @click="show">
                            <text class="text">工厂：</text>
                            <text class="text">{{ extra }}</text>
                            <icon content="md-search" class="iconr iconr-search"></icon>
                        </div>
                    </template>
                </am-picker>

                <am-picker
                    :show.sync="unloadingAreaShow"
                    title="请选项卸货区"
                    placeholder="请选项卸货区"
                    :data="factoryList"
                    v-model="searchInfo.handling_address"
                >
                    <template slot-scope="{ extra, show }">
                        <div class="box" @click="show">
                            <text class="text">装卸点：</text>
                            <text class="text">{{ extra }}</text>
                            <icon content="md-search" class="iconr iconr-search"></icon>
                        </div>
                    </template>
                </am-picker>
            </div>

            <div class="content" v-for="factory in factoryLists" :key="factory.id">
                <div class="content-box">
                    <div class="row">
                        <text class="factory-name-tag tag">工厂：</text>
                        <text class="factory-name name">{{ factory.factory_name }}</text>
                    </div>

                    <div class="row-box">
                        <div class="row-item">
                            <text class="handing-port-tag tag">装卸口：</text>
                            <text class="handing-port-name name">{{ factory.handing_port }}</text>
                        </div>
                        <div class="row-item">
                            <text class="status-tag tag">状态：</text>
                            <text class="status-name name"></text>
                        </div>
                    </div>

                    <div class="row">
                        <text class="material-tag tag">物料：</text>
                        <text class="material-name name">{{ factory.material }}</text>
                    </div>

                    <div class="row">
                        <text class="carrier-tag tag">承运商：</text>
                        <text class="carrier-name name"></text>
                    </div>

                    <div class="row-box">
                        <div class="row-item">
                            <text class="working-truck-tag tag">当前作业车辆：</text>
                            <text class="working-truck-name name">{{ factory.working_truck }}</text>
                        </div>
                        <div class="row-item">
                            <text class="next-truck-tag tag">后续作业车辆：</text>
                            <text class="next-truck-name name">{{ factory.next_truck }}</text>
                        </div>
                    </div>
                </div>
                <button class="call-button" text="叫号"></button>
            </div>

        </scroll-view>
    </div>
</template>

<style scoped>
    .app {
        flex: 1;
        background-color: rgb(35, 35, 35);
    }

    .navbar {
        background-color: rgb(52, 77, 178);
        height: 80px;
    }

    .title {
        font-size: 28px;
        color: rgb(255, 255, 255);
    }

    .text {
        font-size: 28px;
        line-height: 60px;
        color: rgb(255, 255, 255);
        padding-right: 28px;
    }

    .iconr {
        width: 80px;
        height: 80px;
        color: rgb(255, 255, 255);
        z-index: 99;
    }

    .scroller {
        width: 750px;
        flex: 1;
    }

    .iconr-search {
        position: absolute;
        right: 0;
    }

    .search-area {
        flex-direction: column;
        width: 750px;
        align-items: center;
    }

    .box {
        width: 700px;
        flex-direction: row;
        height: 60px;
    }

    .search-input {
        width: 500px;
        line-height: 60px;
        color: rgb(255, 255, 255);
    }

    .content {
        width: 750px;
        padding: 30px;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .content-box {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-bottom-style: solid;
        border-bottom-color: rgb(255, 255, 255);
        border-bottom-width: 2px;
    }

    .row {
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    .row-box {
        width: 650px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .row-item {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .tag, .name {
        color:rgb(255, 255, 255);
        font-size: 28px;
    }

    .call-button {
        width: 70px;
        background-color: rgb(52, 77, 178);
    }


</style>

<script>
import { AmPicker } from 'weex-amui';
import api from '@/API';
export default {
    name: 'loading_call',
    components: { AmPicker },
    data () {
        return {
            factoryShow: false,
            unloadingAreaShow: false,
            searchInfo: {
                factory: ['上海抚佳精细化工有限公司'],
                handling_address: ['1#']
            },
            factoryLists: [],
            factoryList: [
                {
                    label: '上海抚佳精细化工有限公司-1',
                    value: '上海抚佳精细化工有限公司-1'
                }, {
                    label: '上海抚佳精细化工有限公司-2',
                    value: '上海抚佳精细化工有限公司-2'
                }, {
                    label: '上海抚佳精细化工有限公司-3',
                    value: '上海抚佳精细化工有限公司-3'
                },
            ]
        }
    },
    methods: {
        wrap () {
            api.openPage('home.js');
        },
        // 上拉加载新数据
        pullLoadListener () {
            let count = this.factoryLists.length;
            let node = this.$refs.scroller;
            if (count >= 10) {
                node.setHasMore(false);
                eeui.toast('数据加载完毕， 无新数据')
            }
        },
        // 下拉刷新数据
        refreshListener () {
            let newList = [];
            for (let i = 1; i <= 10; i++) {
                newList.push({
                    factory_name: '上海抚佳精细化工有限公司',
                    handing_port: '1#装置',
                    working_truck: '',
                    material: '物料1',
                    next_truck: '沪C1234F'
                });
            }

            if (    
                this.searchInfo.factory[0] != '' 
                && this.searchInfo.handling_address[0] != ''
            ) {
                setTimeout(() => {
                    this.factoryLists = newList;
                    this.$refs.scroller.setHasMore(true);
                    this.$refs.scroller.refreshed();
                    eeui.toast('刷新数据成功');
                }, 1000);
            } else {
                setTimeout(() => {
                    // this.$refs.scroller.setHasMore(false);
                    this.$refs.scroller.refreshed();
                    eeui.toast('无新数据');
                }, 2500)
            }

        }
    }
}
</script>