<template>
  <section class="education-experience">
    <div class="container">
      <div class="section-header">
        <div class="section-tabs">
          <span>FORMATIONS • EXPÉRIENCES</span>
        </div>
        <h2 class="section-main-title">Une base solide, théorique et pratique</h2>
        <p class="section-description">
          Formation académique rigoureuse et expériences terrain qui se complètent 
          pour créer des solutions impactantes.
        </p>
      </div>

      <div class="content-grid">
        <!-- Formations -->
        <div class="column">
          <h3 class="column-title">
            <span class="title-text">FORMATIONS</span>
            <span class="title-underline"></span>
          </h3>
          <div class="logos-grid">
            <div 
              v-for="(formation, index) in formations" 
              :key="index"
              class="logo-card"
              :class="{ 'clickable': formation.name === 'ENSIASD' || formation.name === 'EST Guelmim' }"
              @click="formation.name === 'ENSIASD' ? showEnsiasdModal = true : formation.name === 'EST Guelmim' ? showEstGuelmimModal = true : null"
            >
              <div class="logo-wrapper">
                <div class="logo-placeholder">
                  <img 
                    v-if="formation.image" 
                    :src="formation.image" 
                    :alt="formation.name"
                    class="logo-image"
                  />
                  <span v-else class="logo-text" :style="{ color: formation.color }">{{ formation.logoText }}</span>
                </div>
              </div>
              <p class="logo-label">{{ formation.name }}</p>
            </div>
          </div>
        </div>

        <!-- Expériences -->
        <div class="column">
          <h3 class="column-title">
            <span class="title-text">EXPÉRIENCES</span>
            <span class="title-underline"></span>
          </h3>
          <div class="logos-grid">
            <div 
              v-for="(experience, index) in experiences" 
              :key="index"
              class="logo-card"
            >
              <div class="logo-wrapper">
                <div class="logo-placeholder">
                  <img 
                    v-if="experience.image" 
                    :src="experience.image" 
                    :alt="experience.name"
                    class="logo-image"
                  />
                  <div v-else class="logo-content">
                    <span class="logo-text" :style="{ color: experience.color }">{{ experience.logoText }}</span>
                    <span v-if="experience.subText" class="logo-subtext">{{ experience.subText }}</span>
                  </div>
                </div>
              </div>
              <p class="logo-label">{{ experience.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal ENSIASD -->
    <div v-if="showEnsiasdModal" class="modal-overlay" @click="showEnsiasdModal = false">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="showEnsiasdModal = false">
          <i class="fas fa-times"></i>
        </button>
        <div class="modal-header">
          <h3 class="modal-title">ENSIASD</h3>
        </div>
        <div class="modal-body">
          <p class="modal-school-name">
            L'École Nationale Supérieure de l'Intelligence Artificielle et Sciences des Données
          </p>
          <div class="modal-section">
            <h4 class="modal-section-title">Formations</h4>
            <p class="modal-section-content">Sciences des Données, Big Data & IA</p>
          </div>
          <div class="modal-section">
            <h4 class="modal-section-title">Site Web</h4>
            <a 
              href="https://ensiasd.uiz.ac.ma/sdbdia/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="modal-link"
            >
              https://ensiasd.uiz.ac.ma/sdbdia/
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal EST Guelmim -->
    <div v-if="showEstGuelmimModal" class="modal-overlay" @click="showEstGuelmimModal = false">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="showEstGuelmimModal = false">
          <i class="fas fa-times"></i>
        </button>
        <div class="modal-header">
          <h3 class="modal-title">EST Guelmim</h3>
        </div>
        <div class="modal-body">
          <p class="modal-school-name">
            École Supérieure de Technologie Guelmim
          </p>
          <div class="modal-section">
            <h4 class="modal-section-title">Formations</h4>
            <p class="modal-section-content">Informatique</p>
          </div>
          <div class="modal-section">
            <h4 class="modal-section-title">Site Web</h4>
            <a 
              href="http://www.estg.ac.ma" 
              target="_blank" 
              rel="noopener noreferrer"
              class="modal-link"
            >
              http://www.estg.ac.ma
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const baseUrl = import.meta.env.BASE_URL

// Fonction pour encoder les URLs d'images
const getImageUrl = (filename) => {
  return baseUrl + encodeURIComponent(filename)
}

// État pour les modales
const showEnsiasdModal = ref(false)
const showEstGuelmimModal = ref(false)

const formations = ref([
  {
    name: 'EST Guelmim',
    logoText: 'EST Guelmim',
    image: getImageUrl('EST guelmim.png'),
    color: '#dc2626'
  },
  {
    name: 'ENSIASD',
    logoText: 'ENSIASD',
    image: getImageUrl('ENSIASD.png'),
    color: '#16a34a'
  }
])

const experiences = ref([
  {
    name: 'Commune Inzegane',
    logoText: 'Commune Inzegane',
    image: getImageUrl('comune inzegane.png'),
    color: '#2563eb'
  },
  {
    name: 'Cofisk SARL',
    logoText: 'Cofisk SARL',
    image: getImageUrl('cofisk.png'),
    color: '#2563eb'
  },
  {
    name: 'UM6P-FMS',
    logoText: 'UM6P-FMS',
    image: getImageUrl('um6p.png'),
    color: '#1f2937'
  },
  {
    name: 'LabSiv',
    logoText: 'LabSiv',
    image: getImageUrl('labsiv.png'),
    color: '#1f2937'
  }
])
</script>

<style scoped>
.education-experience {
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

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.column {
  display: flex;
  flex-direction: column;
}

.column-title {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.title-underline {
  width: 60px;
  height: 3px;
  background: #1f2937;
  border-radius: 2px;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.logo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.logo-card.clickable {
  cursor: pointer;
}

.logo-wrapper {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  max-height: 250px;
}

.logo-placeholder {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e7eb;
}

.logo-placeholder:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  padding: 0.8rem;
  max-width: 100%;
  max-height: 100%;
}

.logo-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 100%;
}

.logo-text {
  font-size: 0.75rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  line-height: 1.4;
  width: 100%;
}

.logo-subtext {
  font-size: 0.6rem;
  font-weight: 400;
  color: #6b7280;
  text-align: center;
  line-height: 1.3;
  width: 100%;
}

.logo-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4b5563;
  margin: 0;
  text-align: center;
}

/* Ajustement pour la colonne Expériences - 4 logos */
.content-grid .column:last-child .logos-grid {
  grid-template-columns: repeat(4, 1fr);
}

/* Pour les formations - 2 logos */
.content-grid .column:first-child .logos-grid {
  grid-template-columns: repeat(2, 1fr);
  max-width: 500px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .content-grid {
    gap: 3rem;
  }

  .logos-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .content-grid .column:last-child .logos-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .logo-wrapper {
    min-height: 150px;
    max-height: 220px;
  }

  .logo-image {
    padding: 0.6rem;
  }
}

@media (max-width: 768px) {
  .education-experience {
    padding: 60px 20px;
  }

  .section-main-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .logos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .content-grid .column:first-child .logos-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
  }

  .content-grid .column:last-child .logos-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .logo-text {
    font-size: 0.6rem;
  }

  .logo-wrapper {
    min-height: 130px;
    max-height: 180px;
  }

  .logo-image {
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .logos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .content-grid .column:last-child .logos-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-tabs {
    padding: 8px 20px;
  }

  .section-tabs span {
    font-size: 0.8rem;
  }

  .logo-wrapper {
    min-height: 100px;
    max-height: 140px;
  }

  .logo-image {
    padding: 0.4rem;
  }

  .logo-placeholder {
    padding: 0.6rem;
  }

  .logo-label {
    font-size: 0.8rem;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: #ffffff;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f3f4f6;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #6b7280;
  font-size: 1.2rem;
  z-index: 10;
}

.modal-close:hover {
  background: #e5e7eb;
  color: #1f2937;
  transform: rotate(90deg);
}

.modal-header {
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.modal-body {
  padding: 2rem;
}

.modal-school-name {
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 500;
}

.modal-section {
  margin-bottom: 1.5rem;
}

.modal-section:last-child {
  margin-bottom: 0;
}

.modal-section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.modal-section-content {
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

.modal-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #2563eb;
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-all;
}

.modal-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.modal-link i {
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 90%;
    border-radius: 16px;
  }

  .modal-header {
    padding: 1.5rem 1.5rem 1rem;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-school-name {
    font-size: 1rem;
  }

  .modal-close {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    max-width: 95%;
  }

  .modal-header {
    padding: 1.25rem 1.25rem 0.75rem;
  }

  .modal-body {
    padding: 1.25rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .modal-school-name {
    font-size: 0.95rem;
  }
}
</style>

