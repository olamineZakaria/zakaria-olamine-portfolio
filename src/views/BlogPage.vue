<template>
  <div class="blog-page">
    <div class="container">
      <div class="section-header">
        <div class="section-tabs">
          <span>BLOG</span>
        </div>
        <h2 class="section-main-title">Réflexions sur la Technologie et la Science</h2>
        <p class="section-description">
          Découvrez mes réflexions sur l'intelligence artificielle, la science des données et les dernières tendances technologiques.
        </p>
      </div>

      <div class="blog-content">
        <p class="coming-soon-text">
          Les articles de blog seront bientôt disponibles ici. Restez connecté !
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Blog page - articles à venir
</script>

<style scoped>
.blog-page {
  background: #f3f4f6;
  padding: 100px 20px;
  min-height: calc(100vh - 100px);
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

.blog-content {
  text-align: center;
  padding: 4rem 2rem;
}

.coming-soon-text {
  font-size: 1.2rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .blog-page {
    padding: 80px 20px 60px;
  }

  .section-main-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .blog-content {
    padding: 3rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-main-title {
    font-size: 1.75rem;
  }

  .coming-soon-text {
    font-size: 1rem;
  }
}
</style>

