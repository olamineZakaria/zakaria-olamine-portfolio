<template>
  <section class="contact">
    <div class="container">
      <div class="contact-content">
        <!-- Left Section -->
        <div class="contact-text">
          <div class="section-tag">
            <span>ENTRONS EN CONTACT</span>
          </div>
          <h2 class="contact-title">Entrons en contact</h2>
          <p class="contact-description">
            Vous souhaitez en savoir plus sur mon travail ou envisager une collaboration ? 
            Je reste à votre disposition pour toute prise de contact.
          </p>
          <p class="contact-description">
            Je suis ouvert aux collaborations de recherche, aux opportunités professionnelles, 
            ainsi qu'aux échanges autour de la science des données et de l'intelligence artificielle. 
            N'hésitez pas à me contacter.
          </p>
        </div>

        <!-- Right Section -->
        <div class="contact-cards">
          <div class="contact-card">
            <div class="card-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="card-content">
              <span class="card-label">EMAIL</span>
              <a href="mailto:zakariaolamine@hotmail.com" class="card-detail">
                zakariaolamine@hotmail.com
              </a>
            </div>
            <div class="card-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>

          <div class="contact-card">
            <div class="card-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="card-content">
              <span class="card-label">TÉLÉPHONE</span>
              <a href="tel:+212650888704" class="card-detail">
                +212 650 888 704
              </a>
            </div>
            <div class="card-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>

          <div class="contact-card no-link">
            <div class="card-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="card-content">
              <span class="card-label">LOCALISATION</span>
              <span class="card-detail">Agadir, Maroc</span>
            </div>
          </div>

          <div class="contact-card">
            <div class="card-icon">
              <i class="fab fa-linkedin"></i>
            </div>
            <div class="card-content">
              <span class="card-label">LINKEDIN</span>
              <a href="https://www.linkedin.com/in/zakariaolamine/" target="_blank" rel="noopener noreferrer" class="card-detail">
                LinkedIn Profile
              </a>
            </div>
            <div class="card-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>

          <div class="contact-card">
            <div class="card-icon">
              <i class="fab fa-github"></i>
            </div>
            <div class="card-content">
              <span class="card-label">GITHUB</span>
              <a href="https://github.com/olamineZakaria" target="_blank" rel="noopener noreferrer" class="card-detail">
                GitHub Profile
              </a>
            </div>
            <div class="card-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique nécessaire pour l'instant
</script>

<style scoped>
.contact {
  background: #f3f4f6;
  padding: 100px 20px;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-tag {
  display: inline-block;
  background: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 0.5rem;
  width: fit-content;
}

.section-tag span {
  font-size: 0.85rem;
  font-weight: 600;
  color: #4b5563;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  white-space: nowrap;
}

.contact-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1.2;
}

.contact-description {
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-card {
  background: #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.contact-card:hover {
  background: #d1d5db;
  transform: translateX(5px);
}

.contact-card.no-link {
  cursor: default;
}

.contact-card.no-link:hover {
  transform: none;
}

.card-icon {
  font-size: 1.5rem;
  color: #4b5563;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-detail {
  font-size: 1rem;
  font-weight: 500;
  color: #1f2937;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-card a.card-detail:hover {
  color: #6366f1;
}

.card-arrow {
  font-size: 1rem;
  color: #6b7280;
  display: flex;
  align-items: center;
}

.contact-card.no-link .card-arrow {
  display: none;
}

@media (max-width: 1024px) {
  .contact-content {
    gap: 3rem;
  }

  .contact-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 80px 20px 60px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 60px 15px 40px;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .contact-card {
    padding: 1.2rem;
    gap: 1rem;
  }

  .card-icon {
    font-size: 1.2rem;
    min-width: 35px;
  }

  .card-detail {
    font-size: 0.9rem;
  }
}
</style>
