<template>
  <Layout>
    <div class="box">

      <div class="box-content">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="id" width="180" v-if="false" />
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="楼主" width="180" />
          <el-table-column prop="preview" label="标题" />
          <el-table-column fixed="right" label="操作" width="120">
            <template #default="{ row }">
              <el-button link type="primary" size="small" @click="handleClick(row)">进入详情页</el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>
      <div class="box-new">
        <PostForm></PostForm>
      </div>
    </div>
  </Layout>
</template>
<script setup lang="ts">
import Layout from '../layout/Layout.vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/counter';
import PostForm from '../components/PostForm.vue';

const router = useRouter();
const userStore = useUserStore();
const handleClick = (row: any) => {
  router.push(`/bbs/detail/${row.id}`)
}
const tableData = [
  {
    id: 1,
    date: '2016-05-03',
    name: 'test',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-03',
    name: 'test',
    address: 'No. 189, Grove St, Los Angeles',
  }, {
    id: 3,
    date: '2016-05-03',
    name: 'test',
    address: 'No. 189, Grove St, Los Angeles',
  },
]



</script>
<style lang='less' scoped>
.box {
  position: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &-content {
    width: 60em;
    left: 50em;
    top: 10em;
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
    justify-content: center;
    align-items: center;

    PostForm {
      position: relative;
    }
  }

  &-new {
    width: 30em;
    left: 65em;
    top: 20em;
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
    justify-content: center;
    align-self: center;

    PostForm {
      position: relative;
    }
  }
}
</style>