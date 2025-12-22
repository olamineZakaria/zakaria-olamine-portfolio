# Déploiement sur GitHub Pages

## Configuration effectuée

1. ✅ Configuration de Vite pour GitHub Pages (`vite.config.js`)
2. ✅ Configuration du router Vue (`src/router/index.js`)
3. ✅ Workflow GitHub Actions (`.github/workflows/deploy.yml`)
4. ✅ Fichier `.nojekyll` créé dans `public/`

## Instructions de déploiement

### Étape 1 : Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com) et créez un nouveau dépôt
2. Nommez-le (par exemple : `portfolio` ou `zakaria-olamine-portfolio`)
3. **Important** : Notez le nom exact du dépôt

### Étape 2 : Mettre à jour la configuration

Si votre dépôt GitHub s'appelle différemment de `pp`, vous devez mettre à jour :

**Dans `vite.config.js`** :
```js
base: process.env.NODE_ENV === 'production' ? '/NOM-DE-VOTRE-REPO/' : '/',
```

**Dans `src/router/index.js`** :
```js
history: createWebHistory(process.env.NODE_ENV === 'production' ? '/NOM-DE-VOTRE-REPO/' : '/'),
```

Remplacez `NOM-DE-VOTRE-REPO` par le nom exact de votre dépôt GitHub.

### Étape 3 : Initialiser Git et pousser le code

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio Vue.js"

# Ajouter le remote GitHub (remplacez par votre URL)
git remote add origin https://github.com/VOTRE-USERNAME/NOM-DE-VOTRE-REPO.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

### Étape 4 : Activer GitHub Pages

1. Allez dans votre dépôt GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez **GitHub Actions**
5. Le workflow se déclenchera automatiquement

### Étape 5 : Vérifier le déploiement

1. Attendez quelques minutes que le workflow se termine
2. Allez dans l'onglet **Actions** de votre dépôt pour voir le statut
3. Une fois terminé, votre site sera disponible à :
   `https://VOTRE-USERNAME.github.io/NOM-DE-VOTRE-REPO/`

## Mise à jour du site

À chaque fois que vous poussez du code sur la branche `main`, le site sera automatiquement redéployé grâce au workflow GitHub Actions.

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push
```

## Dépannage

- Si le site ne se charge pas, vérifiez que le nom du repo dans `vite.config.js` et `router/index.js` correspond exactement au nom de votre dépôt GitHub
- Vérifiez les logs dans l'onglet **Actions** de GitHub
- Assurez-vous que GitHub Pages est activé dans les paramètres du dépôt

