<template>
    <el-form :model="form" label-width="120px" v-if="isVisual">
        <el-form-item label="标题">
            <el-input v-model="form.titile" />
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


const form = reactive({
    titile: '',
    content: '',
})
let isVisual = ref(true)


const onSubmit = async () => {
    const res = await postForm(form.titile, form.content, props.user_id)
    await console.log(res);
}
</script>
  