<template>
  <div class="contact-page">
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

