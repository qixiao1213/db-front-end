<template>
    <el-form :model="form" label-width="120px" v-if="isVisual">
        <el-form-item label="标题">
            <el-input v-model="form.titile" />
        </el-form-item>
        <el-form-item label="内容">
            <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { postForm } from '@/server';
import { useUserStore } from '@/stores/counter';

const form = reactive({
    titile: '',
    content: '',
})
const useStore = useUserStore()
let isVisual = ref(false)


const onSubmit = () => {
    postForm(form.titile, form.content, useStore.userId)
}

const onCancel = () => {
    isVisual.value = !isVisual.value;
}

</script>
  