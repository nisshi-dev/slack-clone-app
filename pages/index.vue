<template>
  <div class="container">
    <div class="chats-layout">
      <messages />
    </div>
    <div class="input-layout" />
  </div>
</template>

<script>
import Messages from '~/components/Messages.vue'

export default {
  components: {
    Messages
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
  }

  .chats-layout {
    overflow: scroll;
    height: 90%;
  }

  .input-layout {
    height: 10%;
  }
</style>
