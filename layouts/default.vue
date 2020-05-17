<template>
  <div class="app-layout">
    <div class="sidebar">
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
  }

  .main-content {
    width: 100%;
    height: 100vh;
    background: #F1F1F1;
  }
</style>
