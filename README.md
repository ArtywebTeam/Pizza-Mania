# 🍕 Pizza Mania Digital - Site Web Autonome

Reconstruction 100% indépendante et autonome du site web **Pizza Mania** (Gardone Val Trompia, BS), initialement conçu sur une plateforme IA génératrice.

Ce projet a été recréé en **HTML5, CSS3 Vanilla et JavaScript Vanilla**, sans aucun framework lourd, sans SDK propriétaire, et prêt à être déployé sur n'importe quel hébergement statique (GitHub Pages, Netlify, Vercel, Apache, Nginx, cPanel).

---

## 📁 Arborescence du Projet

```text
Pizza-Mania/
├── index.html              # Page d'accueil complète (Hero vidéo, Identité, Menu, Galerie, Avis, Visite/Horaires, Footer)
├── prenota.html            # Page de réservation de table avec formulaire interactif
├── admin.html              # Espace d'administration et de gestion des réservations
├── 404.html                # Page 404 personnalisée
├── css/
│   └── style.css           # Feuille de style Vanilla CSS (Design tokens, Dark/Light mode, Responsive, Animations)
├── js/
│   ├── main.js             # Moteur i18n bilingue (IT/EN), gestionnaire de thème et navigation
│   ├── booking.js          # Logique de réservation, validation et persistance locale
│   └── admin.js            # Tableau de bord d'administration (recherche, filtres, gestion des statuts)
├── assets/
│   ├── images/
│   │   ├── logo.png        # Logo officiel Pizza Mania
│   │   └── gallery/        # 16 photos haute résolution de la galerie
│   │       ├── pizza_1.jpg
│   │       └── ...
│   └── video/
│       └── hero.mp4        # Vidéo de présentation HD en arrière-plan
└── README.md
```

---

## ✨ Fonctionnalités Incluses

1. **Rendu Visuel & Design Pixel-Perfect** :
   - Vidéo Hero plein écran avec dégradé subtil et typographie *Architects Daughter*.
   - Header flottant moderne avec effet **Glassmorphism** (`backdrop-filter: blur(24px)`).
   - Palette de couleurs authentique : Rouge terracotta (`#C84C2E`), accents chauds (`#FF9A7F`, `#FF6B4A`), fonds crème `#F9F7F2` et ardoise `#0F0F0F`.
   - Galerie de 16 photos de pizzas avec zoom fluide au survol.
   - Section horaire d'ouverture et localisation Google Maps intégrée.

2. **Bilinguisme Instantané (IT / EN)** :
   - Commutateur de langue réactif dans la barre de navigation.
   - Changement instantané de toutes les chaînes de texte sans recharger la page.
   - Mémorisation du choix de langue dans `localStorage`.

3. **Mode Sombre / Mode Clair (Dark / Light Mode)** :
   - Commutateur dédié avec icônes dynamiques Soleil / Lune.
   - Transition CSS douce et mémorisation automatique dans `localStorage`.

4. **Système de Réservation & Admin Autonome** :
   - Formulaire accessible avec validation des champs (Nom, téléphone, email, couverts, date, heure, demandes).
   - Enregistrement immédiat dans le navigateur (`localStorage`) pour fonctionner sans base de données.
   - Tableau de bord `/admin.html` avec calcul automatique des invités du jour, barre de recherche, filtre par date et mise à jour des statuts (*Conferma*, *Annulla*, *Conclusa*).

---

## 🚀 Déploiement

Déposez simplement l'ensemble des fichiers sur votre serveur ou votre hébergeur web :
- **Serveur classique (FTP / cPanel / Nginx / Apache)** : Glissez tous les fichiers à la racine de votre dossier `public_html`.
- **Hébergement statique gratuit (Vercel, Netlify, Cloudflare Pages, GitHub Pages)** : Connectez votre dépôt Git ou glissez-déposez le dossier.

### Optionnel : Notification par Email des Réservations
Si vous souhaitez recevoir les réservations directement par email en production, vous pouvez renseigner un endpoint webhook gratuit (ex: **Formspree** ou **Web3Forms**) en ajoutant cette ligne au début de votre page ou dans `js/booking.js` :
```javascript
window.PIZZAMANIA_WEBHOOK_URL = "https://formspree.io/f/votre-id";
```
