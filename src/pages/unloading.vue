<template>
    <div class="app">
        <topHeader :title="'卸货'" :url="'home.js'"></topHeader>

        <div class="content">
            <div class="row">
                <text class="tag">到货单号：</text>
                <input 
                    type="text"
                    class="input"
                    return-key-type="done"
                    v-model="materialNo"
                >
                <button 
                    class="button" 
                    :text="startUnloadingBtnTxt"
                    @click="startUnloading"
                ></button>
            </div>            
            <div class="row">
                <text class="tag">开始时间：</text>
                <text class="name">{{ startDate }}</text>
            </div>
        </div>
        
        <scroll-view class="tab-page">
            <wxc-tab-page 
                ref="wxc-tab-page"
                :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                :tab-page-height="1200"
                title-type="icon"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected"
            >   
                <div class="pan-item-container">
                    <div v-if="panItemShow">
                        <div 
                            v-for="v in loadingWorkInfoList"
                            :key="v.oid"
                            class="pan-item-content"
                        >
                            <div class="pan-item">
                                <div class="pan-item-row">
                                    <text class="text">物料编号：</text>
                                    <text class="text">{{ v.MaterialCode }}</text>
                                </div>
                                <div class="pan-item-row">
                                    <text class="text">物料名称：</text>   
                                    <text class="text">{{ v.MaterialName }}</text>  
                                </div>
                                <div class="pan-item-row">
                                    <text class="text">物料类型：</text>
                                    <text class="text">{{ v.MaterialType }}</text> 
                                </div>
                                <div class="pan-item-row">
                                    <text class="text">重量：</text>
                                    <text class="text">{{ v.TotalWeight }}</text> 
                                    <text class="text">{{ v.MeasureUnit }}</text>
                                </div>
                            </div>
                            <div class="pan-item">
                                <div class="pan-item-row">
                                    <text class="text">件数：</text>
                                    <text class="text">{{ v.Qty }}</text>
                                    <!-- <input 
                                        type="number" 
                                        v-model="v.Qty"
                                        class="pan-item-input-fill"
                                        return-key-type="done"
                                    > -->
                                </div>
                                <div class="pan-item-row">
                                    <text class="text">实际批次号：</text>
                                    <text class="text"></text> 
                                    <button 
                                        class="batch-button" 
                                        text="批次" 
                                        mode="blue"
                                        @click="batchClick"
                                    ></button>
                                </div>                            
                                <div class="pan-item-row">
                                    <text class="text">计划到货日期：</text>
                                    <text class="text">{{ v.PlanDeliverDate }}</text>
                                </div>                                
                                <div class="pan-item-row">
                                    <text class="text">运输方式：</text>
                                    <text class="text">{{ v.transportTypeId }}</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="scaner-container occupancy" v-else>
                        <image src="root://images/new_scaner.png" class="scaner" @click="openScaner"></image>
                    </div>
                </div>
                <div class="pan-item-container">
                    <div v-if="panItemShow">
                        <image 
                            v-for="(src, index) in cameraPicList"
                            :src="src"
                            :key="index"
                            class="attachment-pic"
                            @click="cameraPicHandle(src)"
                        ></image>
                        <image 
                            src="root://images/add_pic.png" 
                            class="attachment-pic"
                            @click="getPic"
                        ></image>
                    </div>
                    <v-else style="width: 750px; height:1200px; background-color: rgb(0, 0, 0)"></v-else>
                </div>
            </wxc-tab-page>
        </scroll-view>
        
        <wxc-dialog
            title="操作"
            content="删除该照片？"
            :show="dialogShow"
            :single="false"
            :show-no-prompt="false"
            @wxcDialogCancelBtnClicked="wxcDialogCancelBtnClicked"
            @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked"
        ></wxc-dialog>
    </div>
</template>

