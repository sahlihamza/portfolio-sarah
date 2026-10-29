/**
 * Contenu du portfolio — source : dossier Canva « portfolio » de Zaiter Sarra
 * (DAHJxAM6Mp4) + CV à venir.
 */

export const profile = {
  firstName: 'Sarra',
  lastName: 'ZAITER',
  fullName: 'ZAITER Sarra',
  role: 'Étudiante en architecture',
  school: 'École Nationale d’Architecture et d’Urbanisme de Tunis',
  year: '4ᵉ année',
  promo: 'Architecture · 2025–2026',
  location: 'Menzel Jemil, Bizerte',
  email: 'sarrahzaiter@gmail.com',
  phone: '+216 52 543 545',
  canva:
    'https://www.canva.com/design/DAHJxAM6Mp4/ODV_ZQ6w5fJqBhJpTv05ig/edit?utm_content=DAHJxAM6Mp4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  intro:
    'Je conçois des espaces qui allient fonctionnalité et sensibilité, et je les raconte par le dessin, la lumière et la matière.',
}

export const about = {
  paragraphs: [
    'Étudiante en architecture à l’École Nationale d’Architecture et d’Urbanisme de Tunis, actuellement admise en 4ᵉ année, je suis passionnée par la conception architecturale, la représentation graphique et la création d’espaces alliant fonctionnalité et sensibilité.',
    'Au cours de mon parcours académique, j’ai développé un intérêt particulier pour l’architecture contemporaine, le rapport entre l’usager et l’espace ainsi que les outils numériques de conception et de visualisation.',
    'Je maîtrise plusieurs logiciels de représentation et de modélisation tels qu’AutoCAD, TwinMotion, Lumion, Adobe Photoshop, avec une initiation au BIM à travers Autodesk Revit.',
    'À travers ce portfolio, je présente une sélection de projets académiques reflétant mon évolution, ma démarche conceptuelle et ma vision de l’architecture.',
  ],
  education: [
    {
      school: 'Lycée Menzel Jemil',
      detail: 'Baccalauréat en Sciences Techniques',
    },
    {
      school: 'École Nationale d’Architecture et d’Urbanisme de Tunis',
      detail: 'Architecture — Diplôme de dessinateur en architecture du premier cycle',
    },
  ],
  software: [
    { name: 'AutoCAD', note: 'Dessin technique' },
    { name: 'TwinMotion', note: 'Visualisation temps réel' },
    { name: 'Lumion', note: 'Rendu photoréaliste' },
    { name: 'Adobe Photoshop', note: 'Retouche & mise en page' },
    { name: 'Autodesk Revit', note: 'BIM — initiation' },
  ],
  languages: [
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Intermédiaire' },
  ],
  qualities: [
    'Créativité',
    'Rigueur',
    'Sens du détail',
    'Esprit d’analyse',
    'Travail en équipe',
    'Autonomie',
  ],
}

