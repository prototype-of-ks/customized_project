<template>
    <div class="app">
        <topHeader :title="'装货作业'" :url="'loading.js'"></topHeader>

        <div class="content">
            <div class="row">
                <text class="tag">物料编号：</text>
                <text class="name">{{ materialNo }}</text>
                <button 
                    class="button" 
                    :text="startLoadingBtnTxt"
                    @click="startLoading"
                ></button>
            </div>            
            <div class="row">
                <text class="tag">物料名称：</text>
                <text class="name">{{ materialName }}</text>
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
                <div
                    class="pan-item-container"
                >
                    <div v-if="panItemShow">
                        <div 
                            v-for="v in loadingWorkInfoList"
                            :key="v.id"
                            class="pan-item-content"
                        >
                            <div class="pan-item">
                                <div class="pan-item-row">
                                    <text class="text">重量：</text>
                                    <input 
                                        type="number" 
                                        v-model="v.weight" 
                                        class="pan-item-input"
                                        return-key-type="done"
                                    >
                                    <text class="text">公斤</text>
                                    <icon content="md-search" class="pan-item-iconr"></icon>
                                </div>
                                <div class="pan-item-row">
                                    <text class="text">指定批次号：</text>   
                                    <text class="text">{{ v.pNo }}</text>  
                                </div>
                                <div class="pan-item-row">
                                    <text class="text">指定仓库：</text>
                                    <text class="text">{{ v.pStock }}</text> 
                                </div>
                                <div class="pan-item-row">
                                    <text class="text">桶型：</text>
                                    <text class="text">{{ v.barrelType }}</text> 
                                    <text class="text">桶型</text>
                                </div>
                            </div>
                            <div class="pan-item">
                                <div class="pan-item-row">
                                    <text class="text">件数：</text>
                                    <input 
                                        type="number" 
                                        v-model="v.count"
                                        class="pan-item-input-fill"
                                        return-key-type="done"
                                    >
                                </div>
                                <div class="pan-item-row">
                                    <text class="text">实际批次号：</text>
                                    <text class="text">{{ v.aNo }}</text> 
                                    <button 
                                        class="batch-button" 
                                        text="批次" 
                                        mode="blue"
                                        @click="batchClick"
                                    ></button>
                                </div>                            
                                <div class="pan-item-row">
                                    <text class="text">实际仓库：</text>
                                    <input 
                                        type="text" 
                                        v-model="v.aStock"
                                        class="pan-item-input"
                                        return-key-type="done"
                                    >
                                    <icon content="md-search" class="pan-item-iconr"></icon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <v-else 
                        style="width: 750px; height: 1200px; background-color: rgb(0, 0, 0)"
                    ></v-else>
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
                    <v-else style="width: 750px; height:1000px; background-color: rgb(0, 0, 0)"></v-else>
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
import Config from '@/config/tabPage.js';
import api from '@/API';
import topHeader from '@/components/topHeader';
export default {
    name: 'loading_work',
    components: { WxcTabPage, WxcPanItem, WxcDialog, topHeader },
    data () {
        return {
            startLoadingBtnTxt: '开始装货',
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
        let loadingInfo = eeui.getCaches('loadingInfo'),
            batchInfo = eeui.getCaches('selectedBatch');
        if (loadingInfo) {
            this.materialNo = loadingInfo.no;
            this.materialName = loadingInfo.name;
            this.startDate = loadingInfo.date;
        } 
        if (batchInfo) {
            this.startLoading();
            let loadingWorkInfo = {
                weight: '',
                count: '',
                // 指定批次号
                pNo: '',
                // 实际批次号
                aNo: '',
                // 指定仓库号
                pStock: '',
                // 实际仓库号
                aStock: '12',
                barrelType: ''
            };
            loadingWorkInfo.count = batchInfo.count;
            loadingWorkInfo.aNo = batchInfo.aNo;
            this.loadingWorkInfoList.push(loadingWorkInfo);
        }

        eeui.setCaches('selectedBatch', null);
    },
    methods: {
        startLoading () {
            if (this.panItemShow) {
                console.log('装货完成');
            }
            // eeui.openPage({
            //     url: 'test.js',
            //     pageType: 'app'
            // })
            this.startLoadingBtnTxt = '装货完成';
            this.panItemShow = true;
        },
        batchClick () {
            eeui.openPage({
                url: 'batch_fill.js',
                pageType: 'app',
                animated: true,
                animatedType: 'push'
            })
        },
        wxcTabPageCurrentTabSelected () {
        },
        wxcPanItemPan (e) {
            if (BindEnv.supportsEBForAndroid()) {
                this.$refs['wxc-tab-page'].bindExp(e.element);
            }
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
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
        border-bottom-color: rgb(255, 255, 255);
        border-bottom-style: solid;
        border-bottom-width: 2px;
    }

    .pan-item {
        width: 330px;
    }

    .pan-item-row {
        width: 330px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
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

    .attachment-pic {
        width: 750px;
        height: 300px;
        padding: 30px;
    }
</style>