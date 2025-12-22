# Portfolio Professionnel avec Vue.js

Un portfolio moderne et responsive créé avec Vue.js 3, Vite et la Composition API.

## 📋 Caractéristiques

- ✅ Design moderne et professionnel
- ✅ Responsive (adapté mobile, tablette et desktop)
- ✅ Animations fluides et transitions
- ✅ Navigation fixe avec menu mobile
- ✅ Sections: Accueil, À propos, Compétences, Projets, Contact
- ✅ Formulaire de contact fonctionnel
- ✅ Barres de compétences animées avec Intersection Observer
- ✅ Smooth scroll entre les sections
- ✅ Composants Vue.js modulaires et réutilisables
- ✅ État réactif avec Composition API

## 🚀 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. Clonez ou téléchargez ce projet

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:3000`)

### Build pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 📁 Structure des fichiers

```
portfolio-vue/
│
├── index.html              # Point d'entrée HTML
├── package.json            # Dépendances et scripts npm
├── vite.config.js          # Configuration Vite
│
├── src/
│   ├── main.js             # Point d'entrée Vue.js
│   ├── App.vue             # Composant principal
│   │
│   ├── components/         # Composants Vue.js
│   │   ├── Navbar.vue      # Navigation
│   │   ├── Hero.vue        # Section hero
│   │   ├── About.vue       # Section à propos
│   │   ├── Skills.vue      # Section compétences
│   │   ├── Projects.vue    # Section projets
│   │   ├── Contact.vue     # Section contact
│   │   └── Footer.vue      # Footer
│   │
│   └── styles/
│       └── main.css        # Styles globaux
│
└── README.md               # Documentation
```

## 🎨 Personnalisation

### Changer les couleurs

Modifiez les variables CSS dans `src/styles/main.css` :

```css
:root {
    --primary-color: #6366f1;      /* Couleur principale */
    --primary-dark: #4f46e5;       /* Couleur principale foncée */
    --secondary-color: #8b5cf6;    /* Couleur secondaire */
    /* ... autres variables */
}
```

### Modifier les informations personnelles

1. **Nom et titre** : Modifiez dans `src/components/Hero.vue`
2. **À propos** : Mettez à jour `src/components/About.vue`
3. **Compétences** : Ajustez le tableau `skillCategories` dans `src/components/Skills.vue`
4. **Projets** : Modifiez le tableau `projects` dans `src/components/Projects.vue`
5. **Contact** : Mettez à jour les informations dans `src/components/Contact.vue`

### Ajouter vos projets

Modifiez le tableau `projects` dans `src/components/Projects.vue` :

```javascript
const projects = ref([
  {
    title: 'Mon Projet',
    description: 'Description de mon projet...',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://mon-projet.com',
    githubUrl: 'https://github.com/username/projet'
  },
  // Ajoutez d'autres projets...
])
```

### Modifier les compétences

Modifiez le tableau `skillCategories` dans `src/components/Skills.vue` :

```javascript
const skillCategories = ref([
  {
    title: 'Frontend',
    skills: [
      { name: 'React', percentage: 90 },
      { name: 'Vue.js', percentage: 95 },
      // Ajoutez d'autres compétences...
    ]
  },
  // Ajoutez d'autres catégories...
])
```

### Ajouter votre photo

Remplacez le placeholder dans `src/components/Hero.vue` :

```vue
<div class="hero-image">
  <img src="/path/to/your-photo.jpg" alt="Votre nom" class="hero-photo">
</div>
```

Et ajoutez le style correspondant dans le `<style>` du composant :

```css
.hero-photo {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

**Note** : Placez vos images dans le dossier `public/` pour qu'elles soient accessibles.

### Modifier les liens sociaux

Mettez à jour les liens dans `src/components/Hero.vue` et `src/components/Contact.vue` :

```vue
<a href="https://github.com/votre-username" aria-label="GitHub">
  <i class="fab fa-github"></i>
</a>
```

## 📧 Configuration du formulaire de contact

Par défaut, le formulaire affiche un message de succès. Pour le rendre fonctionnel, modifiez la fonction `handleSubmit` dans `src/components/Contact.vue` :

```javascript
const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    const response = await fetch('https://votre-api.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value)
    })
    const data = await response.json()
    
    // Gérer la réponse
    if (response.ok) {
      alert('Message envoyé avec succès!')
      form.value = { name: '', email: '', subject: '', message: '' }
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}
```

Ou utilisez un service tiers comme :
- **Formspree** : https://formspree.io
- **EmailJS** : https://www.emailjs.com
- **Netlify Forms** : Si vous déployez sur Netlify

## 🌐 Déploiement

### Netlify

1. Créez un compte sur [Netlify](https://netlify.com)
2. Connectez votre repository GitHub
3. Configurez les paramètres de build :
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Déployez !

### Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre projet GitHub
3. Vercel détectera automatiquement Vue.js et configurera le build
4. Déployez !

### GitHub Pages

1. Dans `vite.config.js`, ajoutez la configuration `base` :

```javascript
export default defineConfig({
  base: '/nom-de-votre-repo/',
  plugins: [vue()],
  // ...
})
```

2. Créez un script de déploiement dans `package.json` :

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
}
```

3. Exécutez `npm run deploy`

## 📱 Compatibilité

- ✅ Chrome (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Edge (dernière version)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies utilisées

- **Vue.js 3** - Framework JavaScript progressif
- **Vite** - Build tool moderne et rapide
- **Composition API** - API de composition de Vue 3
- **CSS3** - Grid, Flexbox, Animations
- **Font Awesome** - Icônes
- **Google Fonts (Inter)** - Police de caractères

## 📚 Apprendre Vue.js

Si vous êtes nouveau avec Vue.js, voici quelques ressources :

- [Documentation officielle Vue.js](https://vuejs.org/)
- [Guide Vue.js en français](https://fr.vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

## 📝 Licence

Ce projet est libre d'utilisation. N'hésitez pas à le modifier selon vos besoins.

## 🤝 Contribution

N'hésitez pas à proposer des améliorations ou à signaler des bugs !

## 📞 Support

Pour toute question, n'hésitez pas à ouvrir une issue ou à me contacter.

---

Fait avec ❤️ et passion
