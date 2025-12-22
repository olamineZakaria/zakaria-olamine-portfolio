<template>
  <div id="app">
    <Cursor />
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Cursor from './components/Cursor.vue'
import Navbar from './components/Navbar.vue'
</script>

