<template>
  <section id="about" class="beyond-tech">
    <div class="container">
      <div class="section-header">
        <div class="section-tabs">
          <span>AU-DELÀ • TECH</span>
        </div>
        <h2 class="section-main-title">Une vie riche en expériences</h2>
        <p class="section-description">
          Découvrez mes passions et aventures en dehors du code, qui façonnent ma perspective unique.
        </p>
      </div>

      <div class="experiences-grid">
        <div 
          v-for="(experience, index) in experiences" 
          :key="index"
          class="experience-card"
        >
          <div class="experience-image-wrapper">
            <img 
              v-if="experience.image"
              :src="experience.image" 
              :alt="experience.title"
              class="experience-image"
            />
            <div v-else class="experience-placeholder">
              <span class="experience-emoji">{{ experience.emoji }}</span>
            </div>
          </div>
          <div class="experience-content">
            <span class="experience-emoji-text">{{ experience.emoji }}</span>
            <h3 class="experience-title">{{ experience.title }}</h3>
          </div>
        </div>
      </div>
      
      <div class="section-footer">
        <button class="view-all-btn" @click="goToBeyondTechPage">
          Voir toutes les expériences
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const baseUrl = import.meta.env.BASE_URL

// Fonction pour encoder les URLs d'images
const getImageUrl = (filename) => {
  return baseUrl + encodeURIComponent(filename)
}

const experiences = ref([
  {
    title: 'Intéressé par l\'entrepreneuriat',
    emoji: '',
    image: getImageUrl('hultpriz.JPG')
  },
  {
    title: 'Intérêt pour le théâtre',
    emoji: '',
    image: getImageUrl('theatre.png')
  },
  {
    title: 'Passionné de Football',
    emoji: '',
    image: getImageUrl('foorball.png')
  }
])

const goToBeyondTechPage = () => {
  router.push('/beyond-tech')
}
</script>

<style scoped>
.beyond-tech {
  background: #f3f4f6;
  padding: 80px 20px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tabs {
  display: inline-block;
  background: #ffffff;
  padding: 10px 24px;
  border-radius: 30px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.section-tabs span {
  font-size: 0.9rem;
  font-weight: 600;
  color: #4b5563;
  letter-spacing: 0.5px;
}

.section-main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.section-description {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.experiences-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.experience-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.experience-image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #f9fafb;
}

.experience-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.experience-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e5e7eb, #d1d5db);
}

.experience-emoji {
  font-size: 4rem;
}

.experience-content {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.experience-emoji-text {
  font-size: 1.5rem;
}

.experience-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.section-footer {
  text-align: center;
  margin-top: 3rem;
}

.view-all-btn {
  background: #1f2937;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  box-shadow: 0 4px 12px rgba(31, 41, 55, 0.2);
}

.view-all-btn:hover {
  background: #374151;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(31, 41, 55, 0.4);
}

.view-all-btn:active {
  transform: translateY(0);
}

.view-all-btn i {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.view-all-btn:hover i {
  transform: translateX(5px);
}

@media (max-width: 1024px) {
  .experiences-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .beyond-tech {
    padding: 60px 20px;
  }

  .section-main-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .experiences-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
  }
}

@media (max-width: 480px) {
  .section-main-title {
    font-size: 1.75rem;
  }

  .experience-content {
    padding: 1.2rem;
  }

  .experience-title {
    font-size: 1rem;
  }
}
</style>

