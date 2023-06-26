<template>
    <Login>
        <div class="content">
            <div class="left">
                <UsersShowTables></UsersShowTables>
            </div>
            <div class="center">
                <NoteCard :data=""></NoteCard>
                <MsgCard></MsgCard>
            </div>
            <div class="right">
                <PostMod></PostMod>
            </div>
        </div>
    </Login>
</template>
<script setup lang="ts">
import Login from '../layout/Login.vue'
import { useRouter } from 'vue-router';
import { useUserStore, useNoteStore } from '@/stores/counter';
import { getMsgList, getNoteList, getUserList, getPostList, getNoteById } from '@/server';
import UsersShowTables from '../components/UsersShowTable.vue';
import PostMod from '../components/PostMod.vue'
import NoteCard from '../components/NoteCard.vue';
import MsgCard from '../components/MsgCard.vue'
import { onMounted, ref } from 'vue';

const router = useRouter();
const userStore = useUserStore();

// const msgList = getMsgList()
// const noteList = getMsgList()
// const userList = getUserList()
// const postList  =  getPostList()
</script>


<style lang='less' scoped>
.content {
    display: flex;
    flex-direction: row;
    margin: 0;
    position: relative;
    width: 100%;
}

.left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    left: 5em;
}

.center {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 10em;
    width: 30%;
}

.right {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 15em;
    width: 25%;
}
</style>