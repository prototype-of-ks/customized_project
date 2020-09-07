<template>
    <div class="app">
        <topHeader :title="'装货'" :url="'home.js'"></topHeader>
        <scroll-view 
            class="scroller"
            ref="scroller"
        >
            <div class="search-area">
                <div class="input-container">
                    <text class="text">提货单号：</text>
                    <input 
                        ref="loadingNo"
                        type="text" 
                        class="search-input" 
                        v-model="loading_no" 
                        placeholder="未输入"
                        @blur="searchEnd"
                        return-key-type="done"
                    >
                </div>
            </div>
            
            <div class="main">
                <div class="wrapper" v-if="loadingStart">
                    <div 
                        class="content-box" 
                        v-for="result in loadingList" 
                        :key="result.oid"
                        @click="itemClick(result)"
                    >
                        <div class="row">
                            <text class="tag">物料编码：</text>
                            <text class="name">{{ result.MaterialCode }}</text>
                        </div>
                        <div class="row">
                            <text class="tag">物料名称：</text>
                            <text class="name">{{ result.MaterialName }}</text>
                        </div>
                        <div class="row-box">
                            <div class="row-item">
                                <text class="tag">物料类型：</text>
                                <text class="name">{{ result.MaterialType }}</text>
                            </div>
                            <div class="row-item">
                                <text class="tag">物料组：</text>
                                <text class="name">{{ result.MaterialGroup }}</text>
                            </div>
                        </div>

                        <div class="row-box">
                            <div class="row-item">
                                <text class="tag">发货重量：</text>
                                <text class="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ result.TotalWeight }} {{ result.MeasureUnitId }}</text>
                            </div>
                            <div class="row-item">
                                <text class="tag">件数：</text>
                                <text class="name">{{ result.Qty  }}</text>
                            </div>
                        </div>

                        <div class="row-box">
                            <div class="row-item">
                                <text class="tag">桶型：</text>
                                <text class="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ result.BarrelShape }}吨桶</text>
                            </div>
                            <div class="row-item">
                                <text class="tag">计划发货日期：</text>
                                <text class="name">{{ result.PlanDeliveryDate }}</text>
                            </div>
                        </div>

                        <div class="row-box">
                            <div class="row-item">
                                <text class="tag">批次号：</text>
                                <text class="name">{{ result.BatchNo }}</text>
                            </div>
                            <div class="row-item">
                                <text class="tag">交货单行号：</text>
                                <text class="name">{{ result.SourceNum }}</text>
                            </div>
                        </div>

                        <div class="row">
                            <text class="tag">仓库：</text>
                            <text class="name">{{ result.WarehouseId }}</text>
                        </div>
                    </div>
                </div>

                <div class="scaner-container" v-else>
                    <image :src="scanerImg" class="scaner" @click="openScaner"></image>
                </div>
            </div>
        </scroll-view>


        <!-- <image 
            ref="poster"
            src="root://images/qr_code_4.png"
            style="width: 400px; height: 400px;"
            @longpress="longpress"
        ></image> -->
    </div>
</template>



<script>
import topHeader from '@/components/topHeader';
import api from '@/API';
export default {
    name: 'loading',
    components: { topHeader },
    data () {
        return {
            scanerImg: 'root://images/new_scaner.png',
            loadingList: [{
                oid: 1,
                BatchNo: 2,
                TotalWeight: 3,
                MeasureUnitId: 4,
                Qty: 5,
                MaterialCode: 6,
                MaterialName: 7,
                MaterialType: 8,
                MaterialGroup: 9,
                BarrelShape: 10,
                PlanDeliveryDate: 11,
                SourceNo: 12,
                SourceNum: 13,
                WarehouseId: 14,
                TransportTypeId: 15,
            }],
            loading_no: '',
            loadingStart: false
        }
    },
    mounted () {
        let mountedLoadingInfoCache = eeui.getCaches('mountedLoadingInfoCache'),
            mountedLoadingNo = eeui.getCaches('mountedLoadingNo');
        console.log(mountedLoadingInfoCache, mountedLoadingNo);

        if (mountedLoadingInfoCache && mountedLoadingNo) {
            this.loadingList.push(mountedLoadingInfoCache);
            this.loading_no = mountedLoadingNo;
            this.loadingStart = true;
        }

        eeui.setCaches('mountedLoadingInfoCache', null);
        eeui.setCaches('mountedLoadingNo', null);
    },
    methods: {
        getLoadingData (onSuc, onErr) {
            const self = this;
            function onError (err) {
                if (onErr) {
                    onErr(err);
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
                    // 541374
                    result.forEach(v => {
                        let d = v.data,
                            loadingInfo = {};
                        if (d[0] == self.loading_no) {
                            loadingInfo.oid = d[0];
                            loadingInfo.BatchNo = d[1];
                            loadingInfo.TotalWeight = d[2];
                            loadingInfo.MeasureUnitId = d[3];
                            loadingInfo.Qty = d[4];
                            loadingInfo.MaterialCode = d[5];
                            loadingInfo.MaterialName = d[6];
                            loadingInfo.MaterialType = d[7];
                            loadingInfo.MaterialGroup = d[8];
                            loadingInfo.BarrelShape = d[9];
                            loadingInfo.PlanDeliveryDate = d[10];
                            loadingInfo.SourceNo = d[11];
                            loadingInfo.SourceNum = d[12];
                            loadingInfo.WarehouseId = d[13];
                            loadingInfo.TransportTypeId = d[14];
                            self.loadingList.push(loadingInfo);
                            onSuc && onSuc(res);
                            eeui.setCaches('mountedLoadingNo', self.loading_no, 0);
                            eeui.setCaches('mountedLoadingInfoCache', loadingInfo, 0);
                        }
                    })
                }
            }
            api.SVR.invokeService('Loading', [], onSuccess, onError);
        },
        itemClick (item) {
            console.log(item);
            eeui.setCaches('loadingInfo', item, 0);
            api.openPage('loading_work.js');
        },
        searchEnd () {
            this.loadingStart = true;
            this.getLoadingData();
        },
        openScaner () {
            const self = this;
            api.openScaner({
                desc: ''
            }, res => {
                if (res.status == 'success') {
                    self.loading_no = JSON.parse(res.text).no;
                    self.searchEnd();
                } else if (res.status == 'error') {
                    console.log(res.source);
                }
            })
        },
        longpress () {
            const poster = this.$refs.poster;
            poster.save(res => {
                if (res.success) {
                    eeui.toast({
                        message: '保存成功',
                        duration: 3000
                    });
                } else {
                    eeui.toast(res.errorDesc);
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
        color: rgb(255, 255, 255);
        font-size: 28px;
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

    .scroller {
        width: 750px;
        flex: 1;
        height: 1000px;
    }

    .search-area {
        width: 690px;
        height: 160px;
        box-sizing: border-box;
        margin: 30px;
        background-color: rgb(35, 35, 35);
        justify-content: center;
        align-items: center;
    }

    .input-container {
        flex-direction: row;
        align-items: center;
    }

    .search-input {
        width: 400px;
        height: 50px;
        line-height: 28px;
        color: rgb(255, 255, 255);
        font-size: 28px;
        background-color: rgb(102, 102, 102);
        border-radius: 4px;
        padding-left: 12px;
    }

    .scaner-container {
        margin-top: 300px;
        justify-content: center;
        align-items: center;
    }

    .scaner {
        width: 300px;
        height: 300px;
    }

    .wrapper {
        padding: 30px;
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
 
</style>