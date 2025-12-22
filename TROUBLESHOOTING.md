# Dépannage GitHub Pages - Erreur 404

## Vérifications à faire

### 1. Vérifier que le code est poussé sur GitHub

Assurez-vous que votre code est bien sur GitHub :

```bash
# Vérifier le remote
git remote -v

# Devrait afficher :
# origin  https://github.com/olamineZakaria/zakaria-olamine-portfolio.git (fetch)
# origin  https://github.com/olamineZakaria/zakaria-olamine-portfolio.git (push)

# Si le remote n'existe pas, l'ajouter :
git remote add origin https://github.com/olamineZakaria/zakaria-olamine-portfolio.git

# Pousser le code
git add .
git commit -m "Setup GitHub Pages"
git push -u origin main
```

### 2. Vérifier que GitHub Pages est activé

1. Allez sur : https://github.com/olamineZakaria/zakaria-olamine-portfolio/settings/pages
2. Sous **Source**, sélectionnez **GitHub Actions** (pas "Deploy from a branch")
3. Cliquez sur **Save**

### 3. Vérifier que le workflow s'est exécuté

1. Allez sur : https://github.com/olamineZakaria/zakaria-olamine-portfolio/actions
2. Vérifiez qu'un workflow "Deploy to GitHub Pages" a été exécuté
3. Si le workflow a échoué, cliquez dessus pour voir les erreurs

### 4. Si le workflow n'a pas été déclenché

Le workflow se déclenche automatiquement lors d'un push sur `main`. Si ce n'est pas le cas :

1. Allez dans l'onglet **Actions**
2. Cliquez sur **Deploy to GitHub Pages** dans la liste des workflows
3. Cliquez sur **Run workflow** → **Run workflow** (déclenchement manuel)

### 5. Vérifier les permissions du dépôt

Assurez-vous que :
- Le dépôt n'est pas privé (ou que vous avez GitHub Pro/Team pour les dépôts privés)
- Les Actions GitHub sont activées dans les paramètres du dépôt

### 6. Attendre quelques minutes

Après avoir activé GitHub Pages et que le workflow se termine, attendez 1-2 minutes pour que le site soit disponible.

### 7. Vérifier l'URL

L'URL devrait être exactement :
**https://olamineZakaria.github.io/zakaria-olamine-portfolio/**

Notez le `/` à la fin !

## Solution rapide

Si rien ne fonctionne, essayez cette approche alternative :

1. **Build localement** :
```bash
npm run build
```

2. **Créer une branche `gh-pages`** :
```bash
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

3. **Dans les paramètres GitHub Pages**, sélectionnez la branche `gh-pages` comme source.

## Vérification de la configuration

Assurez-vous que ces fichiers sont corrects :

- ✅ `vite.config.js` : `base: '/zakaria-olamine-portfolio/'`
- ✅ `src/router/index.js` : `createWebHistory('/zakaria-olamine-portfolio/')`
- ✅ `.github/workflows/deploy.yml` : workflow présent
- ✅ `public/.nojekyll` : fichier présent (même vide)

