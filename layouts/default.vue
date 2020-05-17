<template>
  <div class="app-layout">
    <div class="sidebar">
      <p>チャンネル一覧</p>
      <p>#general</p>
      <p>#random</p>
      <p>#random</p>
    </div>
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

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
</style>
