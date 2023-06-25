<template>
    <Layout>
        <div class="box">
            <div class="box-content">
                <PostCard class></PostCard>

            </div>
        </div>
    </Layout>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getPostById } from '../server/index'
import Layout from '../layout/Layout.vue'

import PostCard from '../components/PostCard.vue'
import CommentCard from '../components/CommentCard.vue'
const route = useRoute()


onMounted(() => {
    const postData = getPostById(route.params.id as string)
})

</script>
<style lang='less' scoped>
.box {
    position: fixed;

    &-content {
        width: 50em;
        left: 50em;
        top: 20vh;
        position: relative;
        padding: 20px 40px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        z-index: 1;
        transform: 0.5s;
        color: #fff;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
}
</style>