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
  // promo: 'Architecture · 2025–2026',
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
    'Étudiante en architecture à l’École Nationale d’Architecture et d’Urbanisme de Tunis, actuellement en 4ᵉ année, je suis passionnée par la conception architecturale, la représentation graphique et la création d’espaces alliant fonctionnalité et sensibilité.',
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
    { name: 'AutoCAD', logo: '/logos/autocad.svg', note: 'Dessin technique' },
    { name: 'Twinmotion', logo: '/logos/twinmotion.svg', note: 'Visualisation temps réel' },
    { name: 'Lumion', logo: '/logos/lumion.ico', note: 'Rendu photoréaliste' },
    { name: 'Adobe Photoshop', logo: '/logos/photoshop.svg', note: 'Retouche & mise en page' },
    { name: 'Autodesk Revit', logo: '/logos/revit.svg', note: 'BIM — initiation' },
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
        src: '/images/soukra-perspective.webp',
        alt: 'Vue en perspective de la bande commerciale et des îlots résidentiels de la Soukra',
        caption: 'Perspective — bande commerciale',
        span: 'half',
      },
      {
        src: '/images/soukra-plan-masse.png',
        alt: 'Plan masse de l’ensemble résidentiel et de ses quatre îlots',
        caption: 'Plan masse — organisation des îlots',
        span: 'half',
      },
      {
        src: '/images/soukra-facade.png',
        alt: 'Élévation photoréaliste de la façade principale de l’ensemble résidentiel de la Soukra',
        caption: 'Élévation sud — ensemble résidentiel, La Soukra',
        span: 'wide',
      },
      {
        src: '/images/soukra-plan-rdc.png',
        alt: 'Plan du rez-de-chaussée du projet résidentiel de la Soukra',
        caption: 'Plan du rez-de-chaussée',
        span: 'half',
      },
      {
        src: '/images/soukra-plan-1er-etage.png',
        alt: 'Plan d’un étage de l’îlot résidentiel de la Soukra',
        caption: 'Plan d’étage — niveau courant',
        span: 'half',
      },
      {
        src: '/images/soukra-plan-2eme-etage.png',
        alt: 'Plan d’un étage supérieur de l’îlot résidentiel de la Soukra',
        caption: 'Plan d’étage — niveau supérieur',
        span: 'half',
      },
      {
        src: '/images/soukra-coupe.png',
        alt: 'Coupe architecturale A-A de l’îlot résidentiel montrant les niveaux et les matériaux',
        caption: 'Coupe A-A — distribution des niveaux',
        span: 'half',
      },
      {
        src: '/images/soukra-residence-nuit.webp',
        alt: 'Vue nocturne d’une résidence de l’ensemble de la Soukra',
        caption: 'Vue nocturne — résidence',
        span: 'wide',
      },
      {
        src: '/images/soukra-interieur-sejour.webp',
        alt: 'Vue intérieure d’un séjour lumineux de la résidence',
        caption: 'Intérieur — séjour',
        span: 'half',
      },
      {
        src: '/images/soukra-interieur-soiree.webp',
        alt: 'Vue en soirée d’un salon de la résidence',
        caption: 'Intérieur — salon en soirée',
        span: 'half',
      },
      {
        src: '/images/soukra-chambre.webp',
        alt: 'Vue intérieure d’une chambre de la résidence',
        caption: 'Intérieur — chambre',
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
        src: '/images/halle-plan-masse.png',
        alt: 'Plan masse de la halle et de ses accès au centre urbain nord',
        caption: 'Plan masse — implantation de la halle',
        span: 'half',
      },
      {
        src: '/images/halle-plan-rdc.png',
        alt: 'Plan du rez-de-chaussée de la halle événementielle',
        caption: 'Plan du rez-de-chaussée',
        span: 'half',
      },
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
        src: '/images/halle-vue-aerienne.webp',
        alt: 'Vue aérienne nocturne de la halle événementielle dans son quartier',
        caption: 'Vue aérienne — insertion urbaine',
        span: 'wide',
      },
      {
        src: '/images/halle-interieur.webp',
        alt: 'Vue intérieure de la structure de la halle événementielle',
        caption: 'Intérieur — portée et structure',
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
        src: '/images/menzel-plan-etage.png',
        alt: 'Plan aménagé de l’étage résidentiel à Menzel Jemil',
        caption: 'Plan d’étage — Menzel Jemil',
        span: 'half',
      },
      {
        src: '/images/menzel-axonometrique.webp',
        alt: 'Vue axonométrique meublée de l’étage résidentiel à Menzel Jemil',
        caption: 'Vue 3D — aménagement intérieur',
        span: 'wide',
      },
    ],
  },
]

export const nav = [
  { id: 'apropos', label: 'À propos' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]
