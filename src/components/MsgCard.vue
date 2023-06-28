<template>
  <Suspense>
    <template #default>
      <!-- 异步加载的内容 -->
      <div v-if="isLoading">正在加载数据...</div>
      <div v-else>
        <!-- 数据加载完成后要渲染的内容 -->
        <el-table :data="data" style="width: 100%" max-height="30em">
          <el-table-column label="ID" v-if="props.isAdmin" prop="message_id" width="100" />
          <el-table-column label="Date" prop="create_time" width="200" />
          <el-table-column label="内容" prop="message_content" width="300" />
          <el-table-column align="right" label="操作" width="100" v-if="props.isAdmin">
            <template #default="scope">
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
import { delMsg, getUserMsgList } from '@/server';

import { type Message } from '../interface/index'
const isLoading = ref(true); // 标记数据是否正在加载
let data = ref(null); // 异步加载的数据
const props = defineProps(['isAdmin']);

const handleDelete = async (index: number, row: Message) => {
  await delMsg(row.message_id)
  const response = await getUserMsgList();
  data.value = await response.data;
  await alert("删除成功")
}

onMounted(async () => {
  // 发起异步请求获取数据
  try {
    const response = await getUserMsgList();
    data.value = await response.data;
  } catch (error) {
    console.error('数据加载失败', error);
  } finally {
    isLoading.value = false; // 数据加载完成，设置isLoading为false
  }
});

</script>
  