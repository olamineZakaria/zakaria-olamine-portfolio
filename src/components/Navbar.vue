<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-btn">Z A K A R I A o L A M I N E</router-link>
      </div>
      
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li>
          <router-link 
            to="/"
            class="nav-btn"
            :class="{ active: $route.path === '/' && activeSection === 'home' }"
            @click="handleNavClick('home')"
          >
            <i class="fas fa-home"></i>
            <span>Accueil</span>
          </router-link>
        </li>
        <li>
          <a 
            href="#projects"
            class="nav-btn"
            :class="{ active: activeSection === 'projects' }"
            @click.prevent="handleNavClick('projects')"
          >
            <i class="fas fa-clipboard-list"></i>
            <span>Projets</span>
          </a>
        </li>
        <li>
          <router-link 
            to="/beyond-tech"
            class="nav-btn"
            :class="{ active: $route.path === '/beyond-tech' }"
            @click="isMenuOpen = false"
          >
            <i class="fas fa-smile"></i>
            <span>Au-delà de la Tech</span>
          </router-link>
        </li>
        <li>
          <router-link 
            to="/contact"
            class="nav-btn"
            :class="{ active: $route.path === '/contact' }"
            @click="isMenuOpen = false"
          >
            <i class="fas fa-envelope"></i>
            <span>Contact</span>
          </router-link>
        </li>
      </ul>

      <div class="nav-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isMenuOpen = ref(false)
const activeSection = ref('home')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleNavClick = (section) => {
  isMenuOpen.value = false
  
  if (section === 'contact') {
    router.push('/contact')
  } else if (section === 'home') {
    router.push('/')
    setTimeout(() => {
      scrollTo('home')
    }, 100)
  } else {
    if (route.path !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          scrollTo(section)
        }, 300)
      })
    } else {
      scrollTo(section)
    }
  }
}

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = document.querySelector('.navbar').offsetHeight
    const targetPosition = element.offsetTop - navHeight - 20
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}


const updateActiveSection = () => {
  if (route.path === '/contact') {
    return
  }
  
  const sections = ['home', 'projects', 'about']
  const scrollPosition = window.scrollY + 150

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sections[i]
      break
    }
  }
}

const handleScroll = () => {
  updateActiveSection()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

.nav-container {
  background: #f3f4f6;
  border-radius: 50px;
  padding: 12px 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-btn {
  background: #f3f4f6;
  color: #4b5563;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
}

.brand-btn:hover {
  background: #e5e7eb;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 8px;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.nav-btn {
  background: #f3f4f6;
  color: #4b5563;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  white-space: nowrap;
  text-decoration: none;
}

.nav-btn i {
  font-size: 0.9rem;
}

.nav-btn.active {
  background: #1f2937;
  color: #ffffff;
}

.nav-btn:hover:not(.active) {
  background: #e5e7eb;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  padding: 5px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: #4b5563;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 1024px) {
  .nav-menu {
    gap: 4px;
  }

  .nav-btn span {
    font-size: 0.85rem;
  }

  .nav-btn {
    padding: 10px 16px;
  }
}

@media (max-width: 768px) {
  .navbar {
    top: 10px;
    padding: 0 10px;
  }

  .nav-container {
    padding: 10px 15px;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 80px;
    flex-direction: column;
    background: #f3f4f6;
    width: calc(100% - 40px);
    max-width: 400px;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    gap: 10px;
    transition: all 0.3s ease;
  }

  .nav-menu.active {
    left: 50%;
    transform: translateX(-50%);
  }

  .nav-btn {
    width: 100%;
    justify-content: flex-start;
  }

  .nav-toggle {
    display: flex;
  }

  .brand-btn {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 8px 12px;
  }

  .brand-btn {
    font-size: 0.75rem;
    padding: 8px 12px;
    letter-spacing: 1px;
  }
}
</style>

