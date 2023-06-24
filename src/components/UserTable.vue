<template>
  <el-descriptions class="margin-top" title="校友信息" :column="3" :size="size" border>
    <template #extra>
      <el-button type="primary" @click="isVisual = !isVisual">编辑</el-button>
    </template>
    <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          姓名
        </div>
      </template>
      {{ props.user.username }}
    </el-descriptions-item>
    <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          昵称
        </div>
      </template>
      {{ props.user.nickname }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          电子邮件
        </div>
      </template>
      {{ props.user.email }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          出生日期
        </div>
      </template>
      {{ props.user.birthday }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          性别
        </div>
      </template>
      {{ props.user.gender }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          民族
        </div>
      </template>
      {{ props.user.ethnicity }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          专业
        </div>
      </template>
      {{ props.user.major }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">

          入学日期
        </div>
      </template>
      {{ props.user.enrol_date }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          毕业日期
        </div>
      </template>
      {{ props.user.graduate_date }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          住址
        </div>
      </template>
      {{ props.user.position ? props.user.position : '无' }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          微博
        </div>
      </template>
      {{ props.user.weibo_url ? props.user.weibo_url : '无' }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          github
        </div>
      </template>
      {{ props.user.github_url? props.user.github_url : '无' }}
    </el-descriptions-item> <el-descriptions-item v-if="isVisual">
      <template #label>
        <div class="cell-item">
          工作单位
        </div>
      </template>
      {{ props.user.company?props.user.company : '无' }}
    </el-descriptions-item>
  </el-descriptions>
</template>
  
<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'

import { type UserInfo } from '../interface/index'

const props = defineProps({
  user: {
    type: Object as () => UserInfo,
    required: true,
  },
})



const isVisual = ref<boolean>(true)
const size = ref('large')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap.large,
  }
})
const blockMargin = computed(() => {
  const marginMap = {
    large: '50px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap.large,
  }
})
</script>
  
<style lang="less" scoped>
.el-descriptions {
  margin-top: 20px;
}

.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}
</style>
  