# Portfolio — Zaiter Sarra

Portfolio d’architecture one-page de **Zaiter Sarra**, étudiante en 4ᵉ année à l’École Nationale
d’Architecture et d’Urbanisme de Tunis (ENAU Tunis).

Conçu avec le design system **UI/UX Pro Max** (style *Minimalism & Swiss* : typographie Archivo +
Space Grotesk, palette monochrome + accent bleu `#2563EB`, grille éditoriale, révélation au scroll
respectueuse de `prefers-reduced-motion`).

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** (thème déclaré dans `src/index.css` via `@theme`)
- Aucune dépendance UI externe : icônes SVG maison, aucune police à installer

## Démarrer

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production → dist/
npm run preview  # prévisualisation du build
npm run lint     # oxlint
```

## Déploiement Vercel

Le projet est prêt pour Vercel sans configuration supplémentaire :

- **Framework preset** : Vite (détecté automatiquement)
- **Build command** : `npm run build`
- **Output directory** : `dist`

Importez simplement le dépôt GitHub dans Vercel, ou en ligne de commande :

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Contenu

| Fichier | Rôle |
|---|---|
| `src/data/site.js` | **Tout le contenu éditorial** (coordonnées, biographie, projets, logiciels, langues) |
| `src/components/` | Header, Hero, Projects, About, Contact, Footer, Reveal, Icons |
| `src/index.css` | Design tokens Tailwind (`@theme`) + styles de base |
| `public/images/` | Visuels du portfolio (rendus, plans, coupes, moodboards, portrait) |
| `design-system/` | Design system persisté (MASTER.md + override page) |
| `tools/` | Scripts d’extraction des visuels depuis Canva et de contrôle de débordement |

### Mettre à jour le contenu

Toutes les informations modifiables (nom, e-mail, téléphone, textes, projets, images) sont dans
`src/data/site.js` : aucune modification de composant n’est nécessaire.

Pour remplacer un visuel : déposer le fichier dans `public/images/` puis mettre à jour le champ
`src` de l’image concernée dans `src/data/site.js`.

### Outils d’extraction Canva

`tools/extract_cache_images.py` extrait les visuels du dossier Canva partagé en lisant le cache
disque du navigateur (les URLs du CDN Canva sont signées et non reproductibles hors session).
`tools/organize_assets.py` renomme ensuite les fichiers avec des noms sémantiques.

## Accessibilité

- Contrastes ≥ 4.5:1, focus visible, lien d’évitement
- Cibles tactiles ≥ 44 px, icônes SVG (aucune emoji), libellés `alt` sur chaque image
- Aucun défilement horizontal (vérifié à 375, 768, 1024 et 1440 px)
