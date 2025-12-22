<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-name">Zakaria Olamine</h1>
        <p class="hero-title">Data Scientist • Ingénieur IA/ML</p>
        <p class="hero-description">
          Je développe et déploie des modèles de machine learning pour valoriser des données complexes et soutenir la prise de décision, de l'analyse exploratoire à la mise en production.
        </p>
        <div class="hero-buttons">
          <button class="btn" @click="scrollTo('projects')">
            Mes Projets <i class="fas fa-arrow-right"></i>
          </button>
          <router-link to="/contact" class="btn">
            Me contacter <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-wrapper">
          <img 
            :src="`${import.meta.env.BASE_URL}zazazakaria.png`" 
            alt="ACHRAF EL FAIQ" 
            class="hero-photo"
            @error="handleImageError"
            :class="{ 'image-error': imageError }"
          />
          <div v-if="imageError" class="image-placeholder-fallback">
            <i class="fas fa-user"></i>
          </div>
          <div class="overlay-box">
            <p>Spécialiste en IA/ML</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navbar = document.querySelector('.navbar')
    const navHeight = navbar ? navbar.offsetHeight : 0
    const targetPosition = element.offsetTop - navHeight - 20
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 40px 80px;
  background: #f3f4f6;
  position: relative;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-name {
  font-size: 4.5rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.1;
  letter-spacing: -1px;
  margin: 0;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
}

.hero-title {
  font-size: 1.25rem;
  font-weight: 400;
  color: #4b5563;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.hero-description {
  font-size: 1.1rem;
  color: #374151;
  line-height: 1.7;
  margin: 0;
  max-width: 600px;
  font-family: 'Inter', sans-serif;
}

.hero-description strong {
  font-weight: 600;
  color: #1f2937;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  background: #f3f4f6;
  color: #1f2937;
  border: none;
  border-radius: 12px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.btn:hover {
  background: #e5e7eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn i {
  font-size: 0.9rem;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  aspect-ratio: 3 / 4;
  background: linear-gradient(135deg, #e5e7eb, #d1d5db);
}

.hero-photo {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
}

.hero-photo.image-error {
  display: none;
}

.image-placeholder-fallback {
  width: 100%;
  aspect-ratio: 4 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e5e7eb, #d1d5db);
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
}

.image-placeholder-fallback i {
  font-size: 8rem;
  color: #9ca3af;
}

.overlay-box {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 16px 20px;
  max-width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.overlay-box p {
  margin: 0;
  font-size: 0.9rem;
  color: #1f2937;
  line-height: 1.5;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

@media (max-width: 1024px) {
  .hero-name {
    font-size: 3.5rem;
  }
  
  .hero-content {
    gap: 2.5rem;
  }
  
  .image-wrapper {
    max-width: 350px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 20px 60px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-text {
    align-items: center;
  }

  .hero-name {
    font-size: 2.5rem;
  }

  .hero-title {
    font-size: 1.1rem;
  }

  .hero-description {
    font-size: 1rem;
    text-align: left;
  }

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-image {
    order: -1;
  }

  .image-wrapper {
    max-width: 320px;
  }

  .overlay-box {
    padding: 12px 16px;
    bottom: 15px;
    right: 15px;
    left: 15px;
    max-width: calc(100% - 30px);
  }

  .overlay-box p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 60px 15px 40px;
  }

  .hero-name {
    font-size: 2rem;
  }

  .hero-title {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .image-wrapper {
    max-width: 100%;
  }
}
</style>
