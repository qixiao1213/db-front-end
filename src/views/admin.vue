<template>
    <Login>
        <div class="content">
            <div class="left">
                <UsersShowTables></UsersShowTables>
            </div>
            <div class="center">
                <NoteCard></NoteCard>
                <MsgCard></MsgCard>
            </div>
            <div class="right">
                <PostModCard></PostModCard>
            </div>
        </div>
    </Login>
</template>
<script setup lang="ts">
import Login from '../layout/Login.vue'
import { useRouter } from 'vue-router';
import UsersShowTables from '../components/UsersShowTable.vue';
import PostModCard from '../components/PostModCard.vue'
import NoteCard from '../components/NoteCard.vue';
import MsgCard from '../components/MsgCard.vue'

const router = useRouter();
import { useUserStore, useNoteStore, useMsgStore, usePostStore } from '@/stores/counter';
const userStore = useUserStore()
const noteStore = useNoteStore()
const postStore = usePostStore()
const msgStore = useMsgStore()

import { getNoteById } from '@/server';
import { ref } from 'vue';
let data = ref([]);
getNoteById(1).then((res) => {
    data = res.data
    noteStore.note = <any>data
})

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