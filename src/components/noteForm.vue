<template>
    <el-form :model="form" label-width="120px" v-if="isVisual">
        <el-form-item label="内容">
            <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">留言</el-button>
            <!-- <el-button>Cancel</el-button> -->
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { noteForm } from '@/server';

const props = defineProps(['user_id'])

let isVisual = ref(true)
const form = reactive({
    content: '',
})



const onSubmit = async () => {
    const res = await noteForm(form.content, props.user_id)
    if (res.status === 200) {
        form.content = ''
        alert('留言成功')
    }

}
</script>
  