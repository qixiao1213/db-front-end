<template>
  <Suspense>
    <template #default>
      <!-- 异步加载的内容 -->
      <div>
        <el-descriptions class="margin-top" title="校友信息" :column="3" :size="size" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                生日
              </div>
            </template>
            {{ data?.birthday ? data.birthday : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                邮箱
              </div>
            </template>
            {{ data?.email_show ? data.email_show : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                入学日期
              </div>
            </template>
            {{ data?.enrollment_date ? data.enrollment_date : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                性别
              </div>
            </template>
            {{ data?.gender ? '男' : '女' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                毕业日期
              </div>
            </template>
            {{ data?.graduation_date ? data.graduation_date : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                专业ID
              </div>
            </template>
            {{ data?.major_id ? data.major_id : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                修改时间
              </div>
            </template>
            {{ data?.modify_time ? data.modify_time : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                昵称
              </div>
            </template>
            {{ data?.nickname_text ? data.nickname_text : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                头像URL
              </div>
            </template>
            {{ data?.portrait_url ? data.portrait_url : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                QQ号码
              </div>
            </template>
            {{ data?.qq_number ? data.qq_number : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                用户ID
              </div>
            </template>
            {{ data?.user_id ? data.user_id : '无' }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                微信号
              </div>
            </template>
            {{ data?.wechat_number ? data.wechat_number : '无' }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </template>
    <template #fallback>
      <div>正在加载组件...</div>
    </template>
  </Suspense>
</template>
  
<script setup lang="ts">
import { computed, ref, onMounted, type Ref } from 'vue'
const props = defineProps({
  uid: {
    required: true
  },
});

const isVisual = ref<boolean>(true)
const size = ref('large')
import { type UserInfo } from '../interface/index'
import { getUserInfo } from '@/server';
import { useRoute, useRouter } from 'vue-router';

let data: Ref<UserInfo | undefined> = ref()// 异步加载的数据
const isLoading = ref<boolean>(true); // 标记数据是否正在加载
const route = useRoute()
const router = useRouter()
onMounted(async () => {
  // 发起异步请求获取数据
  try {
    const response = await getUserInfo(props.uid as string);
    data.value = await response.data;
    await console.log(data);
  } catch (error: any) {
    console.log(error); 
  } finally {
    isLoading.value = false; // 数据加载完成，设置isLoading为false
  }
});



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
  