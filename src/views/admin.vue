<template>
    <Login>
        <div class="content">
            <div class="content-left">
                <UserCard></UserCard>
                <BanWord></BanWord>
            </div>
            <div class="content-center">
                <NoteCard :isAdmin="isAdmin"></NoteCard>
                <MsgCard :isAdmin="isAdmin"></MsgCard>
            </div>
            <div class="content-right">
                <PostModCard :isAdmin="isAdmin"></PostModCard>
            </div>
        </div>
    </Login>
</template>
<script setup lang="ts">
import Login from '../layout/Login.vue'
import { useRouter } from 'vue-router';
import PostModCard from '../components/PostModCard.vue'
import NoteCard from '../components/NoteCard.vue';
import MsgCard from '../components/MsgCard.vue'
import UserCard from '../components/UserCard.vue'
import BanWord from '@/components/BanWord.vue';

const router = useRouter();

const isAdmin = true

</script>


<style lang='less' scoped>
.content {
    display: flex;
    flex-direction: row;
    margin: 0;
    position: relative;
    width: 100%;
    justify-content: center;

    &-left {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    &-center {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 50px;
        margin-right: 50px;
    }

    &-right {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
}
</style>