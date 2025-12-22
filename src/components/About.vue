<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">À propos de moi</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            Passionné par le développement web et les technologies modernes, 
            je me spécialise dans la création d'applications web performantes 
            et intuitives. Mon approche combine créativité et rigueur technique 
            pour livrer des solutions qui répondent aux besoins des utilisateurs.
          </p>
          <p>
            Avec plusieurs années d'expérience, j'ai travaillé sur divers projets 
            allant des sites vitrines aux applications web complexes. Je suis 
            constamment à la recherche de nouvelles technologies et meilleures 
            pratiques pour améliorer mes compétences.
          </p>
          <div class="about-stats">
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="stat-item"
              :style="{ animationDelay: index * 0.1 + 's' }"
            >
              <span class="stat-number">{{ stat.number }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { number: '50+', label: 'Projets réalisés' },
  { number: '3+', label: 'Années d\'expérience' },
  { number: '30+', label: 'Clients satisfaits' }
])
</script>

<style scoped>
.about {
  background: #f3f4f6;
  padding: 100px 20px;
  border-radius: 0;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-text p {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.stat-number {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  display: block;
  color: #6b7280;
  font-weight: 500;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>

