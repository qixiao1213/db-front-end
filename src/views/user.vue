<template>
    <Layout>
        <div class="box">
            <div class="box-content">
                <span @click="toBBs">进入论坛</span>
                <UserTable :uid="<string>uid"></UserTable>
            </div>
        </div>
    </Layout>
</template>
<script setup lang="ts">
import UserTable from '../components/UserTable.vue';
import Layout from '../layout/Layout.vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const uid = route.params.id
const url = '/bbs/' + uid
const toBBs = () => {
    router.push(url)
}

</script>
<style lang='less' scoped>
.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60em;

    &-content {
        width: 30%;
        position: relative;
        padding: 20px 40px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        z-index: 1;
        transform: 0.5s;
        color: #fff;

    }
}
</style>