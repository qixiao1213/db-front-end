<template>
    <Layout>
        <div class="box">
            <span></span>
            <div class="box-content">
                <input type="text" placeholder="输入用户名" v-model="userId">
                <input type="password" placeholder="输入密码" v-model="password">
                <button @click="signIn(userId, password)">登录</button>
            </div>
        </div>
    </Layout>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { signIn } from '@/server/index'
import Layout from '../layout/Layout.vue'

const userId = ref<number>()
const password = ref('')

</script>
<style lang='less' scoped>

.box {
    &-content {
        left: 50%;
        top: 50%;
        transform: translate(-50%, 50%);
        position: relative;
        width: 800px;
        height: 600px;
        padding: 20px 40px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        z-index: 1;
        transform: 0.5s;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}

.box-content {
    input {
        position: relative;
        border: none;
        height: 2em;
        width: 200px;
        background: #8db9caa6;
        font-size: 1em;
        outline: none;
        transition: all 0.3s;
        margin-bottom: 30px;
    }

    input:focus {
        border-radius: 5px;
        width: 250px;
        background: #8db9ca5a;
    }

    button {
        position: relative;
        left: 4em;
        border: none;
        font-family: sans-serif;
        font-size: 17px;
        background: transparent;
        color: #006bb3;
        border: solid 1px rgba(0, 107, 179, 0.2);
        padding: 10px;
        border-radius: 4px;
        transition-duration: 0.2s;
    }

    button:before {
        content: "»";
        opacity: 0;
        margin-left: -15px;
        transition-duration: 0.2s;
    }

    button:hover:before {
        margin-left: 0px;
        opacity: 1;
    }

    button:hover {
        color: black;
        background: rgba(0, 0, 0, 0.02);
        border: solid 1px gainsboro;
    }
}
</style>