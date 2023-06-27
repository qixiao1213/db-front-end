<template>
    <Layout>
        <div class="box">
            <div class="box-content">
                <Suspense>
                    <template #default>
                        <!-- 异步加载的内容 -->
                        <div v-if="isLoading">正在加载数据...</div>
                        <div v-else>
                            <el-card class="box-card">
                                <template #header>
                                    <div class="card-header">
                                        <el-table :data="data?.comment" style="width: 100%" max-height='700'>
                                            <el-table-column fixed label="Date" prop="create_time" width="180" />
                                            <el-table-column label="楼层" prop="floor" width="60" />
                                            <el-table-column label="Content" prop="comment_content" width="600" />
                                        </el-table>
                                    </div>
                                </template>
                            </el-card>
                        </div>
                    </template>
                    <template #fallback>
                        <!-- 异步加载时的占位内容 -->
                        <div>正在加载组件...</div>
                    </template>
                </Suspense>
            </div>
        </div>
    </Layout>
</template>
<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPostById } from '../server/index'
import { type Post_ComList } from '../interface/index'

import Layout from '../layout/Layout.vue'
const route = useRoute()

const data: Ref<Post_ComList | undefined> = ref()
const isLoading = ref(true)
onMounted(async () => {
    // 发起异步请求获取数据
    try {
        const response = await getPostById(route.params.id as string);
        data.value = await response.data;
        await console.log(data);
    } catch (error) {
        console.error('数据加载失败', error);
    } finally {
        isLoading.value = false; // 数据加载完成，设置isLoading为false
    }
});
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]
</script>
<style lang='less' scoped>
.box {
    position: fixed;

    &-content {
        width: 60em;
        left: 50em;
        top: 20vh;
        position: relative;
        padding: 20px 40px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        z-index: 1;
        transform: 0.5s;
        color: #fff;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
}

.card-header {
    display: flex;
}

.box-card {
    position: relative;
    width: 60em;
    height: 60vh;
}
</style>