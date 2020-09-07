<template>
    <div class="app">
        <topHeader :title="'装货叫号'" :url="'home.js'"></topHeader>

        <div class="content">
            <div class="header">
                <text class="text center-text">装货点</text>
                <text class="text center-text">等待中车辆</text>
                <text class="text center-text">作业中车辆</text>
            </div>
        </div>

        <scroll-view 
            class="scroller"
            ref="scroller"
            @pullLoadListener="pullLoadListener"
            @refreshListener="refreshListener"
        >
            <div class="box" 
                v-for="loadingCallInfo in loadingCallInfoList"
                :key="loadingCallInfo.id"
                @click="getDetailInfo(loadingCallInfo)"
            >
                <text class="text center-text">{{ loadingCallInfo.loadingAddress }}</text>
                <text class="text center-text">{{ loadingCallInfo.waitingTruck }}</text>
                <text class="text center-text">{{ loadingCallInfo.workingTruck }}</text>
            </div>
        </scroll-view>
    </div>
</template>

<script>
import { AmPicker } from 'weex-amui';
import api from '@/API';
import topHeader from '@/components/topHeader';
export default {
    name: 'loading_call',
    components: { AmPicker, topHeader }, 
    data () {
        return {
            factoryShow: false,
            unloadingAreaShow: false,
            loadingCallInfoList: [],
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
    mounted () {
        eeui.setCaches('loadingCallDetailInfo', null);
        this.getLoadingCallInfo();
    },
    methods: {
        getLoadingCallInfo (onSuc, onErr) {
            const self = this;
            function onError (err) {
                console.log(err);
                if (onErr) {
                    onErr(err)
                } else {
                    eeui.toast({
                        message: err.result,
                        gravity: 'middle'
                    })
                }
            }
            function onSuccess (res) {
                if (res.status == 'success') {
                    let result = res.result.data.all_data_rows;
                    result.forEach(v => {
                        let d = v.data,
                            loadingCallInfo = {};
                        loadingCallInfo.loadingAddress = d[0];
                        loadingCallInfo.id = d[1];
                        loadingCallInfo.waitingTruck = d[2];
                        loadingCallInfo.workingTruck = d[3];
                        self.loadingCallInfoList.push(loadingCallInfo);
                    })
                    onSuc && onSuc(res);
                }
            }
            api.SVR.invokeService('LoadingUnload', [], onSuccess, onError);
        },
        // 上拉加载新数据
        pullLoadListener () {
            // let node = this.$refs.scroller;
            // this.getLoadingCallInfo(function () {
            //     node.setHasMore(true);
            //     node.refreshed();
            //     eeui.toast({
            //         message: '数据刷新成功',
            //         gravity: 'middle'
            //     })
            // }, function () {
            //     node.setHasMore(true);
            //     node.refreshed();
            //     eeui.toast({
            //         message: '数据刷新失败',
            //         gravity: 'middle'
            //     })
            // })
        },
        // 下拉刷新数据
        refreshListener () {
            let node = this.$refs.scroller;
            this.getLoadingCallInfo(function () {
                node.setHasMore(false);
                node.refreshed();
                eeui.toast({
                    message: '数据刷新成功',
                    gravity: 'middle'
                })
            }, function () {
                node.setHasMore(false);
                node.refreshed();
                eeui.toast({
                    message: '数据刷新失败',
                    gravity: 'middle'
                })
            })
            // let newList = [];
            // for (let i = 1; i <= 10; i++) {
            //     newList.push({
            //         factory_name: '上海抚佳精细化工有限公司',
            //         handing_port: '1#装置',
            //         working_truck: '',
            //         material: '物料1',
            //         next_truck: '沪C1234F'
            //     });
            // }

            // if (    
            //     this.searchInfo.factory[0] != '' 
            //     && this.searchInfo.handling_address[0] != ''
            // ) {
            //     setTimeout(() => {
            //         this.factoryLists = newList;
            //         this.$refs.scroller.setHasMore(true);
            //         this.$refs.scroller.refreshed();
            //         eeui.toast('刷新数据成功');
            //     }, 1000);
            // } else {
            //     setTimeout(() => {
            //         // this.$refs.scroller.setHasMore(false);
            //         this.$refs.scroller.refreshed();
            //         eeui.toast('无新数据');
            //     }, 2500)
            // }

        },
        getDetailInfo (loadingCallInfo) {
            console.log(loadingCallInfo);
            eeui.setCaches('loadingCallDetailInfo', loadingCallInfo, 0);
            api.openPage('loading_call_detail.js');
        }
    }
}
</script>

<style scoped>
    .app {
        flex: 1;
        background-color: rgb(35, 35, 35);
        align-items: center;
    }

    .navbar {
        background-color: rgb(52, 77, 178);
        height: 80px;
        width: 750px;
    }

    .title {
        font-size: 36px;
        color: rgb(255, 255, 255);
    }

    .text {
        font-size: 36px;
        line-height: 60px;
        color: rgb(255, 255, 255);
        
    }

    .iconr {
        width: 80px;
        height: 80px;
        color: rgb(255, 255, 255);
        z-index: 99;
    }

    .scroller {
        width: 700px;
        height: 1000px;
        justify-content: center;
        align-items: center;
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
        box-sizing: border-box;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
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

    .header {
        width: 700px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: rgb(255, 255, 255);
    }

    .content-box-container {
        width: 700px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .box {
        width: 700px;
        height: 90px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .center-text {
        width: 240px;
        text-align: center;
    }

</style>