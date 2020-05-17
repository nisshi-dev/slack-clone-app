<template>
  <div class="chats-container">
    <div v-for="item in 15" :key="item.number">
      <message />
    </div>
  </div>
</template>

<script>
import Message from '~/components/Message'

export default {
  components: {
    Message
  }
}

</script>

<style scoped>
  .chats-container {
    padding: 16px;
  }
</style>
