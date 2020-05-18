<template>
  <div class="app-layout">
    <div class="sidebar">
      <p>チャンネル一覧</p>
      <p v-for="channel in channels" :key="channel">
        <nuxt-link :to="`/channels/${channel.id}`">
          {{ channel.name }}
        </nuxt-link>
      </p>
      <p class="logout">ログアウト</p>
    </div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'

export default {
  data () {
    return {
      channels: []
    }
  },
  mounted () {
    db.collection('channels').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.channels.push({ id: doc.id, ...doc.data() })
        })
        console.log(this.channels)
      })
  }
}
</script>

<style>
  .app-layout {
    display: flex;
  }

  .sidebar {
    width: 300px;
    height: 100vh;
    background: #4A4141;
    padding: 20px;
  }

  .sidebar p {
    color: #DDDDDD;
    padding-top: 4px;
  }

  .main-content {
    width: 100%;
    height: 100vh;
    background: #F1F1F1;
  }

  .logout {
    position: absolute;
    bottom: 10px;
    cursor: pointer;
  }
</style>
