<template>
    <el-form :model="form" label-width="120px" v-if="isVisual">
        <el-form-item label="违禁词">
            <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">新增违禁词</el-button>
            <!-- <el-button>Cancel</el-button> -->
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { banwordForm } from '@/server';

const props = defineProps(['user_id'])

let isVisual = ref(true)
const form = reactive({
    content: '',
})

const onSubmit = async () => {
    const res = await banwordForm(form.content)
    if (res.status === 200) {
        form.content = ''
        alert('新增违禁词成功')
    }

}
</script>
  