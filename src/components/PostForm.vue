<template>
    <el-form :model="form" label-width="120px" v-if="isVisual">
        <el-form-item label="Activity name">
            <el-input v-model="form.titile" />
        </el-form-item>
        <el-form-item label="Activity form">
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

// do not use same name with ref
const form = reactive({
    titile: '',
    content: '',
})

let isVisual = ref(true)


const onSubmit = () => {
    console.log('submit!')
}

const onCancel = () => {
    isVisual.value = !isVisual.value;
}

</script>
  