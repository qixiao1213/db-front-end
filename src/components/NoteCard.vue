<template>
  <Suspense>
    <template #default>
      <!-- 异步加载的内容 -->
      <div v-if="isLoading">正在加载数据...</div>
      <div v-else>
        <!-- 数据加载完成后要渲染的内容 -->
        <el-table :data="data" style="width: 100%; max-height: 25em; ">
          <el-table-column label="Date" prop="announce_type" />
          <el-table-column label="Name" prop="announce_content" />
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

import { getNoteById } from '@/server';
const isLoading = ref(true); // 标记数据是否正在加载
let data = ref(null); // 异步加载的数据

interface Note {
  announce_type: string
  announce_content: string
}

onMounted(async () => {
  // 发起异步请求获取数据
  try {
    const response = await getNoteById(2020218023);
    data.value = await response.data;
  } catch (error) {
    console.error('数据加载失败', error);
  } finally {
    isLoading.value = false; // 数据加载完成，设置isLoading为false
  }
});

</script>
  