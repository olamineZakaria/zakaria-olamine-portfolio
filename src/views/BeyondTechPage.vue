<template>
  <div class="beyond-tech-page">
    <div class="carousel-container">
      <div 
        class="carousel-slide" 
        :class="{ 'no-image': !currentExperience.image }"
        :key="currentIndex"
        :style="{ 
          backgroundImage: currentExperience.image ? `url(${currentExperience.image})` : 'none'
        }"
      >
        <div class="slide-overlay">
          <div class="slide-content">
            <h2 class="slide-title">
              <span class="title-line">{{ currentExperience.titleLine1.toUpperCase() }}</span>
              <span class="title-line">{{ currentExperience.titleLine2.toUpperCase() }}</span>
            </h2>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button class="carousel-nav carousel-prev" @click="previousSlide">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-nav carousel-next" @click="nextSlide">
        <i class="fas fa-chevron-right"></i>
      </button>

      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(experience, index) in experiences"
          :key="index"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></button>
      </div>

      <!-- Thumbnail Gallery -->
      <div class="thumbnail-gallery">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="thumbnail"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        >
          <img 
            v-if="experience.image" 
            :src="experience.image" 
            :alt="experience.title"
            @error="$event.target.style.display = 'none'"
          />
          <div v-else class="thumbnail-placeholder">
            <span>{{ experience.emoji }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)

const baseUrl = import.meta.env.BASE_URL

const experiences = ref([
  {
    titleLine1: 'Intéressé par',
    titleLine2: 'l\'entrepreneuriat',
    emoji: '',
    image: `${baseUrl}hultpriz.JPG`
  },
  {
    titleLine1: 'Intérêt pour',
    titleLine2: 'le théâtre',
    emoji: '',
    image: `${baseUrl}theatre.png`
  },
  {
    titleLine1: 'Passionné de',
    titleLine2: 'Football',
    emoji: '',
    image: `${baseUrl}foorball.png`
  }
])

const currentExperience = computed(() => experiences.value[currentIndex.value])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % experiences.value.length
}

const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? experiences.value.length - 1 
    : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
}

// Auto-play optionnel (commenté pour l'instant)
// let autoPlayInterval = null

// onMounted(() => {
//   autoPlayInterval = setInterval(() => {
//     nextSlide()
//   }, 5000)
// })

// onUnmounted(() => {
//   if (autoPlayInterval) {
//     clearInterval(autoPlayInterval)
//   }
// })
</script>

<style scoped>
.beyond-tech-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.carousel-slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.carousel-slide.no-image {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom, 
    rgba(0, 0, 0, 0.2) 0%, 
    rgba(0, 0, 0, 0.1) 50%, 
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 5rem 4rem;
  backdrop-filter: blur(0.5px);
}

.slide-content {
  color: white;
}

.slide-title {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.5);
  letter-spacing: 4px;
  animation: slideUp 0.8s ease-out;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-line {
  display: block;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

.carousel-nav:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-50%) scale(1.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.carousel-nav:active {
  transform: translateY(-50%) scale(1.05);
}

.carousel-prev {
  left: 3rem;
}

.carousel-next {
  right: 3rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 10;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50px;
}

.indicator {
  width: 50px;
  height: 5px;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.7);
}

.indicator.active {
  background: white;
  width: 70px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.thumbnail-gallery {
  position: absolute;
  bottom: 5rem;
  right: 3rem;
  display: flex;
  gap: 1rem;
  z-index: 10;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}

.thumbnail {
  width: 90px;
  height: 90px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid transparent;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.thumbnail:hover {
  opacity: 1;
  transform: translateY(-5px) scale(1.05);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.thumbnail.active {
  opacity: 1;
  border-color: white;
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 8px 25px rgba(0, 0, 0, 0.5);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.thumbnail:hover img,
.thumbnail.active img {
  transform: scale(1.1);
}

.thumbnail-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  font-size: 2rem;
}

.thumbnail-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  font-size: 2rem;
}

@media (max-width: 1024px) {
  .slide-title {
    font-size: 3.5rem;
    letter-spacing: 3px;
  }

  .slide-overlay {
    padding: 4rem 3rem;
  }

  .carousel-nav {
    width: 55px;
    height: 55px;
    font-size: 1.2rem;
  }

  .carousel-prev {
    left: 2rem;
  }

  .carousel-next {
    right: 2rem;
  }

  .thumbnail {
    width: 80px;
    height: 80px;
  }

  .thumbnail-gallery {
    bottom: 4.5rem;
    right: 2rem;
  }
}

@media (max-width: 768px) {
  .slide-overlay {
    padding: 3rem 2rem;
  }

  .slide-title {
    font-size: 2.8rem;
    letter-spacing: 2px;
  }

  .carousel-nav {
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
  }

  .carousel-prev {
    left: 1rem;
  }

  .carousel-next {
    right: 1rem;
  }

  .carousel-indicators {
    bottom: 0.75rem;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
  }

  .indicator {
    width: 40px;
    height: 4px;
  }

  .indicator.active {
    width: 55px;
  }

  .thumbnail-gallery {
    bottom: 4rem;
    right: 1.5rem;
    gap: 0.75rem;
    padding: 0.5rem;
  }

  .thumbnail {
    width: 70px;
    height: 70px;
  }
}

@media (max-width: 480px) {
  .slide-title {
    font-size: 2.2rem;
    letter-spacing: 1.5px;
  }

  .slide-overlay {
    padding: 2rem 1.5rem;
  }

  .carousel-nav {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }

  .carousel-prev {
    left: 0.75rem;
  }

  .carousel-next {
    right: 0.75rem;
  }

  .carousel-indicators {
    bottom: 0.5rem;
    gap: 0.4rem;
    padding: 0.3rem 0.6rem;
  }

  .indicator {
    width: 35px;
    height: 3px;
  }

  .indicator.active {
    width: 45px;
  }

  .thumbnail-gallery {
    bottom: 3.5rem;
    right: 1rem;
    gap: 0.5rem;
    padding: 0.4rem;
  }

  .thumbnail {
    width: 60px;
    height: 60px;
  }
}
</style>

