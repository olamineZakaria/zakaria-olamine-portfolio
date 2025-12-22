<template>
  <section id="skills" class="skills" ref="skillsSection">
    <div class="container">
      <h2 class="section-title">Mes compétences</h2>
      <div class="skills-grid">
        <div 
          v-for="category in skillCategories" 
          :key="category.title"
          class="skill-category"
        >
          <h3>{{ category.title }}</h3>
          <div class="skill-items">
            <div 
              v-for="skill in category.skills" 
              :key="skill.name"
              class="skill-item"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  :style="{ width: isVisible ? skill.percentage + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const skillsSection = ref(null)
const isVisible = ref(false)

const skillCategories = ref([
  {
    title: 'Frontend',
    skills: [
      { name: 'React', percentage: 90 },
      { name: 'Vue.js', percentage: 85 },
      { name: 'JavaScript', percentage: 95 },
      { name: 'TypeScript', percentage: 80 },
      { name: 'CSS/SCSS', percentage: 92 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', percentage: 88 },
      { name: 'Python', percentage: 75 },
      { name: 'PHP', percentage: 82 },
      { name: 'MongoDB', percentage: 78 },
      { name: 'PostgreSQL', percentage: 85 }
    ]
  },
  {
    title: 'Outils & Autres',
    skills: [
      { name: 'Git', percentage: 90 },
      { name: 'Docker', percentage: 70 },
      { name: 'Figma', percentage: 85 },
      { name: 'AWS', percentage: 72 }
    ]
  }
])

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isVisible.value = true
    }
  })
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.3
  })
  
  if (skillsSection.value) {
    observer.observe(skillsSection.value)
  }
})

onUnmounted(() => {
  if (observer && skillsSection.value) {
    observer.unobserve(skillsSection.value)
  }
})
</script>

<style scoped>
.skills {
  background: #f3f4f6;
  padding: 100px 20px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.skill-category {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.skill-category h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #1f2937;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: #1f2937;
}

.skill-bar {
  width: 100%;
  height: 10px;
  background: #f9fafb;
  border-radius: 10px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  transition: width 1s ease-out;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>

