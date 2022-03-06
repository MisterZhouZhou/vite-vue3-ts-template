<script setup lang="ts">
import Header from '@/components/Header.jsx'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div>nav</div>
  <Header />
  <router-view></router-view>
</template>

<style lang="less">
@import "@/style/reset.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
