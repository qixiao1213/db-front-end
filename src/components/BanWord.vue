<template>
    <Suspense>
        <template #default>
            <!-- 异步加载的内容 -->
            <div v-if="isLoading">正在加载数据...</div>
            <div v-else>
                <!-- 数据加载完成后要渲染的内容 -->
                <el-table :data="data" style="width: 100%" max-height="25em">
                    <el-table-column label="违禁词" prop="word" width="300" />
                    <el-table-column align="right" label="操作" width="100">
                        <template #default="scope">
                            <el-button size="small" type="danger"
                                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </template>
        <template #fallback>
            <!-- 异步加载时的占位内容 -->
            <div>正在加载组件...</div>
        </template>
    </Suspense>
</template>
    
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { delBanWord, delMsg, getBanWordList, getUserMsgList } from '@/server';

import { type Message } from '../interface/index'
const isLoading = ref(true); // 标记数据是否正在加载
let data = ref(null); // 异步加载的数据

const handleDelete = async (index: number, row: Message) => {
    await delBanWord(row.message_id)
    const response = await getBanWordList();
    data.value = await response.data;
    await alert("删除成功")
}

onMounted(async () => {
    // 发起异步请求获取数据
    try {
        const response = await getBanWordList();
        data.value = await response.data;
    } catch (error) {
        console.error('数据加载失败', error);
    } finally {
        isLoading.value = false; // 数据加载完成，设置isLoading为false
    }
});

</script>
    