<script>
const eeui = app.requireModule('eeui');
import { WxcTabPage, WxcPanItem, BindEnv, WxcDialog } from 'weex-ui';
import topHeader from '@/components/topHeader';
import Config from '@/config/tabPage_unloading.js';
import api from '@/API';
export default {
    name: 'loading_work',
    components: { WxcTabPage, WxcPanItem, WxcDialog, topHeader },
    data () {
        return {
            startUnloadingBtnTxt: '开始卸货',
            materialNo: '',
            materialName: '',
            startDate: '',
            selected: 0,
            tabTitles: Config.tabTitles,
            tabStyles: Config.tabStyles,
            loadingWorkInfoList: [{
                id: 0,
                weight: '',
                count: '',
                // 指定批次号
                pNo: '',
                // 实际批次号
                aNo: '',
                // 指定仓库号
                pStock: '',
                // 实际仓库号
                aStock: '',
                barrelType: ''
            }],
            panItemShow: false,            
            dialogShow: false,
            cameraPicList: [],
            deletePicSrc: ''
        }
    },
    mounted () {
        // this.$refs.app.addEventListener('click', function () {
        //     eeui.keyboardHide();
        // }, false);
        // let loadingInfo = eeui.getCaches('loadingInfo'),
        //     batchInfo = eeui.getCaches('selectedBatch');
        // if (loadingInfo) {
        //     this.materialNo = loadingInfo.no;
        //     this.materialName = loadingInfo.name;
        //     this.startDate = loadingInfo.date;
        // } 
        // if (batchInfo) {
        //     this.startLoading();
        //     let loadingWorkInfo = {
        //         weight: '',
        //         count: '',
        //         // 指定批次号
        //         pNo: '',
        //         // 实际批次号
        //         aNo: '',
        //         // 指定仓库号
        //         pStock: '',
        //         // 实际仓库号
        //         aStock: '12',
        //         barrelType: ''
        //     };
        //     loadingWorkInfo.count = batchInfo.count;
        //     loadingWorkInfo.aNo = batchInfo.aNo;
        //     this.loadingWorkInfoList.push(loadingWorkInfo);
        //     console.log(this.loadingWorkInfoList);
        // }

        // eeui.setCaches('selectedBatch', null);
    },
    methods: {
        getUnloadingData () {
            const self = this;
            function onErr (err) {
                console.log(err);
                eeui.toast({
                    message: err,
                    gravity: 'middle'
                })
            }
            function onSuccess (res) {
                if (res.status == 'success') {
                    let result = res.result.data.all_data_rows;
                    result.forEach(v => {
                        let d = v.data,
                            unloadInfo = {};
                        unloadInfo.oid = d[0];
                        unloadInfo.MaterialCode = d[1];
                        unloadInfo.MaterialName = d[2];
                        unloadInfo.MaterialType = d[3];
                        unloadInfo.TotalWeight = d[4];
                        unloadInfo.MeasureUnit = d[5];
                        unloadInfo.Qty = d[6];
                        unloadInfo.PlanDeliverDate = d[7];
                        unloadInfo.transportTypeId = d[8];
                        self.loadingWorkInfoList.push(unloadInfo);
                    }) 
                }
            }
            api.SVR.invokeService('Unload', ['SHFJ-DHD202008010025'], onSuccess, onErr);
        },
        startUnloading () {
            if (!this.panItemShow) {
                this.panItemShow = true;
                this.startUnloadingBtnTxt = '卸货完成';
                this.getUnloadingData();
            }
        },
        batchClick () {
            api.openPage('batch_fill.js');
        },
        wxcTabPageCurrentTabSelected () {
        },
        wxcPanItemPan (e) {
            if (BindEnv.supportsEBForAndroid()) {
                this.$refs['wxc-tab-page'].bindExp(e.element);
            }
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
        },
        // 处理图片
        wxcDialogCancelBtnClicked () {
            this.dialogShow = false;
        },
        wxcDialogConfirmBtnClicked () {
            const self = this;
            this.cameraPicList.forEach((pic, index) => {
                if (self.deletePicSrc == pic) {
                    self.cameraPicList.splice(index, 1);
                }
            });  
            this.dialogShow = false;
        },
        cameraPicHandle (src) {
            this.deletePicSrc = src;
            this.dialogShow = true;
        },
        getPic () {
            const self = this;
            api.pic({}, res => {
                if (res.status == 'success') {
                    self.cameraPicList.push(res.lists[0].path);
                }
            })
        },
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

    .content {
        padding: 30px;
        padding-bottom: 0;
        flex-direction: column;
    }

    .row {
        flex-direction: row;
        margin-bottom: 20px;
        align-items: center;
        justify-content: flex-start;
        height: 40px;
    }

    .button {
        width: 160px;
        height: 60px;
        font-size: 22px;
        position: absolute;
        right: 0;
        background-color: rgb(49, 80, 176);
    }

    .name {
        justify-self: flex-start;
    }

    .tag, .name {
        color:rgb(255, 255, 255);
        font-size: 28px;
    }

    .tab-page {
        flex: 1;
        width: 750px;
        height: 1200px;
        background-color: rgb(0, 0, 0);
    }

    .pan-item-container {
        width: 750px;
        flex: 1;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: rgb(0, 0, 0);
    }

    .pan-item-content {
        width: 750px;
        padding: 30px;
        background-color: rgb(0, 0, 0);
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-start;
        border-bottom-color: rgb(255, 255, 255);
        border-bottom-style: solid;
        border-bottom-width: 2px;
    }

    .pan-item-row {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .batch-button {
        width: 80px;
        height: 38px;
        background-color: rgb(49, 80, 176);
    }

    .pan-item-iconr {
        width: 50px;
        height: 50px;
        color: rgb(255, 255, 255);
        z-index: 99;
    }

    .pan-item-input {
        width: 140px;
        height: 50px;
        line-height: 50px;
        color: rgb(255, 255, 255);
    }

    .pan-item-input-fill {
        width: 240px;
        height: 50px;
        line-height: 50px;
        color: rgb(255, 255, 255);
    }

    .occupancy {
        width: 750px;
        height: 1200px;
        background-color: black;
        justify-content: flex-start;
        align-items: center;
        margin-top: 400px;
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
    
    .attachment-pic {
        width: 750px;
        height: 300px;
        padding: 30px;
    }

    .input {
        width: 360px;
        height: 40px;
        line-height: 30px;
        color: rgb(255, 255, 255);
        font-size: 28px;
    }
</style>