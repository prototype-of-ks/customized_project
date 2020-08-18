<template>
    <div class="app">
        <navbar class="navbar">
            <navbar-item type="left" @click="wrap">
                <icon content="md-arrow-back" class="iconr"></icon>
            </navbar-item>
            <navbar-item type="title">
                <text class="title">装货</text>
            </navbar-item>
            <navbar-item type="right">
                <icon class="iconr" content="md-refresh"></icon>
            </navbar-item>
        </navbar>

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
                <div class="wrapper"  v-if="searchResult.length">
                    <div 
                        class="content-box" 
                        v-for="result in searchResult" 
                        :key="result.id"
                        @click="itemClick(result)"
                    >
                        <div class="row">
                            <text class="tag">物料编码：</text>
                            <text class="name">{{ result.no }}</text>
                        </div>
                        <div class="row">
                            <text class="tag">物料名称：</text>
                            <text class="name">{{ result.name }}</text>
                        </div>
                        <div class="row-box">
                            <div class="row-item">
                                <text class="tag">物料类型：</text>
                                <text class="name">{{ result.type }}</text>
                            </div>
                            <div class="row-item">
                                <text class="tag">物料组：</text>
                                <text class="name">{{ result.group }}</text>
                            </div>
                        </div>

                        <div class="row-box">
                            <div class="row-item">
                                <text class="tag">发货重量：</text>
                                <text class="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ result.weight }}公斤</text>
                            </div>
                            <div class="row-item">
                                <text class="tag">件数：</text>
                                <text class="name">{{ result.count  }}</text>
                            </div>
                        </div>

                        <div class="row-box">
                            <div class="row-item">
                                <text class="tag">桶型：</text>
                                <text class="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ result.num }}吨桶</text>
                            </div>
                            <div class="row-item">
                                <text class="tag">计划发货日期：</text>
                                <text class="name">{{ result.date }}</text>
                            </div>
                        </div>

                        <div class="row-box">
                            <div class="row-item">
                                <text class="tag">批次号：</text>
                                <text class="name"></text>
                            </div>
                            <div class="row-item">
                                <text class="tag">交货单行号：</text>
                                <text class="name"></text>
                            </div>
                        </div>

                        <div class="row">
                            <text class="tag">仓库：</text>
                            <text class="name"></text>
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
        width: 120px;
        height: 120px;
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

<script>
import api from '@/API';
export default {
    name: 'loading',
    data () {
        return {
            scanerImg: 'root://images/scaner_white.png',
            searchResult: [],
            loading_no: ''
        }
    },
    methods: {
        wrap () {
            eeui.openPage({
                url: 'home.js',
                pageType: 'app',
                animated: true,
                animatedType: 'push'
            })
        },
        itemClick (item) {
            eeui.setCaches('loadingInfo', item, 0);
            eeui.openPage({
                url: 'loading_work.js',
                pageType: 'app',
                animated: true,
                animatedType: 'push'
            });
        },
        searchEnd () {
            let result = {
                id: 0,
                no: '117003-2020206-0',
                name: '合成三乙醇胺 工业级_新桶_铁质_墨绿',
                type: '成品',
                group: '三乙醇胺',
                weight: '345.00',
                count: 678,
                date: '2020-07-15',
            };
            if (this.loading_no == '12345') {
                let array = [];
                array.push(result);
                array.push(result);
                array.push(result);
                array.push(result);
                array.push(result);
                array.push(result);
                this.searchResult = array;
            }
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