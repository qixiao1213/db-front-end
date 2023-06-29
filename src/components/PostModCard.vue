<template>
  <Suspense>
    <template #default>
      <!-- 异步加载的内容 -->
      <div v-if="isLoading">正在加载数据...</div>
      <div v-else>
        <!-- 数据加载完成后要渲染的内容 -->
        <el-table :data="data" style="width: 100%;" max-height="50em">
          <el-table-column label="帖子ID" prop="post_id" width="100" />
          <el-table-column label="评论ID" prop="comment_id" width="100" />
          <el-table-column label="时间" prop="create_time" width="200" />
          <el-table-column label="内容" prop="content" width="300" />
          <el-table-column label="状态" prop="examine_state" width="100" />
          <el-table-column align="right" v-if="props.isAdmin" width="100">
            <template #default="scope">
              <el-button size="small" @click="handleChecked(scope.$index, scope.row)">通过</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
import { onMounted, ref, type Ref } from 'vue'
import { getPostModList, delMsg, delNote, delPost, delComment, postCheck, commentCheck } from '@/server';
import { type Post, type PostCheck } from '../interface'
const isLoading = ref(true); // 标记数据是否正在加载
let data: Ref<PostCheck | undefined> = ref(); // 异步加载的数据
const props = defineProps(['isAdmin']);

onMounted(async () => {
  // 发起异步请求获取数据
  try {
    const response = await getPostModList();
    data.value = await response.data.check; 
  } catch (error) {
    console.error('数据加载失败', error);
  } finally {
    isLoading.value = false; // 数据加载完成，设置isLoading为false
  }
});


const handleChecked = async (index: number, row: PostCheck) => {
  if (row.comment_id === undefined) {
    await postCheck(row.post_id)
    const response = await getPostModList();
    data.value = await response.data.check;
    await alert('审核完成！')
  }
  else {
    await commentCheck(row.comment_id)
    const response = await getPostModList();
    data.value = await response.data.check;
    await alert('审核完成！')
  }
}
const handleDelete = async (index: number, row: PostCheck) => {
  if (row.comment_id === undefined) {
    await delPost(row.post_id)
    const response = await getPostModList();
    data.value = await response.data.check;
    await alert('删除成功')
  }
  else {
    await delComment(row.comment_id)
    const response = await getPostModList();
    data.value = await response.data.check;
    await alert('删除成功')
  }
}


</script>
  