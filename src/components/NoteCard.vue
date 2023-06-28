<template>
  <Suspense>
    <template #default>
      <!-- 异步加载的内容 -->
      <div v-if="isLoading">正在加载数据...</div>
      <div v-else>
        <!-- 数据加载完成后要渲染的内容 -->
        <el-table :data="data" style="width: 100%" max-height="30em">
          <el-table-column label="ID" v-if="props.isAdmin" prop="announce_id" width="100" />
          <el-table-column label="Date" prop="announce_type" width="200" />
          <el-table-column label="内容" prop="announce_content" width="300" />
          <el-table-column label="操作" v-if="props.isAdmin" width="100" align="right">
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
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

import { delNote, getNoteList } from '@/server';
import { type Note } from '../interface/index'
const isLoading = ref(true); // 标记数据是否正在加载
let data = ref(null); // 异步加载的数据
const props = defineProps(['isAdmin']);
const handleEdit = (index: number, row: Note) => {
  console.log(index, row)
}
const handleDelete = async (index: number, row: Note) => {
  await delNote(row.announce_id)
  const response = await getNoteList();
  data.value = await response.data;
  await alert("删除成功")
}

onMounted(async () => {
  // 发起异步请求获取数据
  try {
    const response = await getNoteList();
    data.value = await response.data;
  } catch (error) {
    console.error('数据加载失败', error);
  } finally {
    isLoading.value = false; // 数据加载完成，设置isLoading为false
  }
});




</script>
  