<template>
    <el-form :model="form" label-width="120px" v-if="isVisual">
        <el-form-item label="评论内容">
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
import { commentForm } from '@/server';

const props = defineProps(['post_id'])

let isVisual = ref(true)
let form = reactive({
    content: '',
})

const onSubmit = async () => {
    const res = await commentForm(props.post_id as string, form.content)
    if (res.status === 200) {
        form.content = ''
        alert('评论成功')
    }

}
</script>
  