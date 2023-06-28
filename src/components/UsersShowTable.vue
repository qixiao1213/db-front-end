<template>
  <Suspense>
    <template #default>
      <!-- 异步加载的内容 -->
      <div v-if="isLoading">正在加载数据...</div>
      <div v-else>
        <el-table :data="filterTableData" style="width: 100%; max-height: 25em; " >
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Name" prop="name" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
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
import { computed, ref } from 'vue'





const search = ref('')

const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}


</script>
  