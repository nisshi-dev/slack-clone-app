<template>
  <div class="container">
    <div class="chats-container">
      <div class="chat-container">
        <div class="thumbnail-container">
          <img src="https://ca.slack-edge.com/T080R6JAE-UFJ230JH0-5eed01d30f7d-512" />
        </div>
        <div class="message-container">
          <div class="user-name">NSD</div>
          <div class="message">今日も良い天気ですね</div>
        </div>
      </div>

      <div class="chat-container">
        <div class="thumbnail-container">
          <img src="https://ca.slack-edge.com/T080R6JAE-UFJ230JH0-5eed01d30f7d-512" />
        </div>
        <div class="message-container">
          <div class="user-name">NSD</div>
          <div class="message">そうですねー</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
  .chats-container {
    padding: 16px;
  }

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
