<template>
  <section class="technical-stack">
    <div class="container">
      <div class="section-header">
        <div class="section-tabs">
          <span>OUTILS • TECHNOLOGIES</span>
        </div>
        <h2 class="section-main-title">Stack technique et expertise</h2>
      </div>

      <!-- Technologies Section -->
      <div class="technologies-section">
        <div class="tech-grid">
          <div 
            v-for="(tech, index) in technologies" 
            :key="index"
            class="tech-card"
          >
            <div class="tech-logo">
              <img 
                v-if="tech.image" 
                :src="tech.image" 
                :alt="tech.name"
                class="tech-image"
              />
              <i 
                v-else 
                :class="tech.icon" 
                :style="{ color: tech.color }"
              ></i>
            </div>
            <p class="tech-name">{{ tech.name }}</p>
          </div>
        </div>
      </div>

      <!-- Python Libraries Section -->
      <div class="libraries-section">
        <h3 class="libraries-title">PYTHON LIBRARIES</h3>
        <div class="libraries-grid">
          <div 
            v-for="(library, index) in pythonLibraries" 
            :key="index"
            class="library-card"
          >
            <span class="library-name">{{ library }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const technologies = ref([
  {
    name: 'Python',
    icon: 'fab fa-python',
    color: '#3776ab'
  },
  {
    name: 'SQL',
    icon: 'fas fa-database',
    color: '#336791'
  },
  {
    name: 'AWS',
    icon: 'fab fa-aws',
    color: '#ff9900'
  },
  {
    name: 'GCP',
    icon: 'fab fa-google-cloud',
    color: '#4285f4',
    image: 'https://img.icons8.com/color/512/google-cloud.png'
  },
  {
    name: 'Docker',
    icon: 'fab fa-docker',
    color: '#2496ed'
  },
  {
    name: 'Git',
    icon: 'fab fa-git-alt',
    color: '#f05032'
  },
  {
    name: 'Power BI',
    icon: 'fas fa-chart-bar',
    color: '#f2c811'
  }
])

const pythonLibraries = ref([
  'Scikit-learn',
  'PyTorch',
  'TensorFlow',
  'Matplotlib',
  'Seaborn',
  'MLflow',
  'LangChain',
  'Pydantic',
  'Pydantic AI',
  'OpenCV'
])
</script>

<style scoped>
.technical-stack {
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
  margin: 0;
  line-height: 1.2;
}

.technologies-section {
  margin-bottom: 4rem;
}

.tech-grid {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 2rem;
  max-width: 100%;
  margin: 0 auto;
  overflow-x: auto;
}

.tech-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;
  min-width: 140px;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.tech-logo {
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-image {
  width: 3.5rem;
  height: 3.5rem;
  object-fit: contain;
}

.tech-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  text-align: center;
}

.libraries-section {
  text-align: center;
}

.libraries-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4b5563;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
}

.libraries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.library-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.library-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.library-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: #1f2937;
}

@media (max-width: 1024px) {
  .tech-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .libraries-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .technical-stack {
    padding: 60px 20px;
  }

  .section-main-title {
    font-size: 2rem;
  }

  .tech-grid {
    gap: 1.2rem;
    justify-content: flex-start;
  }

  .tech-card {
    min-width: 110px;
    padding: 1.5rem 1rem;
  }

  .tech-logo {
    font-size: 2.5rem;
  }

  .tech-image {
    width: 2.5rem;
    height: 2.5rem;
  }

  .libraries-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .section-main-title {
    font-size: 1.75rem;
  }

  .tech-grid {
    gap: 1rem;
    justify-content: flex-start;
  }

  .tech-card {
    min-width: 100px;
    padding: 1.2rem 0.8rem;
  }

  .tech-logo {
    font-size: 2rem;
  }

  .tech-image {
    width: 2rem;
    height: 2rem;
  }

  .tech-name {
    font-size: 0.85rem;
  }

  .libraries-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .library-card {
    padding: 0.8rem 1rem;
  }

  .library-name {
    font-size: 0.85rem;
  }
}
</style>

