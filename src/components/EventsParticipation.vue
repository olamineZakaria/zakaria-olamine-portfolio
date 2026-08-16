<template>
  <section id="events" class="events-participation">
    <div class="container">
      <div class="section-header">
        <div class="section-tabs">
          <span>PARTICIPATION AUX ÉVÉNEMENTS</span>
        </div>
        <h2 class="section-main-title">Présence active dans l'écosystème tech</h2>
        <p class="section-description">
          Je participe régulièrement à des conférences, hackathons et ateliers pour
          apprendre, partager et rester à la pointe de l'innovation.
        </p>
      </div>

      <div class="events-grid">
        <article v-for="event in events" :key="event.title" class="event-card">
          <div class="event-badge">{{ event.type }}</div>
          <h3 class="event-title">{{ event.title }}</h3>
          <p class="event-meta">{{ event.location }} • {{ event.year }}</p>
          <p class="event-description">{{ event.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    type: 'Conférence',
    title: 'Journées IA & Data',
    location: 'Maroc',
    year: '2025',
    description:
      'Échanges autour des applications concrètes de l\'IA en recherche et en industrie.'
  },
  {
    type: 'Hackathon',
    title: 'Défi Innovation Data',
    location: 'Casablanca',
    year: '2024',
    description:
      'Conception rapide de solutions basées sur les données avec une équipe pluridisciplinaire.'
  },
  {
    type: 'Atelier',
    title: 'MLOps & Déploiement',
    location: 'Rabat',
    year: '2024',
    description:
      'Renforcement des bonnes pratiques de mise en production et de suivi des modèles.'
  }
]
</script>

<style scoped>
.events-participation {
  background: #ffffff;
  padding: 80px 20px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-tabs {
  display: inline-block;
  background: #f3f4f6;
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
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-description {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 760px;
  margin: 0 auto;
  line-height: 1.7;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.event-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.25rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.event-badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: #e0f2fe;
  color: #075985;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.event-title {
  font-size: 1.2rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.event-meta {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 0.8rem;
}

.event-description {
  font-size: 0.98rem;
  color: #374151;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .events-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .events-participation {
    padding: 60px 20px;
  }

  .section-main-title {
    font-size: 2rem;
  }

  .events-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section-main-title {
    font-size: 1.75rem;
  }

  .section-description {
    font-size: 1rem;
  }
}
</style>
