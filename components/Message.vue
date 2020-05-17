<template>
  <div class="chat-container">
    <div class="thumbnail-container">
      <img v-bind:src="message.user.thumbnail" />
    </div>
    <div class="message-container">
      <div class="user-name">{{ displayName }}</div>
      <div class="message">{{ message.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: {
        text: '今日も良い天気ですね',
        user: {
          thumbnail: 'https://ca.slack-edge.com/T080R6JAE-UFJ230JH0-5eed01d30f7d-512',
          name: 'note'
        }
      }
    }
  },
  computed: {
    displayName() {
      return "@" + this.message.user.name
    }
  }
}
</script>

<style scoped>
  .chat-container {
    display: flex;
    padding: 8px;
  }

  .thumbnail-container {
    margin-right: 16px;
  }

  .thumbnail-container img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  .user-name {
    font-weight: bold;
  }
</style>
