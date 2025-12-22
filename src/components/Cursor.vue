<template>
  <div class="custom-cursor" :style="{ left: x + 'px', top: y + 'px' }"></div>
  <div class="cursor-follower" :style="{ left: followerX + 'px', top: followerY + 'px' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(-100)
const y = ref(-100)
const followerX = ref(-100)
const followerY = ref(-100)
const isHovering = ref(false)

let animationFrame = null
let cursorElement = null
let followerElement = null

const updateCursor = (e) => {
  x.value = e.clientX
  y.value = e.clientY
  
  // Vérifier si on survole un élément interactif
  const target = e.target
  const isInteractive = target.matches('a, button, [role="button"], .btn, .nav-link, .project-link')
  isHovering.value = isInteractive
  
  if (cursorElement) {
    if (isInteractive) {
      cursorElement.style.width = '20px'
      cursorElement.style.height = '20px'
      cursorElement.style.background = '#8b5cf6'
    } else {
      cursorElement.style.width = '10px'
      cursorElement.style.height = '10px'
      cursorElement.style.background = '#6366f1'
    }
  }
  
  if (followerElement) {
    if (isInteractive) {
      followerElement.style.width = '60px'
      followerElement.style.height = '60px'
      followerElement.style.borderColor = '#8b5cf6'
    } else {
      followerElement.style.width = '40px'
      followerElement.style.height = '40px'
      followerElement.style.borderColor = '#6366f1'
    }
  }
}

const updateFollower = () => {
  const dx = x.value - followerX.value
  const dy = y.value - followerY.value
  
  followerX.value += dx * 0.15
  followerY.value += dy * 0.15
  
  animationFrame = requestAnimationFrame(updateFollower)
}

const handleMouseMove = (e) => {
  updateCursor(e)
  if (!animationFrame) {
    updateFollower()
  }
}

const handleMouseLeave = () => {
  x.value = -100
  y.value = -100
}

onMounted(() => {
  cursorElement = document.querySelector('.custom-cursor')
  followerElement = document.querySelector('.cursor-follower')
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
  document.body.style.cursor = 'none'
  updateFollower()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseleave', handleMouseLeave)
  document.body.style.cursor = 'auto'
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  background: #6366f1;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              height 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              background 0.3s ease;
  will-change: transform;
}

.cursor-follower {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid #6366f1;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
              height 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
              border-color 0.3s ease;
  opacity: 0.6;
  will-change: transform;
}

@media (max-width: 768px) {
  .custom-cursor,
  .cursor-follower {
    display: none;
  }
}
</style>