export const projects = [
  {
    id: 'soukra',
    number: '01',
    title: 'Ensemble résidentiel pour le vivre-ensemble',
    subtitle: 'La Soukra',
    type: 'Projet académique',
    location: 'La Soukra',
    surface: '10 000 m²',
    summary:
      'Un ensemble résidentiel conçu autour d’une bande commerciale en interface urbaine et de quatre îlots d’habitation.',
    body: [
      'Le projet met en place une structure favorisant le vivre-ensemble à travers des espaces collectifs et de rencontre : terrain de basket, espaces partagés, seuils habités.',
      'Une hiérarchie claire organise la transition entre espace public, semi-public et privé, assurant continuité et intimité.',
      'Un îlot résidentiel est développé en profondeur à l’échelle architecturale pour explorer les notions de densité, d’usage et de qualité spatiale.',
    ],
    images: [
      {
        src: '/images/soukra-facade.png',
        alt: 'Élévation photoréaliste de la façade principale de l’ensemble résidentiel de la Soukra',
        caption: 'Élévation sud — ensemble résidentiel, La Soukra',
        span: 'wide',
      },
      {
        src: '/images/soukra-coupe.png',
        alt: 'Coupe architecturale A-A de l’îlot résidentiel montrant les niveaux et les matériaux',
        caption: 'Coupe A-A — distribution des niveaux',
        span: 'half',
      },
    ],
  },
  {
    id: 'halle',
    number: '02',
    title: 'Conception d’une halle événementielle',
    subtitle: 'Phase APS',
    type: 'Projet académique',
    location: 'Centre urbain nord',
    surface: '2 000 m²',
    summary:
      'Un équipement public polyvalent dédié aux événements, expositions et activités culturelles.',
    body: [
      'L’exercice explore les principes structurels d’un équipement public destiné à accueillir des événements, expositions et activités culturelles.',
      'Le travail met l’accent sur la portée, la trame structurelle et la flexibilité des espaces afin de générer un volume libre, adaptable et fonctionnel.',
    ],
    images: [
      {
        src: '/images/halle-jour.png',
        alt: 'Vue de jour de la halle événementielle, large couverture en béton au milieu d’arbres',
        caption: 'Vue d’ensemble — couverture protectrice',
        span: 'half',
      },
      {
        src: '/images/halle-nuit.png',
        alt: 'Vue nocturne de la halle événementielle éclairée, dans un paysage urbain',
        caption: 'Vue au crépuscule — éclairage public',
        span: 'half',
      },
      {
        src: '/images/halle-plan.png',
        alt: 'Plan masse de la halle événementielle en trait blanc sur fond noir',
        caption: 'Plan masse — trame structurelle',
        span: 'wide',
      },
    ],
  },
  {
    id: 'etage-prive',
    number: '03',
    title: 'Plan d’étage — client privé',
    subtitle: 'Réaménagement complet',
    type: 'Projet non académique',
    location: 'Menzel Jemil',
    surface: '145 m²',
    summary:
      'L’aménagement d’un étage résidentiel adapté aux besoins fonctionnels et au mode de vie des occupants.',
    body: [
      'Le travail s’est concentré sur l’optimisation de la distribution spatiale, la fluidité des circulations et l’organisation des espaces de vie.',
      'Une logique de confort, de fonctionnalité et de cohérence architecturale guide chaque choix d’implantation.',
    ],
    images: [
      {
        src: '/images/plan-etage-v1.png',
        alt: 'Plan d’étage d’une cliente privée : chambre parentale, salon, cuisine, couloir et salles de bain',
        caption: 'Plan d’étage — répartition des espaces de vie',
        span: 'half',
      },
      {
        src: '/images/interieur-salon.png',
        alt: 'Rendu photoréaliste d’un salon lumineux avec mobilier contemporain et grandes baies',
        caption: 'Rendu photoréaliste — salon',
        span: 'half',
      },
      {
        src: '/images/interieur-nuit.png',
        alt: 'Rendu photoréaliste d’un salon en soirée, éclairage indirect et sol en bois',
        caption: 'Rendu photoréaliste — ambiance nocturne',
        span: 'wide',
      },
    ],
  },
  {
    id: 'reamenagement',
    number: '04',
    title: 'Réaménagement d’un étage — client privé',
    subtitle: 'V1 → V2',
    type: 'Projet non académique',
    location: 'Tunis',
    surface: '144 m²',
    summary:
      'Deux hypothèses d’aménagement d’un même étage : optimiser la circulation, puis ajuster matière et lumière.',
    body: [
      'Projet non académique réalisé pour une cliente privée, portant sur l’aménagement d’un étage résidentiel adapté aux besoins fonctionnels et spatiaux.',
      'La seconde hypothèse affine la distribution des pièces de vie et rééquilibre le rapport des surfaces, en conservant la structure du plan d’origine.',
      'Les moodboards fixent la palette de matériaux et l’ambiance lumineuse retenues pour la version finale.',
    ],
    images: [
      {
        src: '/images/plan-etage-v2.png',
        alt: 'Deux versions du plan d’étage V1 et V2 comparant la distribution des pièces',
        caption: 'Plans V1 & V2 — deux hypothèses de distribution',
        span: 'half',
      },
      {
        src: '/images/moodboard-global.png',
        alt: 'Moodboard général du projet : axonométrie, palette de matériaux et références',
        caption: 'Moodboard général — matières & références',
        span: 'half',
      },
      {
        src: '/images/moodboard-salon.png',
        alt: 'Moodboard du salon : mobilier, éclairage, numérotation et palette chaude',
        caption: 'Moodboard — salon',
        span: 'half',
      },
      {
        src: '/images/moodboard-chambre.png',
        alt: 'Moodboard de la chambre : lit, rangements et échantillons de finition',
        caption: 'Moodboard — suite parentale',
        span: 'half',
      },
      {
        src: '/images/moodboard-cuisine.png',
        alt: 'Moodboard de la cuisine : meubles, équipements et échantillons',
        caption: 'Moodboard — cuisine',
        span: 'half',
      },
    ],
  },
]

export const nav = [
  { id: 'projets', label: 'Projets' },
  { id: 'apropos', label: 'À propos' },
  { id: 'contact', label: 'Contact' },
]
