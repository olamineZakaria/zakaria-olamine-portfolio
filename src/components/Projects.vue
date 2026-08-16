<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header">
        <div class="section-tabs">
          <span>MES PROJETS</span>
        </div>
        <h2 class="section-main-title">Projets clés et réalisation</h2>
        <p class="section-description">
          Je suis actuellement en phase d'organisation de mes projets. 
          Consultez mon GitHub pour découvrir mes réalisations.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Coming soon - projets à venir
</script>

<style scoped>
.projects {
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

@media (max-width: 768px) {
  .projects {
    padding: 60px 20px;
  }

  .section-main-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section-main-title {
    font-size: 1.75rem;
  }
}
</style>

