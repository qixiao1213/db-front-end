<template>
    <Login>
        <div class="left">
            <UsersShowTables></UsersShowTables>
        </div>
    </Login>
</template>
<script setup lang="ts">
import Login from '../layout/Login.vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/counter';
import UsersShowTables from '../components/UsersShowTable.vue';
const router = useRouter();
const userStore = useUserStore();

</script>
<style lang='less' scoped>
.left {
    position: relative;
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
}
</style>