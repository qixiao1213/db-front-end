<template>
  <Layout>
    <div class="box">
      <div class="box-content">
        <PostUserCard></PostUserCard>
      </div>
      <div class="box-new">
        <PostForm :user_id="user_id" ></PostForm>
      </div>
    </div>
  </Layout>
</template>
<script setup lang="ts">
import Layout from '../layout/Layout.vue'
import PostForm from '../components/PostForm.vue';
import PostUserCard from '../components/PostUserCard.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const user_id = route.params.id

</script>
<style lang='less' scoped>


.box {
  position: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &-content {
    width: 60em;
    left: 50em;
    top: 10em;
    max-height: 20em;
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
    justify-content: center;
    align-items: center;

    PostForm {
      position: relative;
    }
  }

  &-new {
    width: 30em;
    left: 65em;
    top: 20em;
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
    justify-content: center;
    align-self: center;

    PostForm {
      position: relative;
    }
  }
}
</style>