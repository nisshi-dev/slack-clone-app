<template>
  <div class="container" />
</template>

<script>

export default {
  mounted () {
    console.log(this.$store.state.user)
    console.log(this.$store.getters.isAuthenticated)
  }
}
</script>

<style scoped>
</style>
