<template>
    <el-form :model="form" label-width="120px" v-if="isVisual">
        <el-form-item label="标题">
            <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="内容">
            <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">发帖</el-button>
            <!-- <el-button>Cancel</el-button> -->
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { postForm } from '@/server';

const props = defineProps(['user_id'])

let isVisual = ref(true)
let form = reactive({
    title: '',
    content: '',
})

const onSubmit = async () => {
    const res = await postForm(form.title, form.content)
    if (res.status === 200) {
        form.content = ''
        form.title = ''
        alert('发帖成功')
    }

}
</script>
  