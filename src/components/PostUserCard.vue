<template>
    <Suspense>
        <template #default>
            <!-- 异步加载的内容 -->
            <div v-if="isLoading">正在加载数据...</div>
            <div v-else>
                <!-- 数据加载完成后要渲染的内容 -->
                <el-table :data="data" fixed style="width: 100%;" max-height="300">
                    <el-table-column prop="post_id" label="id" width="180" v-if="false" />
                    <el-table-column prop="create_time" label="日期" width="180" />
                    <el-table-column prop="post_type" label="类型" width="100" />
                    <el-table-column prop="post_title" label="标题" width="500"/>
                    <el-table-column fixed="right" label="操作" width="120">
                        <template #default="{ row }">
                            <el-button link type="primary" size="small" @click="handleClick(row)">进入详情页</el-button>
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
<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostList } from '@/server';
import { type Post } from '../interface'

const router = useRouter()


const handleClick = (row: any) => {

    router.push(`/bbs/detail/${row.post_id}`)
}

const data = ref()
const isLoading = ref(true)
onMounted(async () => {
    // 发起异步请求获取数据
    try {
        const response = await getPostList();
        data.value = await response.data;
        await console.log(data);
    } catch (error) {
        console.error('数据加载失败', error);
    } finally {
        isLoading.value = false; // 数据加载完成，设置isLoading为false
    }
});

</script>
<style lang='less' scoped></style>