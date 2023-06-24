<template>
    <div class="content">
        <div class="page-header">
            <a href="https://github.com/IllyasvielEin/SchoolMater" target="_blank">
                <img src="https://github.com/favicon.ico">
            </a>
        </div>
        <slot></slot>
        <div class="page-footer">
        </div>
    </div>
    <div class="sidebar">
        <div class="notes">
            <div style="color: black;">通知</div>
            <el-scrollbar>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="Date" width="140" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </el-scrollbar>
        </div>
        <div class="msg">
            <div style="color: black; text-align: center;margin-bottom: 5px;">留言</div>
            <el-scrollbar>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="Date" width="140" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </el-scrollbar>
            <el-button type="primary" :icon="Edit" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>
<style lang="less" scoped>
.content {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
    background-image: -moz-element();
    background-image: url('..//assets/CHUN.JPG');
    opacity: 0.7;
    /* 设置透明度为 0.5 */
}

.page {
    &-header {
        width: 100%;
        height: 50px;
        background: #0e8b9e7c;
        position: fixed;
        left: 0;
        top: 0;
    }

    &-footer {
        width: 100%;
        height: 50px;
        background: #0e8b9e7c;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    &-header:hover {
        -webkit-animation: footer-animation 0.5s;
        animation: footer-animation 0.5s;
    }

    &-footer:hover {
        -webkit-animation: footer-animation 0.5s;
        animation: footer-animation 0.5s;
    }

    .page-header:hover {
        -webkit-animation: footer-animation 0.5s;
        animation: footer-animation 0.5s;
    }

    .page-footer:hover {
        -webkit-animation: footer-animation 0.5s;
        animation: footer-animation 0.5s;
    }
}

img {
    position: relative;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
}

.sidebar {
    position: fixed;
    width: 30em;
    height: 80vh;
    top: 6em;
    left: 2em;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1;
    transform: 0.5s;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;

    .msg {
        width: 20em;
        height: 16em;
        font-size: 1.5em;
        font-weight: bold;
        margin-top: 2em;
    }

    .notes {
        width: 20em;
        height: 16em;
        font-size: 1.5em;
        font-weight: bold;

        div {
            position: relative;
            text-align: center;
            margin-bottom: 5px;
        }
    }
}
</style>


