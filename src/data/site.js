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
    id: 'ordre-architectes',
    number: '01',
    title: 'Siège de l’Ordre des  architectes',
    subtitle: 'El Manar, Tunis',
    type: 'Équipement institutionnel · APS',
    location: 'El Manar, Tunis, Tunisie',
    detailLabel: 'Programme',
    surface: 'Salle de conférence de 400 places',
    summary:
      'La conception du siège de l’Ordre des architectes : un équipement institutionnel réunissant espaces administratifs, professionnels et événementiels.',
    body: [
      'La démarche cherche un équilibre entre identité institutionnelle, fonctionnalité et expression architecturale, en articulant les espaces administratifs et les espaces ouverts au public, notamment la salle de conférence de 400 places, avec des accès lisibles et des circulations fluides.',
      'Le travail sur les volumes, les pleins et les vides, ainsi que sur la lumière naturelle, définit une architecture contemporaine, cohérente et en dialogue avec son environnement urbain.',
      'Une réflexion sur l’équipement institutionnel, où les exigences programmatiques, techniques et réglementaires deviennent des leviers de composition architecturale.',
    ],
    images: [
      {
        src: '/images/ordre-vue-aerienne.webp',
        alt: 'Vue aérienne du siège de l’Ordre des architectes à El Manar au coucher du soleil, avec sa toiture ondulée blanche et ses lames de bois',
        caption: 'Vue aérienne — toiture ondulée et façade en lames de bois',
        span: 'wide',
      },
      {
        src: '/images/ordre-facade.webp',
        alt: 'Façade du siège de l’Ordre des architectes à El Manar, lames de bois et grandes baies vitrées',
        caption: 'Façade — pleins, vides et lumière naturelle',
        span: 'wide',
      },
      {
        src: '/images/ordre-hall.webp',
        alt: 'Hall d’accueil du siège de l’Ordre des architectes, double hauteur et salon lumineux',
        caption: 'Intérieur — hall d’accueil',
        span: 'half',
      },
      {
        src: '/images/ordre-buvette.webp',
        alt: 'Buvette du siège de l’Ordre des architectes ouverte sur un jardin par de grandes baies vitrées',
        caption: 'Intérieur — buvette',
        span: 'half',
      },
      {
        src: '/images/ordre-plan-implantation.webp',
        alt: 'Plan d’implantation du siège de l’Ordre des architectes dans son environnement, échelle 1/500',
        caption: 'Plan d’implantation — 1/500',
        span: 'half',
      },
      {
        src: '/images/ordre-plan-rdc.webp',
        alt: 'Plan du niveau +0.5 m : réception, bureaux, salle de conseil, salle de conférence, hall d’accueil et buvette',
        caption: 'Plan niveau +0.5 m — 1/200',
        span: 'half',
      },
      {
        src: '/images/ordre-plan-sous-sol.webp',
        alt: 'Plan du sous-sol à -3.1 m : parking en sous-sol',
        caption: 'Plan niveau -3.1 m — parking, 1/200',
        span: 'half',
      },
      {
        src: '/images/ordre-plan-niveau-5.webp',
        alt: 'Plan du niveau +5.1 m avec la salle de conférence de 400 places',
        caption: 'Plan niveau +5.1 m — 1/200',
        span: 'half',
      },
      {
        src: '/images/ordre-plan-niveau-7.webp',
        alt: 'Plan du niveau +7.3 m : espace d’exposition permanente',
        caption: 'Plan niveau +7.3 m — exposition, 1/200',
        span: 'half',
      },
      {
        src: '/images/ordre-plan-niveau-11.webp',
        alt: 'Plan du niveau +11 m : ateliers et espace de détente',
        caption: 'Plan niveau +11 m — ateliers, 1/200',
        span: 'half',
      },
    ],
  },
  {
    id: 'soukra',
    number: '02',
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
    number: '03',
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
    number: '04',
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
