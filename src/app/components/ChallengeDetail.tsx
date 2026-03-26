import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Target, Star, Users, BookOpen, AlertTriangle, Award, Headphones, FileText, Upload, X, Check, ListOrdered } from 'lucide-react';
import { useState } from 'react';

interface Book {
  title: string;
  author: string;
  year: string;
  publisher: string;
  description: string;
}

interface Article {
  title: string;
  source: string;
  description: string;
}

interface Podcast {
  title: string;
  description: string;
}

interface Report {
  title: string;
  organization: string;
  description: string;
}

interface Bibliography {
  books: Book[];
  articles?: Article[];
  podcasts?: Podcast[];
  reports?: Report[];
}

interface ChallengeData {
  id: number;
  title: string;
  category: string;
  difficulty: "Débutant" | "Intermédiaire" | "Avancé";
  description: string;
  points: number;
  participants: number;
  definition: string;
  commentFaire?: string[];
  importance: string;
  vigilance: string[];
  bibliography: Bibliography;
}

export function ChallengeDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const challengesData: ChallengeData[] = [
    {
      id: 1,
      title: "Je mène un entretien en bilatérale",
      category: "Communication",
      difficulty: "Débutant",
      description: "Organisez un entretien individuel structuré avec chaque membre de votre équipe",
      points: 50,
      participants: 342,
      definition: "Un entretien en bilatérale (ou entretien individuel) est un moment privilégié d'échange entre un manager et un collaborateur. Il se tient régulièrement (hebdomadaire, bimensuel ou mensuel) et permet de créer un espace de dialogue ouvert sur les projets en cours, les difficultés rencontrées, les aspirations professionnelles et le bien-être au travail.",
      commentFaire: [
        "Préparez l'entretien : listez les points à aborder et prévoyez un ordre du jour transmis à l'avance",
        "Réservez un créneau de 30 à 45 minutes dans un lieu calme, sans interruption",
        "Ouvrez l'entretien par une question ouverte : « Comment vas-tu ? Qu'est-ce qui est prioritaire pour toi ? »",
        "Écoutez activement : 70 % du temps de parole doit revenir au collaborateur",
        "Utilisez la technique du questionnement pour favoriser la réflexion plutôt que donner des solutions",
        "Concluez par des points d'action concrets et une date pour le prochain entretien",
        "Rédigez un compte-rendu court partagé avec le collaborateur"
      ],
      importance: "Les entretiens en bilatérale sont essentiels pour renforcer la relation de confiance, détecter précocement les problèmes, favoriser l'engagement et créer un espace sécurisé pour le feedback bidirectionnel. Les études montrent que les équipes bénéficiant d'entretiens réguliers présentent un taux d'engagement supérieur de 30%.",
      vigilance: [
        "Ne pas utiliser ce temps uniquement pour le reporting - c'est avant tout un moment d'écoute",
        "Éviter les interruptions : fermer les notifications, réserver une salle au calme",
        "Ne pas reporter systématiquement : la régularité est clé pour créer la confiance",
        "Laisser 70% du temps de parole au collaborateur",
        "Éviter de prendre des décisions à la place du collaborateur"
      ],
      bibliography: {
        books: [
          {
            title: "Pratique des entretiens de management",
            author: "Juët, Rémi",
            year: "2019",
            publisher: "Paris : Dunod",
            description: "Ouvrage de référence présentant les différents entretiens managériaux et les méthodes pour les conduire efficacement."
          },
          {
            title: "Réussir ses entretiens RH : 11 entretiens incontournables",
            author: "Hosdain, Marie-Françoise & Souissi, Corinne",
            year: "2023",
            publisher: "Paris : Gereso",
            description: "Guide pratique sur les principaux entretiens dans l'entreprise."
          }
        ],
        articles: [
          {
            title: "L'entretien individuel : préparer et réussir l'échange",
            source: "Manager GO!",
            description: "Ressource détaillant les étapes clés de préparation et de conduite."
          }
        ],
        podcasts: [
          {
            title: "Le gratin du management",
            description: "Plusieurs épisodes sur le leadership et le feedback."
          }
        ]
      }
    },
    {
      id: 2,
      title: "Je délègue une tâche",
      category: "Délégation",
      difficulty: "Intermédiaire",
      description: "Identifiez une tâche importante et déléguez-la en suivant les meilleures pratiques",
      points: 75,
      participants: 198,
      definition: "La délégation consiste à confier une responsabilité ou une tâche à un collaborateur, tout en conservant la responsabilité finale. Il s'agit de définir clairement les objectifs, d'allouer les ressources nécessaires et d'assurer un suivi adapté.",
      commentFaire: [
        "Identifiez une tâche adaptée au niveau du collaborateur et à son potentiel de développement",
        "Définissez le périmètre : objectif, délai, critères de réussite et niveau d'autonomie",
        "Choisissez le bon moment pour annoncer la délégation et expliquez la confiance que vous accordez",
        "Vérifiez que les ressources (formation, outils, budget) sont disponibles",
        "Convenez d'un mode de suivi (points réguliers, reporting) adapté à la complexité",
        "Donnez du feedback en cours de route sans reprendre la main",
        "Valorisez le résultat et capitalisez sur les apprentissages"
      ],
      importance: "Déléguer permet de développer les compétences de l'équipe, libère du temps pour les activités à forte valeur ajoutée et témoigne de la confiance accordée. Les organisations où la délégation est pratiquée efficacement constatent une augmentation de 25% de la productivité globale.",
      vigilance: [
        "Ne pas tout contrôler : accepter que le collaborateur puisse faire différemment",
        "Éviter de reprendre la tâche au moindre obstacle",
        "Ne pas déléguer uniquement les tâches ingrates",
        "Veiller à ne pas surcharger toujours les mêmes personnes",
        "S'assurer que le collaborateur dispose des ressources nécessaires"
      ],
      bibliography: {
        books: [
          {
            title: "Manager par la confiance : Responsabiliser et déléguer",
            author: "Petit, François & Dubois, Michel",
            year: "2020",
            publisher: "Paris : Dunod",
            description: "Guide pratique sur l'art de déléguer en développant la confiance."
          },
          {
            title: "Déléguer pour mieux manager",
            author: "Cadin, Loïc & Guérin, Francis",
            year: "2018",
            publisher: "Paris : Eyrolles",
            description: "Méthodes et outils pour déléguer efficacement."
          }
        ]
      }
    },
    {
      id: 3,
      title: "Je gère un conflit d'équipe",
      category: "Gestion des conflits",
      difficulty: "Avancé",
      description: "Résolvez un conflit en utilisant des techniques de médiation et communication non-violente",
      points: 100,
      participants: 87,
      definition: "La gestion de conflit consiste à identifier, comprendre et résoudre les tensions qui émergent entre membres d'une équipe. La médiation managériale implique d'adopter une posture neutre, d'écouter activement et de co-construire des solutions acceptables.",
      commentFaire: [
        "Intervenez dès les premiers signaux pour éviter l'escalade",
        "Convoquez les parties séparément pour comprendre les points de vue de chacun",
        "Organisez une réunion de médiation dans un lieu neutre et calme",
        "Énoncez les règles : écoute, respect, confidentialité",
        "Laissez chaque partie s'exprimer sans interruption",
        "Reformulez pour vérifier la compréhension et identifier les besoins sous-jacents",
        "Co-construisez des solutions et des engagements mutuels avec un suivi défini"
      ],
      importance: "Les conflits non résolus peuvent gravement impacter la performance : baisse de productivité de 20-30%, augmentation de l'absentéisme. À l'inverse, un conflit bien géré peut devenir une opportunité de clarification et de renforcement de la cohésion.",
      vigilance: [
        "Ne pas ignorer les signaux faibles : intervenir tôt évite l'escalade",
        "Éviter de prendre parti ou de minimiser les ressentis",
        "Ne pas chercher un coupable mais comprendre les causes systémiques",
        "Respecter la confidentialité",
        "Savoir reconnaître quand faire appel à un médiateur externe"
      ],
      bibliography: {
        books: [
          {
            title: "La médiation en entreprise : Faciliter le dialogue",
            author: "Carré, Christophe & Garnier, Patricia",
            year: "2017",
            publisher: "Paris : Dunod",
            description: "Guide complet sur la médiation des conflits en milieu professionnel."
          },
          {
            title: "Les mots sont des fenêtres (ou bien ce sont des murs)",
            author: "Rosenberg, Marshall B.",
            year: "2016",
            publisher: "Paris : La Découverte",
            description: "Introduction à la Communication Non Violente (CNV)."
          }
        ]
      }
    },
    {
      id: 4,
      title: "J'organise un atelier de feedback",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      description: "Créez un espace sûr pour des retours constructifs entre collaborateurs",
      points: 75,
      participants: 256,
      definition: "Un atelier de feedback est une session structurée où les membres d'une équipe s'échangent des retours constructifs dans un cadre bienveillant et sécurisé. L'objectif est de créer une culture du feedback continu.",
      commentFaire: [
        "Présentez l'objectif et les règles de sécurité psychologique (bienveillance, confidentialité)",
        "Briefez les participants sur les techniques : situation, comportement, impact, demande (SBID)",
        "Proposez un warm-up : échange de feedback positifs en binômes",
        "Lancez des tours de table structurés avec un temps limité par personne",
        "Animez les échanges pour garder un ton constructif et éviter les jugements",
        "Concluez par des engagements d'action individuels ou collectifs",
        "Planifiez un debrief d'équipe pour capitaliser sur les apprentissages"
      ],
      importance: "Le feedback est l'un des leviers les plus puissants du développement professionnel. Les équipes pratiquant régulièrement le feedback affichent une amélioration de la performance de 12-15% et une satisfaction au travail accrue.",
      vigilance: [
        "Établir un cadre de sécurité psychologique clair dès le départ",
        "Former l'équipe aux techniques de feedback constructif",
        "Ne pas forcer les participants",
        "Veiller à l'équilibre entre retours positifs et axes d'amélioration",
        "Prévoir un temps d'action : le feedback doit déboucher sur des engagements"
      ],
      bibliography: {
        books: [
          {
            title: "Oser le feedback : Le guide pour pratiquer la culture du retour",
            author: "Silber, Franck & Veyer, Stéphane",
            year: "2021",
            publisher: "Paris : Eyrolles",
            description: "Méthodes pratiques pour instaurer une culture du feedback."
          },
          {
            title: "Feedback efficace",
            author: "Lecomte, Caroline",
            year: "2019",
            publisher: "Paris : Dunod",
            description: "Techniques pour donner et recevoir du feedback constructif."
          }
        ]
      }
    },
    {
      id: 5,
      title: "Je définis une vision d'équipe inspirante",
      category: "Développement du manager",
      difficulty: "Avancé",
      description: "Co-construisez avec votre équipe une vision motivante et alignée sur les objectifs",
      points: 100,
      participants: 145,
      definition: "La vision d'équipe est une projection claire et inspirante de ce que l'équipe souhaite accomplir à moyen/long terme. Elle répond aux questions : 'Pourquoi existons-nous ?' et 'Quel impact voulons-nous avoir ?'. Elle doit être co-construite avec l'équipe.",
      importance: "Une vision claire augmente l'engagement des équipes de 40%. Elle donne du sens au travail quotidien, aide à prioriser les projets et facilite la prise de décision autonome. Elle joue un rôle d'ancrage dans les périodes de transformation.",
      vigilance: [
        "Éviter une vision imposée top-down : impliquer l'équipe est essentiel",
        "Ne pas confondre vision (aspirationnelle) et objectifs (mesurables)",
        "Veiller à ce que la vision soit authentique et crédible",
        "La revisiter régulièrement et l'ajuster si nécessaire",
        "S'assurer que chaque membre comprend comment il contribue à cette vision"
      ],
      bibliography: {
        books: [
          {
            title: "Commencez par pourquoi",
            author: "Sinek, Simon",
            year: "2015",
            publisher: "Paris : Pearson",
            description: "Méthode pour définir une vision inspirante en commençant par le 'pourquoi'."
          },
          {
            title: "Manager avec sens : Redonner du souffle à son équipe",
            author: "Cornuel, Marion",
            year: "2021",
            publisher: "Paris : Vuibert",
            description: "Approches pour co-construire une vision porteuse de sens."
          }
        ]
      }
    },
    {
      id: 6,
      title: "Je pratique l'écoute active quotidienne",
      category: "Communication",
      difficulty: "Débutant",
      description: "Exercez-vous à l'écoute active dans vos interactions quotidiennes",
      points: 50,
      participants: 421,
      definition: "L'écoute active est une technique de communication qui consiste à être pleinement présent et attentif à son interlocuteur, sans jugement ni interruption. Elle implique de reformuler, poser des questions ouvertes et observer le langage non-verbal.",
      importance: "L'écoute active est à la base de toute relation managériale de qualité. Elle permet de détecter les non-dits, de créer un climat de confiance et de prendre des décisions plus éclairées. Les managers pratiquant l'écoute active rapportent une réduction de 50% des malentendus.",
      vigilance: [
        "Limiter les distractions : fermer son ordinateur, poser son téléphone",
        "Ne pas préparer sa réponse pendant que l'autre parle",
        "Attention aux biais d'interprétation",
        "Ne pas confondre écoute active et passivité",
        "Reconnaître ses limites : on ne peut pas être en écoute active 100% du temps"
      ],
      bibliography: {
        books: [
          {
            title: "Savoir écouter, ça s'apprend !",
            author: "Van Stappen, Anne",
            year: "2018",
            publisher: "Paris : Jouvence",
            description: "Techniques concrètes pour développer ses capacités d'écoute active."
          },
          {
            title: "L'écoute en psychologie et en psychothérapie",
            author: "Rogers, Carl R.",
            year: "2019",
            publisher: "Paris : ESF éditeur",
            description: "Référence fondamentale sur l'écoute active."
          }
        ]
      }
    },
    {
      id: 7,
      title: "Je mets en place un plan de développement",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      description: "Créez un plan de développement personnalisé pour chaque membre de l'équipe",
      points: 75,
      participants: 176,
      definition: "Un plan de développement individuel (PDI) est un document co-construit qui identifie les compétences à développer, les objectifs d'évolution et les actions concrètes (formations, missions apprenantes, mentorat).",
      importance: "Le PDI est un puissant outil de rétention : 94% des employés resteraient plus longtemps dans une entreprise qui investit dans leur développement. Il permet d'aligner les aspirations individuelles avec les besoins de l'organisation.",
      vigilance: [
        "Le PDI ne doit pas être un exercice administratif",
        "Éviter de promettre des évolutions irréalistes",
        "Ne pas confondre PDI et évaluation de performance",
        "Prévoir un budget et du temps pour la formation",
        "Faire des points réguliers sur l'avancement"
      ],
      bibliography: {
        books: [
          {
            title: "Manager les talents et les compétences",
            author: "Aubret, Jacques & Aubret, Françoise",
            year: "2017",
            publisher: "Paris : Dunod",
            description: "Méthodes pour construire des plans de développement individuels."
          },
          {
            title: "La boîte à outils de la Motivation",
            author: "Manoukian, Sophie & Massin, Laurence",
            year: "2020",
            publisher: "Paris : Dunod",
            description: "Outils pratiques pour motiver et développer les talents."
          }
        ]
      }
    },
    {
      id: 8,
      title: "J'anime une réunion de crise",
      category: "Développement du manager",
      difficulty: "Avancé",
      description: "Menez une réunion de crise avec calme et efficacité",
      points: 100,
      participants: 92,
      definition: "Une réunion de crise est un moment de coordination rapide face à une situation urgente. Elle vise à rassembler les bonnes personnes, établir un diagnostic partagé et coordonner les actions. Le manager doit combiner sang-froid et clarté.",
      importance: "La manière dont un manager gère une crise détermine la confiance de l'équipe. Une réunion de crise bien menée limite l'impact négatif et permet un retour rapide à la normale. C'est dans ces moments que le leadership se révèle.",
      vigilance: [
        "Ne pas céder à la panique : le calme du manager est contagieux",
        "Éviter de chercher des coupables pendant la crise",
        "Ne pas prendre toutes les décisions seul",
        "Communiquer régulièrement pour rassurer",
        "Prévoir un débrief post-crise pour capitaliser"
      ],
      bibliography: {
        books: [
          {
            title: "Gestion de crise : Anticiper les risques",
            author: "Roux-Dufort, Christophe",
            year: "2021",
            publisher: "Bruxelles : De Boeck",
            description: "Approches pour anticiper et gérer les situations de crise."
          },
          {
            title: "Manager en temps de crise",
            author: "Autissier, David & Moutot, Jean-Michel",
            year: "2020",
            publisher: "Paris : Dunod",
            description: "Outils pour piloter son équipe en situation de crise."
          }
        ]
      }
    },
    {
      id: 9,
      title: "Je propose des réunions sans ordinateurs ni téléphone",
      category: "Communication",
      difficulty: "Débutant",
      description: "Organisez des réunions où les participants se concentrent uniquement sur l'échange",
      points: 50,
      participants: 234,
      definition: "Les réunions sans écran visent à éliminer les distractions numériques pour favoriser la présence et l'attention de tous les participants. Cette pratique renforce la qualité des échanges et l'engagement collectif.",
      importance: "Les études montrent que les participants aux réunions sont distraits par leurs appareils 30% du temps. Éliminer les écrans améliore la concentration, la créativité et réduit la durée des réunions de 20%.",
      vigilance: [
        "Annoncer cette règle en amont pour permettre aux participants de s'organiser",
        "Prévoir un espace pour poser les appareils à l'entrée",
        "Gérer les urgences : définir une personne de contact externe",
        "Être exemplaire en tant que manager",
        "Expliquer le 'pourquoi' pour favoriser l'adhésion"
      ],
      bibliography: {
        books: [
          {
            title: "La réunion efficace",
            author: "Bellenger, Lionel",
            year: "2018",
            publisher: "Paris : ESF",
            description: "Méthodes pour optimiser l'efficacité des réunions."
          },
          {
            title: "Deep Work : Retrouver la concentration",
            author: "Newport, Cal",
            year: "2017",
            publisher: "Paris : Leduc",
            description: "L'importance de la concentration profonde dans le travail."
          }
        ]
      }
    },
    {
      id: 10,
      title: "Je crée des modèles de réponse pour les mails récurrents",
      category: "Gestion du temps",
      difficulty: "Débutant",
      description: "Optimisez votre temps en créant des modèles pour vos emails fréquents",
      points: 30,
      participants: 387,
      definition: "Créer des modèles d'emails consiste à préparer des réponses types pour les demandes fréquentes, personnalisables en quelques clics. Cette pratique s'inscrit dans une démarche d'optimisation du temps.",
      importance: "Les managers passent en moyenne 2h30 par jour sur leurs emails. Les modèles permettent de réduire ce temps de 30% tout en maintenant la qualité des réponses et en réduisant la charge mentale.",
      vigilance: [
        "Personnaliser suffisamment pour éviter les réponses trop génériques",
        "Réviser régulièrement les modèles pour qu'ils restent pertinents",
        "Ne pas utiliser de modèles pour les situations sensibles",
        "Informer l'équipe de l'existence de ces modèles",
        "Veiller au ton : rester chaleureux malgré l'automatisation"
      ],
      bibliography: {
        books: [
          {
            title: "S'organiser pour réussir : La méthode GTD",
            author: "Allen, David",
            year: "2015",
            publisher: "Paris : Leduc",
            description: "Méthode complète d'organisation et de gestion du temps."
          },
          {
            title: "L'art de l'essentiel",
            author: "Babauta, Leo",
            year: "2019",
            publisher: "Paris : Alisio",
            description: "Simplifier pour se concentrer sur l'essentiel."
          }
        ]
      }
    },
    {
      id: 11,
      title: "Je propose régulièrement de l'aide",
      category: "Développement du manager",
      difficulty: "Débutant",
      description: "Développez une posture de manager-coach en offrant votre soutien proactivement",
      points: 50,
      participants: 298,
      definition: "Proposer régulièrement son aide consiste à adopter une posture de manager-coach en identifiant proactivement les besoins de soutien de ses collaborateurs et en se rendant disponible pour les accompagner.",
      importance: "Cette posture renforce la confiance, réduit le stress des collaborateurs et améliore la performance collective. Les équipes dont le manager adopte cette approche montrent 35% de problèmes résolus plus rapidement.",
      vigilance: [
        "Ne pas imposer son aide : respecter l'autonomie",
        "Éviter le micro-management déguisé",
        "Être sincère dans sa disponibilité",
        "Différencier aide et prise en charge totale",
        "Valoriser les collaborateurs qui demandent de l'aide"
      ],
      bibliography: {
        books: [
          {
            title: "Manager coach",
            author: "Cardon, Alain & Lenhardt, Vincent",
            year: "2019",
            publisher: "Paris : Eyrolles",
            description: "Développer une posture de manager-coach efficace."
          },
          {
            title: "Le leader coach",
            author: "Whitmore, John",
            year: "2017",
            publisher: "Paris : Maxima",
            description: "Principes du coaching appliqués au management."
          }
        ]
      }
    },
    {
      id: 12,
      title: "J'utilise les jeux de rôle pour favoriser la pensée critique",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      description: "Mettez en place des exercices de jeux de rôle pour développer l'esprit critique",
      points: 75,
      participants: 142,
      definition: "Les jeux de rôle managériaux sont des simulations où les collaborateurs incarnent différents rôles pour explorer des situations complexes, développer leur empathie et aiguiser leur esprit critique.",
      importance: "Cette méthode pédagogique active améliore la compréhension des enjeux de 60%, développe les soft skills et prépare aux situations délicates dans un environnement sécurisé.",
      vigilance: [
        "Créer un cadre de sécurité psychologique fort",
        "Prévoir un temps de débriefing structuré",
        "Adapter les scénarios au niveau de maturité de l'équipe",
        "Ne pas humilier ou mettre en difficulté",
        "Relier les apprentissages aux situations réelles"
      ],
      bibliography: {
        books: [
          {
            title: "Former sans ennuyer",
            author: "Hourst, Bruno & Thiagarajan, Sivasailam",
            year: "2018",
            publisher: "Paris : Eyrolles",
            description: "Méthodes pédagogiques actives et ludiques."
          },
          {
            title: "Jeux et activités de formation",
            author: "Couchaere, Marie-José",
            year: "2020",
            publisher: "Paris : ESF",
            description: "Plus de 100 activités pour former autrement."
          }
        ]
      }
    },
    {
      id: 13,
      title: "Je donne régulièrement des feedbacks à mes collaborateurs",
      category: "Communication",
      difficulty: "Intermédiaire",
      description: "Instaurez une culture du feedback continu et constructif dans votre équipe",
      points: 75,
      participants: 312,
      definition: "Le feedback régulier consiste à donner des retours fréquents, spécifiques et constructifs sur le travail des collaborateurs, dans un esprit de développement continu plutôt que d'évaluation ponctuelle.",
      importance: "Les collaborateurs recevant du feedback hebdomadaire sont 3 fois plus engagés. Le feedback régulier permet d'ajuster rapidement, de célébrer les succès et de corriger les écarts avant qu'ils ne deviennent problématiques.",
      vigilance: [
        "Équilibrer feedback positif et axes d'amélioration (ratio 4/1 recommandé)",
        "Donner le feedback au plus près de l'événement",
        "Être spécifique et factuel, éviter les jugements",
        "S'assurer que le contexte est propice",
        "Vérifier la compréhension et l'engagement"
      ],
      bibliography: {
        books: [
          {
            title: "Oser le feedback",
            author: "Silber, Franck & Veyer, Stéphane",
            year: "2021",
            publisher: "Paris : Eyrolles",
            description: "Guide complet pour pratiquer la culture du feedback."
          },
          {
            title: "Radical Candor : Soyez un boss génial",
            author: "Scott, Kim",
            year: "2019",
            publisher: "Paris : Alisio",
            description: "Méthode pour donner du feedback direct et bienveillant."
          }
        ]
      }
    },
    {
      id: 14,
      title: "Je propose des réunions courtes en position debout",
      category: "Gestion du temps",
      difficulty: "Débutant",
      description: "Testez les stand-up meetings pour des réunions plus efficaces et dynamiques",
      points: 50,
      participants: 265,
      definition: "Les réunions debout (stand-up meetings) sont des réunions courtes (15 minutes maximum) où les participants restent debout. Format issu des méthodes agiles, elles favorisent la concision et l'efficacité.",
      importance: "Les réunions debout réduisent la durée moyenne des réunions de 34% sans perte de qualité. Elles maintiennent l'énergie, limitent les digressions et améliorent la participation de tous.",
      vigilance: [
        "Limiter strictement la durée (timer visible)",
        "S'assurer de l'accessibilité pour tous (proposer des alternatives si nécessaire)",
        "Préparer un ordre du jour précis",
        "Rester debout soi-même en tant que manager",
        "Ne pas traiter de sujets complexes nécessitant réflexion approfondie"
      ],
      bibliography: {
        books: [
          {
            title: "Scrum : Le guide pratique",
            author: "Pichler, Roman",
            year: "2018",
            publisher: "Paris : Pearson",
            description: "Méthodes agiles incluant les stand-up meetings."
          },
          {
            title: "La réunion efficace",
            author: "Bellenger, Lionel",
            year: "2018",
            publisher: "Paris : ESF",
            description: "Optimiser tous types de réunions."
          }
        ]
      }
    },
    {
      id: 15,
      title: "Je pratique le management visuel",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      description: "Mettez en place des outils visuels pour améliorer la communication et le suivi d'équipe",
      points: 75,
      participants: 189,
      definition: "Le management visuel consiste à rendre visible l'information importante par des tableaux, indicateurs, workflows affichés. Inspiré du Lean, il permet à tous de comprendre rapidement l'état d'avancement et les priorités.",
      importance: "Le management visuel réduit de 25% le temps passé en réunions de suivi, améliore la transparence et responsabilise les équipes. Il crée un langage commun accessible à tous.",
      vigilance: [
        "Ne pas surcharger : sélectionner les informations vraiment utiles",
        "Mettre à jour régulièrement (sinon perte de crédibilité)",
        "Impliquer l'équipe dans la conception des visuels",
        "Adapter aux spécificités du travail à distance (outils digitaux)",
        "Protéger les informations sensibles"
      ],
      bibliography: {
        books: [
          {
            title: "Management visuel : Améliorer la performance",
            author: "Greif, Michel",
            year: "2017",
            publisher: "Paris : Eyrolles",
            description: "Guide complet du management visuel."
          },
          {
            title: "Le Lean Management",
            author: "Hohmann, Christian",
            year: "2020",
            publisher: "Paris : Eyrolles",
            description: "Principes du Lean incluant le management visuel."
          }
        ]
      }
    },
    {
      id: 16,
      title: "Je crée une cartographie des parties prenantes",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      description: "Identifiez et cartographiez l'ensemble des parties prenantes de vos projets",
      points: 75,
      participants: 203,
      definition: "La cartographie des parties prenantes est un outil stratégique qui identifie tous les acteurs (internes et externes) impactés par ou impactant les projets, analyse leur niveau d'influence et leurs intérêts.",
      importance: "Cette cartographie permet d'anticiper les résistances, d'identifier les alliés, d'adapter la communication et d'augmenter significativement le taux de réussite des projets (+ 40% selon le PMI).",
      vigilance: [
        "Actualiser régulièrement : les parties prenantes évoluent",
        "Ne pas sous-estimer les acteurs à faible pouvoir formel",
        "Protéger la confidentialité de cette analyse",
        "Croiser plusieurs points de vue pour éviter les angles morts",
        "Passer de l'analyse à l'action : plan d'engagement"
      ],
      bibliography: {
        books: [
          {
            title: "Management de projet : Fondamentaux",
            author: "Marchat, Hervé",
            year: "2019",
            publisher: "Paris : Dunod",
            description: "Méthodes de gestion de projet incluant l'analyse des parties prenantes."
          },
          {
            title: "Conduire le changement : Processus, outils, cas pratiques",
            author: "Autissier, David & Moutot, Jean-Michel",
            year: "2021",
            publisher: "Paris : Dunod",
            description: "Stratégies d'engagement des parties prenantes."
          }
        ]
      }
    },
    {
      id: 17,
      title: "Je charge mes collaborateurs de rédiger une cartographie des compétences",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      description: "Impliquez votre équipe dans l'identification et la cartographie de leurs compétences",
      points: 75,
      participants: 167,
      definition: "La cartographie des compétences est un processus participatif où les collaborateurs identifient, documentent et visualisent les compétences présentes dans l'équipe, leurs niveaux de maîtrise et les besoins de développement.",
      importance: "Cet exercice développe la connaissance mutuelle, facilite les mobilités internes, identifie les compétences critiques et les risques. Il responsabilise les collaborateurs sur leur développement.",
      vigilance: [
        "Créer un climat de confiance : pas d'utilisation punitive",
        "Définir un référentiel de compétences clair",
        "Permettre l'auto-évaluation validée par le manager",
        "Ne pas se limiter aux compétences techniques",
        "Faire vivre le document : révision annuelle"
      ],
      bibliography: {
        books: [
          {
            title: "Gestion des compétences : La grande maturation",
            author: "Defélix, Christian & Retour, Didier",
            year: "2019",
            publisher: "Paris : Vuibert",
            description: "Approches modernes de la gestion des compétences."
          },
          {
            title: "Manager les talents et les compétences",
            author: "Aubret, Jacques",
            year: "2017",
            publisher: "Paris : Dunod",
            description: "Outils de cartographie et développement des compétences."
          }
        ]
      }
    },
    {
      id: 18,
      title: "J'organise un « vis mon travail »",
      category: "Développement d'équipe",
      difficulty: "Débutant",
      description: "Organisez des échanges de poste pour favoriser la compréhension mutuelle",
      points: 50,
      participants: 284,
      definition: "Le « vis mon travail » est un dispositif où les collaborateurs échangent leurs postes pendant une demi-journée ou une journée pour mieux comprendre les réalités, contraintes et expertises de leurs collègues.",
      importance: "Cette pratique améliore la collaboration de 30%, réduit les conflits liés aux incompréhensions, développe l'empathie et peut révéler des opportunités d'amélioration des processus.",
      vigilance: [
        "Bien préparer : briefing et accompagnement",
        "Choisir des binômes pertinents",
        "Prévoir un temps de débriefing structuré",
        "S'assurer de la continuité du service",
        "Valoriser les apprentissages dans la durée"
      ],
      bibliography: {
        books: [
          {
            title: "L'intelligence collective : Clé du monde de demain",
            author: "Lévy, Pierre",
            year: "2018",
            publisher: "Paris : La Découverte",
            description: "Développer la compréhension mutuelle en équipe."
          },
          {
            title: "Cohésion d'équipe : 25 outils",
            author: "Benard, Anne-Laure",
            year: "2020",
            publisher: "Paris : Gereso",
            description: "Activités pour renforcer la cohésion."
          }
        ]
      }
    },
    {
      id: 19,
      title: "Je propose des formations en ligne adaptées aux missions",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      description: "Identifiez et proposez des formations en ligne personnalisées pour chaque collaborateur",
      points: 75,
      participants: 221,
      definition: "Proposer des formations en ligne adaptées consiste à identifier les besoins de développement individuels et à sélectionner des contenus pédagogiques digitaux (MOOC, webinaires, e-learning) alignés sur les missions et aspirations.",
      importance: "La formation continue est un facteur clé de rétention (94% des salariés resteraient plus longtemps). Les formations en ligne offrent flexibilité, personnalisation et réduction des coûts de 40 à 60%.",
      vigilance: [
        "Personnaliser vraiment : éviter le catalogue générique",
        "Prévoir du temps dédié pendant les heures de travail",
        "Accompagner : ne pas laisser seul face au contenu",
        "Valoriser les certifications obtenues",
        "Mesurer l'impact sur la pratique professionnelle"
      ],
      bibliography: {
        books: [
          {
            title: "Former avec le digital",
            author: "Liquète, Vincent & Pybourdin, Isabelle",
            year: "2020",
            publisher: "Paris : ESF",
            description: "Intégrer le digital dans les parcours de formation."
          },
          {
            title: "Manager les talents",
            author: "Aubret, Jacques",
            year: "2017",
            publisher: "Paris : Dunod",
            description: "Développer les compétences de ses équipes."
          }
        ]
      }
    },
    {
      id: 20,
      title: "Je travaille avec mon équipe à la définition d'indicateurs",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      description: "Co-construisez des indicateurs de performance pertinents et motivants",
      points: 75,
      participants: 156,
      definition: "La co-construction d'indicateurs consiste à définir avec l'équipe les métriques qui mesureront la performance, en équilibrant efficacité, qualité et bien-être, pour créer un pilotage partagé.",
      importance: "Les indicateurs co-construits augmentent l'engagement de 45% car ils sont perçus comme légitimes et actionnables. Ils favorisent l'autonomie et la responsabilisation.",
      vigilance: [
        "Équilibrer indicateurs quantitatifs et qualitatifs",
        "Éviter la surcharge : 3-5 indicateurs clés maximum",
        "S'assurer qu'ils sont actionnables par l'équipe",
        "Réviser régulièrement la pertinence",
        "Ne pas créer de compétition malsaine"
      ],
      bibliography: {
        books: [
          {
            title: "Les tableaux de bord de la performance",
            author: "Fernandez, Alain",
            year: "2019",
            publisher: "Paris : Eyrolles",
            description: "Concevoir et utiliser des indicateurs efficaces."
          },
          {
            title: "Le pilotage de la performance",
            author: "Mendoza, Carla & Zrihen, Roland",
            year: "2018",
            publisher: "Paris : Dunod",
            description: "Construire un système de pilotage participatif."
          }
        ]
      }
    },
    {
      id: 21,
      title: "Je réalise une cartographie des moyens et des missions",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      description: "Clarifiez l'organisation de votre service en cartographiant missions et ressources",
      points: 75,
      participants: 178,
      definition: "Cette cartographie est un diagnostic organisationnel qui met en regard les missions du service, les ressources disponibles (humaines, matérielles, budgétaires) et identifie les écarts, redondances ou manques.",
      importance: "Cet exercice permet d'objectiver les tensions, de prioriser les missions, de justifier les demandes de ressources et d'optimiser l'organisation. Il réduit de 25% les situations de surcharge.",
      vigilance: [
        "Impliquer l'équipe dans le diagnostic",
        "Être factuel et documenté",
        "Ne pas utiliser uniquement pour demander plus de moyens",
        "Identifier aussi les opportunités d'optimisation",
        "Partager les résultats avec la hiérarchie"
      ],
      bibliography: {
        books: [
          {
            title: "Diagnostic et pilotage stratégique",
            author: "Helfer, Jean-Pierre",
            year: "2019",
            publisher: "Paris : Vuibert",
            description: "Outils de diagnostic organisationnel."
          },
          {
            title: "Manager une équipe projet",
            author: "Marchat, Hervé",
            year: "2019",
            publisher: "Paris : Dunod",
            description: "Analyser et optimiser les ressources."
          }
        ]
      }
    },
    {
      id: 22,
      title: "J'accepte de recevoir du feedback",
      category: "Communication",
      difficulty: "Débutant",
      description: "Développez une posture d'ouverture en sollicitant et accueillant les retours",
      points: 50,
      participants: 356,
      definition: "Accepter de recevoir du feedback consiste à solliciter activement les retours de ses collaborateurs sur son propre management et à les accueillir avec ouverture, sans défensivité.",
      importance: "Les managers ouverts au feedback augmentent la confiance de leur équipe de 55% et améliorent leur efficacité managériale. C'est un signal fort de leadership humble et apprenant.",
      vigilance: [
        "Créer un cadre sécurisant pour les collaborateurs",
        "Ne pas se justifier immédiatement : écouter d'abord",
        "Remercier sincèrement, même si c'est difficile à entendre",
        "Passer à l'action sur au moins un point",
        "Faire un retour sur ce qu'on a changé"
      ],
      bibliography: {
        books: [
          {
            title: "Merci pour ce feedback",
            author: "Stone, Douglas & Heen, Sheila",
            year: "2019",
            publisher: "Paris : Alisio",
            description: "Apprendre à recevoir du feedback constructivement."
          },
          {
            title: "Le leader humble",
            author: "Schein, Edgar & Schein, Peter",
            year: "2020",
            publisher: "Paris : Pearson",
            description: "La puissance de l'humilité en leadership."
          }
        ]
      }
    },
    {
      id: 23,
      title: "Je remercie, j'apprends à dire merci",
      category: "Communication",
      difficulty: "Débutant",
      description: "Instaurez une culture de la reconnaissance en remerciant régulièrement",
      points: 30,
      participants: 412,
      definition: "Apprendre à dire merci consiste à exprimer régulièrement et spécifiquement sa gratitude pour les contributions, efforts et qualités de ses collaborateurs, de manière sincère et personnalisée.",
      importance: "La reconnaissance est le premier facteur de motivation selon 80% des salariés. Un simple merci authentique augmente l'engagement de 15% et ne coûte rien.",
      vigilance: [
        "Être spécifique : dire pourquoi on remercie",
        "Être sincère : pas de remerciements automatiques",
        "Varier les formes : oral, écrit, public, privé",
        "Ne pas limiter aux grandes réussites",
        "Remercier équitablement toute l'équipe"
      ],
      bibliography: {
        books: [
          {
            title: "La reconnaissance au travail : Recherche et réalités",
            author: "Brun, Jean-Pierre & Dugas, Ninon",
            year: "2017",
            publisher: "Québec : PUL",
            description: "Études sur l'impact de la reconnaissance."
          },
          {
            title: "Merci ! Quand la reconnaissance fait du bien",
            author: "Emmons, Robert",
            year: "2018",
            publisher: "Paris : Belfond",
            description: "La psychologie de la gratitude."
          }
        ]
      }
    },
    {
      id: 24,
      title: "Je mets en place une matrice des responsabilités",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      description: "Clarifiez les rôles et responsabilités avec une matrice RACI",
      points: 75,
      participants: 198,
      definition: "La matrice des responsabilités (RACI) définit pour chaque activité qui est Responsable (réalise), Accountable (décideur final), Consulté et Informé. Elle clarifie les rôles et évite les zones grises.",
      importance: "Les équipes utilisant une matrice RACI réduisent de 40% les conflits liés aux rôles et améliorent leur efficacité. Elle est particulièrement utile en transversal et sur les projets.",
      vigilance: [
        "Limiter le nombre de personnes 'Consultées' pour éviter la paralysie",
        "Une seule personne 'Accountable' par activité",
        "Construire collectivement et valider",
        "Actualiser lors des changements d'organisation",
        "Ne pas bureaucratiser : rester pragmatique"
      ],
      bibliography: {
        books: [
          {
            title: "Manager une équipe projet",
            author: "Marchat, Hervé",
            year: "2019",
            publisher: "Paris : Dunod",
            description: "Utiliser la matrice RACI en gestion de projet."
          },
          {
            title: "Réussir sa matrice des responsabilités",
            author: "Smith, Martin",
            year: "2018",
            publisher: "Paris : Eyrolles",
            description: "Guide pratique de la méthode RACI."
          }
        ]
      }
    },
    {
      id: 25,
      title: "Je définis des règles pour l'usage des courriels",
      category: "Gestion du temps",
      difficulty: "Débutant",
      description: "Établissez une charte d'utilisation des emails pour améliorer l'efficacité",
      points: 50,
      participants: 289,
      definition: "Une charte email définit collectivement les bonnes pratiques : quand utiliser le mail ou un autre canal, les règles de copie, les délais de réponse attendus, les plages horaires à respecter.",
      importance: "Les managers reçoivent en moyenne 120 emails/jour. Une charte réduit de 30% le volume et améliore la qualité. Elle protège aussi le droit à la déconnexion.",
      vigilance: [
        "Co-construire avec l'équipe pour l'adhésion",
        "Être exemplaire dans l'application",
        "Prévoir des alternatives aux emails (chat, téléphone)",
        "Respecter le droit à la déconnexion",
        "Réviser annuellement"
      ],
      bibliography: {
        books: [
          {
            title: "Arrêtez de répondre à vos emails",
            author: "Naboudet, Géraldine",
            year: "2019",
            publisher: "Paris : First",
            description: "Reprendre le contrôle de sa messagerie."
          },
          {
            title: "L'art de l'essentiel",
            author: "Babauta, Leo",
            year: "2019",
            publisher: "Paris : Alisio",
            description: "Simplifier sa communication professionnelle."
          }
        ]
      }
    },
    {
      id: 26,
      title: "Je participe à l'attractivité de mon service",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      description: "Développez des actions pour rendre votre service attractif",
      points: 75,
      participants: 167,
      definition: "Participer à l'attractivité consiste à développer la marque employeur du service par des actions concrètes : témoignages, présence sur les réseaux, participation aux forums, amélioration des conditions de travail.",
      importance: "Dans un contexte de tensions sur le recrutement, l'attractivité est cruciale. Les services actifs sur ce sujet réduisent de 50% leur temps de recrutement et attirent des profils plus qualifiés.",
      vigilance: [
        "Être authentique : ne pas survendre",
        "Impliquer les collaborateurs comme ambassadeurs",
        "Travailler le fond avant la forme (conditions réelles)",
        "Cibler les bons canaux selon les profils recherchés",
        "Mesurer l'impact des actions"
      ],
      bibliography: {
        books: [
          {
            title: "La marque employeur : Attirer et fidéliser",
            author: "Panczuk, Serge & Point, Sébastien",
            year: "2018",
            publisher: "Paris : Eyrolles",
            description: "Stratégies de marque employeur efficaces."
          },
          {
            title: "Recruter dans la fonction publique",
            author: "Peretti, Jean-Marie",
            year: "2020",
            publisher: "Paris : Vuibert",
            description: "Spécificités du recrutement public."
          }
        ]
      }
    },
    {
      id: 27,
      title: "J'implique mes collaborateurs dans le choix d'un nouveau candidat",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      description: "Associez votre équipe au processus de recrutement",
      points: 75,
      participants: 143,
      definition: "Impliquer l'équipe dans le recrutement consiste à les faire participer à la définition du profil, à la revue de CV, aux entretiens ou à l'accueil. Cela renforce l'appropriation collective de la nouvelle arrivée.",
      importance: "Cette pratique améliore de 60% l'intégration des nouvelles recrues et réduit le turnover précoce. Elle responsabilise l'équipe et valorise leur expertise.",
      vigilance: [
        "Former les collaborateurs aux techniques d'entretien",
        "Définir clairement les rôles de chacun",
        "Le manager conserve la décision finale",
        "Respecter la confidentialité des candidatures",
        "Débriefing structuré après chaque entretien"
      ],
      bibliography: {
        books: [
          {
            title: "Réussir vos recrutements",
            author: "Falcoz, Christophe",
            year: "2019",
            publisher: "Paris : Dunod",
            description: "Méthodes de recrutement collaboratif."
          },
          {
            title: "L'entretien de recrutement",
            author: "Bellier, Sandra",
            year: "2018",
            publisher: "Paris : ESF",
            description: "Conduire des entretiens efficaces."
          }
        ]
      }
    },
    {
      id: 28,
      title: "Je mets en place le Flex office",
      category: "Développement du manager",
      difficulty: "Avancé",
      description: "Organisez un système de bureaux partagés adapté aux besoins",
      points: 100,
      participants: 98,
      definition: "Le flex office est un mode d'organisation où les collaborateurs n'ont pas de bureau attitré mais choisissent leur espace selon leurs activités. Il nécessite une réflexion sur les usages, les espaces et les règles.",
      importance: "Le flex office peut réduire les coûts immobiliers de 20-30% et favoriser la collaboration. Mais mal implémenté, il génère stress et baisse de productivité. L'accompagnement est crucial.",
      vigilance: [
        "Co-construire avec l'équipe : ne pas imposer",
        "Prévoir suffisamment de postes et de diversité d'espaces",
        "Équiper en outils digitaux adaptés",
        "Accompagner le changement culturel",
        "Évaluer régulièrement et ajuster"
      ],
      bibliography: {
        books: [
          {
            title: "Les nouveaux espaces de travail",
            author: "Boboc, Anca & Metzger, Jean-Luc",
            year: "2019",
            publisher: "Paris : La Découverte",
            description: "Analyse sociologique des nouvelles organisations spatiales."
          },
          {
            title: "Conduire le changement",
            author: "Autissier, David & Moutot, Jean-Michel",
            year: "2021",
            publisher: "Paris : Dunod",
            description: "Accompagner les transformations organisationnelles."
          }
        ]
      }
    },
    {
      id: 30,
      title: "J'incite mon équipe à s'inscrire en auto-formation",
      category: "Développement d'équipe",
      difficulty: "Débutant",
      description: "Encouragez l'apprentissage autonome en proposant des ressources",
      points: 50,
      participants: 267,
      definition: "Inciter à l'auto-formation consiste à proposer des ressources accessibles (MOOC, podcasts, livres) et à créer une culture où le temps d'apprentissage autonome est valorisé et intégré dans l'organisation du travail.",
      importance: "L'auto-formation développe l'autonomie, l'agilité d'apprentissage et permet une montée en compétences continue et personnalisée. C'est un levier puissant d'employabilité.",
      vigilance: [
        "Prévoir du temps dédié pendant les heures de travail",
        "Accompagner : aider à choisir les bonnes ressources",
        "Valoriser les apprentissages (partage en équipe)",
        "Ne pas créer de pression supplémentaire",
        "S'assurer de l'accessibilité (équipement, connexion)"
      ],
      bibliography: {
        books: [
          {
            title: "Apprendre à apprendre",
            author: "Giordan, André & Saltet, Jérôme",
            year: "2019",
            publisher: "Paris : Librio",
            description: "Développer ses capacités d'apprentissage."
          },
          {
            title: "Former avec le digital",
            author: "Liquète, Vincent",
            year: "2020",
            publisher: "Paris : ESF",
            description: "Accompagner l'auto-formation digitale."
          }
        ]
      }
    },
    {
      id: 31,
      title: "Je mets en place le quifaitquoi avec mon équipe",
      category: "Développement du manager",
      difficulty: "Débutant",
      description: "Créez un document collaboratif qui clarifie les rôles et missions",
      points: 50,
      participants: 321,
      definition: "Le 'quifaitquoi' est un document partagé et accessible qui liste les activités du service et identifie le ou les responsables de chacune. Simple et visuel, il clarifie l'organisation.",
      importance: "Cet outil réduit de 35% les questions sur 'qui s'occupe de quoi', facilite l'intégration des nouveaux, permet de repérer les doublons et manques, et fluidifie la collaboration.",
      vigilance: [
        "Tenir à jour : révision mensuelle minimum",
        "Rendre accessible et visible",
        "Impliquer tous les collaborateurs dans la rédaction",
        "Ne pas stigmatiser les inégalités de charge (les traiter séparément)",
        "Compléter avec les compétences et pas seulement les activités"
      ],
      bibliography: {
        books: [
          {
            title: "S'organiser pour réussir : GTD",
            author: "Allen, David",
            year: "2015",
            publisher: "Paris : Leduc",
            description: "Méthode d'organisation et de clarification."
          },
          {
            title: "Management visuel",
            author: "Greif, Michel",
            year: "2017",
            publisher: "Paris : Eyrolles",
            description: "Rendre l'organisation visible."
          }
        ]
      }
    },
    {
      id: 32,
      title: "Je mets en place un dossier partagé avec des fiches de procédure",
      category: "Gestion du temps",
      difficulty: "Débutant",
      description: "Centralisez les procédures pour faciliter l'autonomie et le partage",
      points: 50,
      participants: 298,
      definition: "Un dossier de procédures partagées centralise les modes opératoires, tutoriels et bonnes pratiques accessibles à tous, permettant l'autonomie, la capitalisation et la continuité de service.",
      importance: "Cette documentation réduit de 40% le temps de formation, sécurise le service en cas d'absence et facilite l'intégration. Chaque heure investie en fait gagner 10.",
      vigilance: [
        "Privilégier la simplicité : pas de jargon inutile",
        "Tenir à jour : nommer des responsables par thème",
        "Inclure des captures d'écran ou vidéos",
        "Organiser logiquement (arborescence claire)",
        "Impliquer les experts terrain dans la rédaction"
      ],
      bibliography: {
        books: [
          {
            title: "Knowledge Management",
            author: "Prax, Jean-Yves",
            year: "2019",
            publisher: "Paris : Dunod",
            description: "Capitaliser et partager les connaissances."
          },
          {
            title: "Documentation technique efficace",
            author: "Millet, David",
            year: "2018",
            publisher: "Paris : Eyrolles",
            description: "Rédiger des procédures claires."
          }
        ]
      }
    },
    {
      id: 33,
      title: "J'agis pour l'employabilité des agents publics",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      description: "Développez les compétences transférables et la mobilité professionnelle",
      points: 75,
      participants: 189,
      definition: "Agir pour l'employabilité consiste à développer intentionnellement les compétences transférables de ses collaborateurs, à les exposer à des projets variés et à les préparer aux évolutions du marché du travail.",
      importance: "Dans un monde en transformation, l'employabilité est une responsabilité partagée. Les agents qui se sentent employables sont plus engagés, innovants et restent plus longtemps dans l'organisation.",
      vigilance: [
        "Ne pas craindre la mobilité : la bloquer est contre-productif",
        "Valoriser les compétences soft autant que techniques",
        "Encourager les projets transverses",
        "Accompagner les bilans de compétences",
        "Célébrer les mobilités comme des succès"
      ],
      bibliography: {
        books: [
          {
            title: "Employabilité et mobilité professionnelle",
            author: "Finot, André",
            year: "2019",
            publisher: "Paris : Vuibert",
            description: "Développer l'employabilité dans les organisations."
          },
          {
            title: "Gérer les parcours professionnels",
            author: "Defélix, Christian",
            year: "2020",
            publisher: "Paris : EMS",
            description: "Accompagner les trajectoires professionnelles."
          }
        ]
      }
    },
    {
      id: 34,
      title: "Je mets en place le mentorat pour le développement professionnel",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      description: "Organisez un système de mentorat pour favoriser la transmission",
      points: 75,
      participants: 176,
      definition: "Le mentorat est une relation d'accompagnement où un professionnel expérimenté (mentor) guide le développement d'un moins expérimenté (mentoré) par le partage d'expérience, de réseau et de conseils.",
      importance: "Le mentorat accélère de 50% le développement des compétences, améliore la rétention et crée du lien intergénérationnel. 70% des PDG du Fortune 500 ont eu un mentor.",
      vigilance: [
        "Former les mentors : ce n'est pas inné",
        "Clarifier les attentes et le cadre dès le départ",
        "Respecter la confidentialité des échanges",
        "Prévoir des points d'étape tripartites",
        "Limiter la durée (6-12 mois) pour éviter la dépendance"
      ],
      bibliography: {
        books: [
          {
            title: "Le mentorat en entreprise",
            author: "Lescarbeau, Robert & Fournier, Cécile",
            year: "2018",
            publisher: "Paris : Eyrolles",
            description: "Guide complet pour mettre en place le mentorat."
          },
          {
            title: "Manager coach",
            author: "Cardon, Alain",
            year: "2019",
            publisher: "Paris : Eyrolles",
            description: "Développer une posture d'accompagnement."
          }
        ]
      }
    },
    {
      id: 35,
      title: "J'optimise mon temps en contexte professionnel",
      category: "Gestion du temps",
      difficulty: "Intermédiaire",
      description: "Mettez en place des techniques d'organisation personnelle",
      points: 75,
      participants: 334,
      definition: "Optimiser son temps consiste à identifier ses priorités, éliminer les activités à faible valeur ajoutée, automatiser, déléguer et organiser son agenda selon son rythme biologique et ses objectifs.",
      importance: "Les managers passent 40% de leur temps sur des activités à faible impact. Une bonne gestion du temps libère du temps pour le stratégique, réduit le stress et améliore l'équilibre vie pro/perso.",
      vigilance: [
        "Identifier ses vrais voleurs de temps (mesurer avant d'agir)",
        "Ne pas confondre urgent et important (matrice Eisenhower)",
        "Préserver des plages de deep work sans interruption",
        "Apprendre à dire non avec bienveillance",
        "S'autoriser des pauses : la productivité n'est pas linéaire"
      ],
      bibliography: {
        books: [
          {
            title: "S'organiser pour réussir : La méthode GTD",
            author: "Allen, David",
            year: "2015",
            publisher: "Paris : Leduc",
            description: "Référence mondiale en gestion du temps."
          },
          {
            title: "Deep Work : Retrouver la concentration",
            author: "Newport, Cal",
            year: "2017",
            publisher: "Paris : Leduc",
            description: "Travailler en profondeur dans un monde de distractions."
          }
        ]
      }
    },
    {
      id: 36,
      title: "Je valorise les compétences extra-professionnelles",
      category: "Développement d'équipe",
      difficulty: "Débutant",
      description: "Reconnaissez et intégrez les compétences acquises hors du cadre professionnel",
      points: 50,
      participants: 245,
      definition: "Valoriser les compétences extra-professionnelles consiste à reconnaître et mobiliser les talents développés dans la vie associative, sportive, artistique ou familiale des collaborateurs pour enrichir le collectif.",
      importance: "Ces compétences (organisation d'événements, gestion de groupe, créativité...) sont souvent sous-exploitées. Les reconnaître augmente l'estime de soi et ouvre des opportunités d'innovation.",
      vigilance: [
        "Créer des moments d'échange informels pour les découvrir",
        "Ne pas forcer : certains préfèrent cloisonner",
        "Valoriser sans instrumentaliser",
        "Respecter le temps personnel : pas de sollicitations abusives",
        "Reconnaître officiellement ces compétences (fiches de poste)"
      ],
      bibliography: {
        books: [
          {
            title: "Le bilan de compétences",
            author: "Gérard, Pascal",
            year: "2019",
            publisher: "Paris : Dunod",
            description: "Identifier et valoriser toutes ses compétences."
          },
          {
            title: "Manager les talents",
            author: "Aubret, Jacques",
            year: "2017",
            publisher: "Paris : Dunod",
            description: "Révéler les potentiels cachés."
          }
        ]
      }
    },
    {
      id: 37,
      title: "Je favorise la cohésion d'équipe à distance",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      description: "Créez des rituels et moments de partage adaptés au travail hybride",
      points: 75,
      participants: 212,
      definition: "Favoriser la cohésion à distance implique de créer intentionnellement des moments de connexion humaine (rituels, pauses café virtuelles, activités ludiques) pour compenser la perte des interactions informelles.",
      importance: "Le télétravail augmente le risque d'isolement et de perte de cohésion. Les équipes qui investissent dans des rituels à distance maintiennent un niveau d'engagement équivalent au présentiel.",
      vigilance: [
        "Ne pas imposer : proposer et ajuster selon les retours",
        "Varier les formats pour inclure tous les profils",
        "Limiter la durée : éviter la fatigue Zoom",
        "Créer de vraies pauses détente, pas des réunions déguisées",
        "Maintenir aussi des rencontres physiques régulières"
      ],
      bibliography: {
        books: [
          {
            title: "Manager une équipe à distance",
            author: "Scouarnec, Aline & Yanat, Zahir",
            year: "2020",
            publisher: "Paris : EMS",
            description: "Adapter son management au télétravail."
          },
          {
            title: "Le guide du télétravail",
            author: "Taskin, Laurent",
            year: "2021",
            publisher: "Bruxelles : De Boeck",
            description: "Bonnes pratiques du travail à distance."
          }
        ]
      }
    },
    {
      id: 38,
      title: "Je prends la parole en public",
      category: "Communication",
      difficulty: "Intermédiaire",
      description: "Développez votre aisance à l'oral en vous entraînant",
      points: 75,
      participants: 187,
      definition: "Prendre la parole en public est la capacité à présenter des idées de manière claire, convaincante et engageante devant un auditoire. C'est une compétence qui se travaille par la pratique et la technique.",
      importance: "La prise de parole est une compétence clé du leadership. Elle permet d'influencer, d'inspirer et de fédérer. 70% des professionnels considèrent que c'est essentiel pour progresser.",
      vigilance: [
        "Préparer intensément : le naturel vient de la maîtrise",
        "Connaître son auditoire et adapter le message",
        "Gérer le stress : respiration, visualisation positive",
        "Utiliser le storytelling plutôt que les statistiques brutes",
        "S'entraîner devant des collègues bienveillants"
      ],
      bibliography: {
        books: [
          {
            title: "Parler en public : TED, le guide officiel",
            author: "Anderson, Chris",
            year: "2017",
            publisher: "Paris : Flammarion",
            description: "Techniques des meilleurs orateurs TED."
          },
          {
            title: "Convaincre en moins de 2 minutes",
            author: "Boothman, Nicholas",
            year: "2018",
            publisher: "Paris : Marabout",
            description: "Techniques de communication persuasive."
          }
        ]
      }
    },
    {
      id: 39,
      title: "Avant d'assigner une tâche, je vérifie la charge de travail",
      category: "Délégation",
      difficulty: "Débutant",
      description: "Prévenez la surcharge en évaluant systématiquement le temps disponible",
      points: 50,
      participants: 367,
      definition: "Vérifier la charge consiste à avoir une vision claire de la disponibilité réelle de chaque collaborateur avant de confier une nouvelle tâche, en tenant compte des priorités et des deadlines existantes.",
      importance: "La surcharge est la première cause de stress au travail (64% des salariés). Vérifier la charge prévient le burn-out, améliore la qualité du travail et témoigne du respect pour ses équipes.",
      vigilance: [
        "Ne pas se fier aux apparences : certains ne savent pas dire non",
        "Tenir compte de la charge invisible (réunions, emails)",
        "Utiliser des outils de suivi de charge (tableaux, logiciels)",
        "Aider à prioriser si nécessaire",
        "Réévaluer régulièrement : la charge évolue"
      ],
      bibliography: {
        books: [
          {
            title: "Manager par la confiance",
            author: "Petit, François",
            year: "2020",
            publisher: "Paris : Dunod",
            description: "Déléguer en respectant la charge de travail."
          },
          {
            title: "Prévenir le burn-out",
            author: "Zawieja, Philippe",
            year: "2019",
            publisher: "Paris : Armand Colin",
            description: "Identifier et prévenir la surcharge."
          }
        ]
      }
    },
    {
      id: 40,
      title: "À la fin d'un projet, je propose un temps informel pour célébrer",
      category: "Développement d'équipe",
      difficulty: "Débutant",
      description: "Valorisez les réussites collectives en organisant un moment convivial",
      points: 30,
      participants: 398,
      definition: "Célébrer la fin d'un projet consiste à marquer symboliquement la clôture par un moment convivial (déjeuner, pot, activité) qui reconnaît les efforts, renforce la cohésion et permet de décompresser.",
      importance: "Célébrer les réussites augmente la motivation de 30%, renforce le sentiment d'appartenance et crée des souvenirs positifs qui nourrissent l'identité d'équipe.",
      vigilance: [
        "Inclure tous les contributeurs, même indirects",
        "Adapter le format aux préférences de l'équipe",
        "Ne pas transformer en réunion bilan",
        "Respecter ceux qui ne peuvent/veulent pas participer",
        "Célébrer aussi les petites victoires, pas seulement les grandes"
      ],
      bibliography: {
        books: [
          {
            title: "La reconnaissance au travail",
            author: "Brun, Jean-Pierre",
            year: "2017",
            publisher: "Québec : PUL",
            description: "L'importance de célébrer les réussites."
          },
          {
            title: "Cohésion d'équipe",
            author: "Benard, Anne-Laure",
            year: "2020",
            publisher: "Paris : Gereso",
            description: "Rituels pour renforcer le collectif."
          }
        ]
      }
    },
    {
      id: 41,
      title: "Je ne fixe aucune réunion après 18h",
      category: "Gestion du temps",
      difficulty: "Débutant",
      description: "Respectez l'équilibre vie professionnelle/personnelle",
      points: 50,
      participants: 423,
      definition: "Ne pas fixer de réunions tardives est une pratique qui respecte le droit à la déconnexion et l'équilibre des temps de vie, en limitant les sollicitations professionnelles aux horaires de travail standard.",
      importance: "Le respect des horaires réduit de 40% le stress, améliore la qualité de vie et augmente paradoxalement la productivité. C'est aussi une obligation légale dans de nombreux contextes.",
      vigilance: [
        "Être exemplaire : ne pas envoyer d'emails tardifs non plus",
        "Adapter aux équipes internationales (décalage horaire)",
        "Prévoir des exceptions pour les vraies urgences uniquement",
        "Communiquer clairement cette règle aux parties prenantes",
        "Compenser si exception : récupération"
      ],
      bibliography: {
        books: [
          {
            title: "Le droit à la déconnexion",
            author: "Chauvet, Alexandra",
            year: "2020",
            publisher: "Paris : Législatives",
            description: "Cadre juridique et bonnes pratiques."
          },
          {
            title: "L'équilibre vie pro/vie perso",
            author: "Laval, Chantal",
            year: "2019",
            publisher: "Paris : Dunod",
            description: "Concilier efficacité et qualité de vie."
          }
        ]
      }
    },
    {
      id: 42,
      title: "Je laisse dans mon agenda des créneaux vides pour les imprévus",
      category: "Gestion du temps",
      difficulty: "Débutant",
      description: "Anticipez les urgences en réservant des plages horaires tampons",
      points: 50,
      participants: 341,
      definition: "Réserver des plages tampons consiste à ne pas remplir son agenda à 100% mais à garder intentionnellement 20-30% de temps libre pour absorber les imprévus, réfléchir et respirer.",
      importance: "Un agenda surchargé transforme chaque imprévu en stress. Les plages tampons réduisent l'anxiété de 50%, améliorent la réactivité et permettent de prendre du recul.",
      vigilance: [
        "Protéger ces créneaux comme des réunions importantes",
        "Ne pas les remplir systématiquement 'puisqu'ils sont libres'",
        "Les utiliser aussi pour la réflexion stratégique",
        "Adapter le % selon la prévisibilité de son activité",
        "Communiquer cette pratique pour légitimer"
      ],
      bibliography: {
        books: [
          {
            title: "S'organiser pour réussir : GTD",
            author: "Allen, David",
            year: "2015",
            publisher: "Paris : Leduc",
            description: "Gérer son temps et ses priorités."
          },
          {
            title: "L'art de l'essentiel",
            author: "Babauta, Leo",
            year: "2019",
            publisher: "Paris : Alisio",
            description: "Créer de l'espace dans son agenda."
          }
        ]
      }
    },
    {
      id: 43,
      title: "Au démarrage d'un projet, j'interroge mon équipe sur leurs espoirs et craintes",
      category: "Communication",
      difficulty: "Débutant",
      description: "Créez un climat de confiance en recueillant les attentes et appréhensions",
      points: 50,
      participants: 279,
      definition: "L'exercice 'espoirs et craintes' consiste à demander à chaque membre de l'équipe d'exprimer ce qu'ils espèrent et ce qu'ils craignent au démarrage d'un projet, pour créer un dialogue ouvert et anticiper les difficultés.",
      importance: "Cette pratique réduit de 35% les résistances au changement, crée de la sécurité psychologique et permet d'ajuster le pilotage du projet aux besoins réels de l'équipe.",
      vigilance: [
        "Créer un cadre bienveillant et confidentiel",
        "Accueillir toutes les craintes sans jugement",
        "Ne pas minimiser ou rassurer trop vite",
        "Transformer en plan d'action concret",
        "Revenir régulièrement sur ces espoirs et craintes"
      ],
      bibliography: {
        books: [
          {
            title: "Facilitation graphique",
            author: "Sibbet, David",
            year: "2018",
            publisher: "Paris : Eyrolles",
            description: "Techniques d'animation d'ateliers collectifs."
          },
          {
            title: "Manager avec les pratiques agiles",
            author: "Benard, Anne-Laure",
            year: "2020",
            publisher: "Paris : Gereso",
            description: "50 ateliers pour améliorer la collaboration."
          }
        ]
      }
    },
    {
      id: 45,
      title: "J'identifie mes facteurs de stress professionnels",
      category: "Gestion du stress",
      difficulty: "Débutant",
      description: "Analysez vos sources de stress pour mieux les anticiper et les gérer",
      points: 50,
      participants: 389,
      definition: "Identifier ses stresseurs consiste à analyser objectivement les situations, personnes ou tâches qui génèrent du stress, à en comprendre les mécanismes et à développer des stratégies d'adaptation spécifiques.",
      importance: "Le stress chronique affecte la santé, la prise de décision et les relations. L'identifier est la première étape pour le gérer. Les managers qui connaissent leurs stresseurs réduisent de 40% leurs symptômes.",
      vigilance: [
        "Tenir un journal du stress pendant 2 semaines pour objectiver",
        "Différencier stress utile (eustress) et stress toxique (distress)",
        "Ne pas culpabiliser : le stress est une réaction normale",
        "Identifier ce qui est dans son contrôle vs ce qui ne l'est pas",
        "Consulter si le stress devient envahissant"
      ],
      bibliography: {
        books: [
          {
            title: "Gérer son stress",
            author: "Cungi, Charly",
            year: "2018",
            publisher: "Paris : Retz",
            description: "Comprendre et gérer son stress au quotidien."
          },
          {
            title: "Le stress au travail",
            author: "Légeron, Patrick",
            year: "2019",
            publisher: "Paris : Odile Jacob",
            description: "Analyse des facteurs de stress professionnel."
          }
        ]
      }
    },
    {
      id: 46,
      title: "Je mets en place des rituels de déconnexion",
      category: "Gestion du stress",
      difficulty: "Intermédiaire",
      description: "Créez des moments de pause et de transition pour préserver votre équilibre",
      points: 75,
      participants: 312,
      definition: "Les rituels de déconnexion sont des pratiques régulières (marche, méditation, sport, lecture) qui marquent la fin du temps de travail et permettent de basculer vers le temps personnel en évacuant le stress.",
      importance: "Sans transition, le cerveau reste en mode travail. Les rituels améliorent de 60% la qualité du sommeil et de la récupération, essentielles pour la performance durable.",
      vigilance: [
        "Choisir des rituels qui vous correspondent vraiment",
        "Les planifier comme des rendez-vous non négociables",
        "Commencer petit (15 minutes) et progresser",
        "Couper les notifications professionnelles",
        "Être patient : l'habitude prend 66 jours en moyenne"
      ],
      bibliography: {
        books: [
          {
            title: "Le pouvoir des habitudes",
            author: "Duhigg, Charles",
            year: "2016",
            publisher: "Paris : Flammarion",
            description: "Créer des rituels efficaces."
          },
          {
            title: "L'art de la déconnexion",
            author: "Jauréguiberry, Francis",
            year: "2019",
            publisher: "Paris : La Découverte",
            description: "Se déconnecter dans un monde hyperconnecté."
          }
        ]
      }
    },
    {
      id: 47,
      title: "J'organise des ateliers de gestion du stress pour mon équipe",
      category: "Gestion du stress",
      difficulty: "Intermédiaire",
      description: "Proposez des outils et techniques de gestion du stress collectivement",
      points: 75,
      participants: 198,
      definition: "Organiser des ateliers de gestion du stress consiste à proposer des sessions collectives animées par des professionnels (sophrologues, psychologues) pour apprendre des techniques concrètes : respiration, relaxation, gestion des émotions.",
      importance: "Ces ateliers réduisent de 30% le stress perçu, créent une culture où parler du stress est légitime et donnent des outils concrets immédiatement applicables.",
      vigilance: [
        "Faire appel à des professionnels qualifiés",
        "Organiser sur le temps de travail",
        "Ne pas forcer la participation : proposer, pas imposer",
        "Assurer la confidentialité",
        "Compléter par des ressources individualisées"
      ],
      bibliography: {
        books: [
          {
            title: "Prévenir le stress et les risques psychosociaux",
            author: "Nasse, Philippe & Légeron, Patrick",
            year: "2018",
            publisher: "Paris : Dunod",
            description: "Actions de prévention collective du stress."
          },
          {
            title: "Cohérence cardiaque 365",
            author: "O'Hare, David",
            year: "2019",
            publisher: "Paris : Thierry Souccar",
            description: "Technique de gestion du stress accessible."
          }
        ]
      }
    },
    {
      id: 48,
      title: "Je développe ma résilience face aux situations difficiles",
      category: "Gestion du stress",
      difficulty: "Avancé",
      description: "Renforcez votre capacité à rebondir face aux épreuves professionnelles",
      points: 100,
      participants: 124,
      definition: "La résilience est la capacité à traverser les épreuves, à s'adapter aux changements et à rebondir plus fort. Elle se développe par l'acceptation, la recherche de sens, le soutien social et l'apprentissage continu.",
      importance: "Dans un environnement VUCA, la résilience est une compétence critique. Les leaders résilients inspirent leurs équipes, maintiennent la performance en crise et transforment les échecs en apprentissages.",
      vigilance: [
        "Ne pas confondre résilience et stoïcisme : accueillir ses émotions",
        "S'autoriser à demander de l'aide",
        "Identifier ses ressources internes et externes",
        "Cultiver l'optimisme réaliste, pas la pensée magique",
        "Accepter que certaines situations nécessitent un accompagnement psy"
      ],
      bibliography: {
        books: [
          {
            title: "La résilience : Psychologie du rebond",
            author: "Cyrulnik, Boris & Jorland, Gérard",
            year: "2019",
            publisher: "Paris : Odile Jacob",
            description: "Comprendre et développer la résilience."
          },
          {
            title: "Option B : Affronter l'adversité",
            author: "Sandberg, Sheryl & Grant, Adam",
            year: "2017",
            publisher: "Paris : Fayard",
            description: "Rebondir après les épreuves."
          }
        ]
      }
    },
    {
      id: 49,
      title: "Je facilite la montée en compétences de mes collaborateurs",
      category: "Je fais grandir mon équipe",
      difficulty: "Intermédiaire",
      description: "Identifiez les besoins de développement et accompagnez la progression",
      points: 75,
      participants: 267,
      definition: "Faciliter la montée en compétences consiste à identifier les besoins de développement, co-construire des plans d'action (formations, tutorat, projets apprenants) et accompagner activement la progression de chacun.",
      importance: "C'est la responsabilité première du manager de développer son équipe. Les collaborateurs qui progressent sont 5 fois plus engagés et performants.",
      vigilance: [
        "Individualiser : chacun a son rythme et ses besoins",
        "Ne pas se limiter à la formation formelle",
        "Créer des opportunités d'apprentissage au quotidien",
        "Célébrer les progrès, même petits",
        "Allouer du temps et des ressources : ne pas que des intentions"
      ],
      bibliography: {
        books: [
          {
            title: "Manager les talents et les compétences",
            author: "Aubret, Jacques",
            year: "2017",
            publisher: "Paris : Dunod",
            description: "Développer les compétences de son équipe."
          },
          {
            title: "L'organisation apprenante",
            author: "Senge, Peter",
            year: "2018",
            publisher: "Paris : Eyrolles",
            description: "Créer une culture d'apprentissage continu."
          }
        ]
      }
    },
    {
      id: 50,
      title: "J'encourage la prise d'initiative et l'autonomie",
      category: "Je fais grandir mon équipe",
      difficulty: "Intermédiaire",
      description: "Créez un environnement où vos collaborateurs osent proposer et tester",
      points: 75,
      participants: 298,
      definition: "Encourager l'autonomie consiste à créer un cadre où les collaborateurs peuvent prendre des décisions, expérimenter et proposer des idées sans crainte de sanctions, en assumant un droit à l'erreur.",
      importance: "L'autonomie est le deuxième facteur de motivation après le sens. Les équipes autonomes sont 30% plus innovantes et réactives.",
      vigilance: [
        "Clarifier le cadre : zones d'autonomie vs zones décisionnelles",
        "Accepter vraiment le droit à l'erreur (pas que des mots)",
        "Ne pas reprendre la main au premier problème",
        "Valoriser les initiatives, même non abouties",
        "Développer progressivement : adapter au niveau de maturité"
      ],
      bibliography: {
        books: [
          {
            title: "Liberté & Cie : Quand la liberté des salariés fait le succès",
            author: "Getz, Isaac & Carney, Brian",
            year: "2016",
            publisher: "Paris : Flammarion",
            description: "Entreprises libérées et autonomie des équipes."
          },
          {
            title: "Manager par la confiance",
            author: "Petit, François",
            year: "2020",
            publisher: "Paris : Dunod",
            description: "Développer l'autonomie par la confiance."
          }
        ]
      }
    },
    {
      id: 51,
      title: "Je mets en place un programme de co-développement",
      category: "Je fais grandir mon équipe",
      difficulty: "Avancé",
      description: "Organisez des sessions où les collaborateurs s'entraident",
      points: 100,
      participants: 156,
      definition: "Le co-développement est une approche structurée où un groupe de pairs se réunit régulièrement pour s'entraider sur leurs problématiques professionnelles par l'intelligence collective, selon un protocole précis.",
      importance: "Le co-développement développe l'autonomie, la solidarité et les capacités de résolution de problèmes. 85% des participants rapportent des impacts concrets sur leur pratique.",
      vigilance: [
        "Se former à la méthode : il y a un protocole strict",
        "Composer des groupes de pairs (même niveau hiérarchique)",
        "Garantir la confidentialité absolue",
        "Prévoir 2h toutes les 4-6 semaines minimum",
        "Le manager peut participer mais dans un autre groupe"
      ],
      bibliography: {
        books: [
          {
            title: "Le co-développement professionnel",
            author: "Payette, Adrien & Champagne, Claude",
            year: "2017",
            publisher: "Québec : PUQ",
            description: "Référence sur la méthode de co-développement."
          },
          {
            title: "Groupes d'analyse de pratiques",
            author: "Fablet, Dominique",
            year: "2019",
            publisher: "Paris : L'Harmattan",
            description: "Dispositifs d'apprentissage collectif."
          }
        ]
      }
    },
    {
      id: 52,
      title: "Je crée des opportunités d'apprentissage sur le terrain",
      category: "Je fais grandir mon équipe",
      difficulty: "Débutant",
      description: "Proposez des missions variées qui permettent d'acquérir de nouvelles compétences",
      points: 50,
      participants: 345,
      definition: "Créer des opportunités d'apprentissage consiste à confier intentionnellement des missions ou projets qui sortent de la zone de confort et permettent de développer de nouvelles compétences dans l'action.",
      importance: "70% de l'apprentissage se fait sur le terrain (modèle 70-20-10). Ces missions développent plus efficacement que la formation formelle et maintiennent la motivation.",
      vigilance: [
        "Doser le challenge : ni trop facile, ni écrasant (zone proximale)",
        "Accompagner sans faire à la place",
        "Sécuriser : droit à l'erreur et filet de sécurité",
        "Débriefer après : qu'as-tu appris ?",
        "Répartir équitablement ces opportunités"
      ],
      bibliography: {
        books: [
          {
            title: "Le modèle 70-20-10",
            author: "Jennings, Charles & Wargnier, Jérôme",
            year: "2018",
            publisher: "Paris : Dunod",
            description: "Apprendre en situation de travail."
          },
          {
            title: "Manager coach",
            author: "Cardon, Alain",
            year: "2019",
            publisher: "Paris : Eyrolles",
            description: "Développer par l'expérience."
          }
        ]
      }
    },
    {
      id: 53,
      title: "J'accompagne mes collaborateurs dans leur projet professionnel",
      category: "Je fais grandir mon équipe",
      difficulty: "Intermédiaire",
      description: "Aidez chaque personne à clarifier ses aspirations et tracer son parcours",
      points: 75,
      participants: 234,
      definition: "Accompagner les projets professionnels consiste à créer des espaces de dialogue sur les aspirations de carrière, à aider à les clarifier et à soutenir activement leur réalisation, même si cela implique une mobilité.",
      importance: "Les collaborateurs dont le manager soutient leur projet sont 4 fois plus engagés. Paradoxalement, les accompagner augmente leur fidélité à court-moyen terme.",
      vigilance: [
        "Ne pas projeter ses propres aspirations",
        "Être honnête sur les opportunités réelles",
        "Soutenir aussi les projets de mobilité externe",
        "Connecter avec son réseau",
        "Formaliser lors des entretiens individuels"
      ],
      bibliography: {
        books: [
          {
            title: "Gérer les parcours professionnels",
            author: "Defélix, Christian",
            year: "2020",
            publisher: "Paris : EMS",
            description: "Accompagner les trajectoires de carrière."
          },
          {
            title: "Le conseil en évolution professionnelle",
            author: "Ferrieux, Dominique",
            year: "2019",
            publisher: "Paris : L'Harmattan",
            description: "Méthodes d'accompagnement professionnel."
          }
        ]
      }
    },
    {
      id: 54,
      title: "Je valorise les réussites et apprentissages de mon équipe",
      category: "Je fais grandir mon équipe",
      difficulty: "Débutant",
      description: "Célébrez les succès et transformez les échecs en opportunités",
      points: 50,
      participants: 412,
      definition: "Valoriser consiste à reconnaître explicitement les réussites individuelles et collectives, et à créer une culture où l'échec est perçu comme une opportunité d'apprentissage plutôt qu'une faute.",
      importance: "La reconnaissance multiplie par 3 la probabilité de répéter les comportements positifs. La culture apprenante de l'échec favorise l'innovation et la prise de risque calculé.",
      vigilance: [
        "Être spécifique : qu'est-ce qui est valorisé exactement ?",
        "Valoriser le processus autant que le résultat",
        "Créer des rituels de célébration réguliers",
        "Distinguer échec (tentative) et faute (négligence)",
        "Faire expliciter les apprentissages"
      ],
      bibliography: {
        books: [
          {
            title: "La reconnaissance au travail",
            author: "Brun, Jean-Pierre",
            year: "2017",
            publisher: "Québec : PUL",
            description: "Impact de la reconnaissance sur la motivation."
          },
          {
            title: "L'erreur positive",
            author: "Astolfi, Jean-Pierre",
            year: "2018",
            publisher: "Paris : ESF",
            description: "Transformer l'erreur en apprentissage."
          }
        ]
      }
    },
    {
      id: 55,
      title: "Je découvre les biais cognitifs",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      description: "Identifiez les biais cognitifs qui influencent vos décisions",
      points: 75,
      participants: 287,
      definition: "Les biais cognitifs sont des distorsions systématiques de la pensée qui affectent nos jugements et décisions. Les connaître permet de prendre des décisions plus rationnelles et d'améliorer sa lucidité managériale.",
      importance: "Nous prenons des dizaines de décisions quotidiennes influencées par des biais (confirmation, ancrage, disponibilité...). Les identifier améliore de 25% la qualité décisionnelle.",
      vigilance: [
        "Se méfier de la sur-confiance : on est tous concernés",
        "Diversifier ses sources d'information",
        "Instaurer des processus décisionnels structurés",
        "Solliciter des avis contradictoires (devil's advocate)",
        "Prendre du recul avant les décisions importantes"
      ],
      bibliography: {
        books: [
          {
            title: "Système 1 / Système 2 : Les deux vitesses de la pensée",
            author: "Kahneman, Daniel",
            year: "2016",
            publisher: "Paris : Flammarion",
            description: "Référence sur les biais cognitifs et la prise de décision."
          },
          {
            title: "Petite philosophie des biais cognitifs",
            author: "Oliviero, Olivier",
            year: "2019",
            publisher: "Paris : Flammarion",
            description: "Introduction accessible aux principaux biais."
          }
        ]
      }
    },
    {
      id: 56,
      title: "Je sors du micro-management",
      category: "Délégation",
      difficulty: "Intermédiaire",
      description: "Apprenez à faire confiance et à lâcher prise",
      points: 75,
      participants: 234,
      definition: "Sortir du micro-management consiste à abandonner le contrôle excessif des détails, à faire confiance aux compétences de ses collaborateurs et à passer d'un management par le 'comment' à un management par les objectifs.",
      importance: "Le micro-management est la première cause de démotivation (67% des salariés). Il étouffe la créativité, crée de la dépendance et épuise le manager.",
      vigilance: [
        "Identifier les causes profondes : peur, perfectionnisme, manque de confiance ?",
        "Progresser par étapes : commencer sur des sujets moins critiques",
        "Clarifier les objectifs et critères de réussite",
        "Accepter que les chemins puissent différer",
        "Se faire accompagner si le pattern est ancré (coach, pair)"
      ],
      bibliography: {
        books: [
          {
            title: "Manager par la confiance",
            author: "Petit, François",
            year: "2020",
            publisher: "Paris : Dunod",
            description: "Développer la confiance et l'autonomie."
          },
          {
            title: "Lâcher prise : Oser s'autoriser",
            author: "Fanget, Frédéric",
            year: "2018",
            publisher: "Paris : Odile Jacob",
            description: "Techniques pour lâcher le contrôle."
          }
        ]
      }
    },
    {
      id: 57,
      title: "Je m'interroge : Le management à distance fragilise-t-il la santé mentale des collaborateurs ?",
      category: "Gestion du stress",
      difficulty: "Intermédiaire",
      description: "Réfléchissez à l'impact du télétravail et du management à distance sur le bien-être des équipes",
      points: 75,
      participants: 178,
      definition: "Le management à distance pose des défis spécifiques : isolement, blur des frontières vie pro / vie perso, difficulté à lire les signaux faibles, sur-sollicitation par les outils numériques. Ce défi vise à prendre conscience des risques potentiels pour la santé mentale et à identifier des leviers de prévention.",
      commentFaire: [
        "Identifiez les facteurs de risque : isolement, hyperconnexion, manque de feedback",
        "Réalisez un état des lieux des pratiques actuelles de votre équipe (rythmes, outils, moments d'échange)",
        "Sondez discrètement le bien-être via des questions ouvertes en bilatérale",
        "Expérimentez des rituals d'équipe : points réguliers, pauses virtuelles, temps déconnectés",
        "Clarifiez les attendus sur la disponibilité et les plages de coupure",
        "Proposez des temps de régulation d'équipe dédiés au vécu du travail à distance",
        "Documentez vos apprentissages et partagez les bonnes pratiques"
      ],
      importance: "La santé mentale au travail est un enjeu majeur : les troubles psychosociaux représentent une part croissante des arrêts maladie. Le management à distance, s'il n'est pas pensé, peut accentuer l'isolement et le sentiment d'être « toujours connecté ». Un manager conscient de ces risques peut mettre en place des garde-fous.",
      vigilance: [
        "Ne pas sur-surveiller : le contrôle excessif aggrave le stress",
        "Éviter les réunions back-to-back sans pause",
        "Respecter les plages horaires et ne pas envoyer de messages en soirée",
        "Ne pas négliger les signaux faibles (retrait, irritabilité, absences)",
        "Solliciter l'avis des collaborateurs sur les modalités de travail"
      ],
      bibliography: {
        books: [
          {
            title: "Le télétravail : Enjeux et bonnes pratiques",
            author: "Collectif",
            year: "2022",
            publisher: "Paris : Eyrolles",
            description: "Guide sur les conditions d'un télétravail sain et durable."
          }
        ]
      }
    },
    {
      id: 58,
      title: "Je m'interroge : en quoi le style de management peut-il dégrader la santé mentale des collaborateurs ?",
      category: "Gestion du stress",
      difficulty: "Intermédiaire",
      description: "Micro-management, manque de reconnaissance, insécurité psychologique : analysez les facteurs de risque",
      points: 75,
      participants: 156,
      definition: "Certains styles managériaux créent de l'insécurité psychologique, du stress chronique ou de l'épuisement : le micro-management (contrôle excessif), le manque de reconnaissance, l'ambiguïté des rôles, les exigences contradictoires. Ce défi invite à identifier ces leviers de dégradation pour les corriger.",
      commentFaire: [
        "Listez les pratiques à risque : micro-management, absence de feedback, exigences floues",
        "Évaluez votre propre style : demandez un feedback 360° ou un retour à un pair de confiance",
        "Identifiez les situations d'insécurité psychologique dans votre équipe",
        "Travaillez la reconnaissance : félicitations, remerciements, valorisation des progrès",
        "Clarifiez les rôles, objectifs et critères de réussite pour réduire l'ambiguïté",
        "Réduisez le micro-management : déléguez, faites confiance, acceptez les chemins différents",
        "Mettez en place des rituels de reconnaissance collective et individuelle"
      ],
      importance: "Un management toxique (ou simplement mal adapté) peut générer burnout, démissions et absentéisme. La reconnaissance est le premier levier de prévention. L'insécurité psychologique (peur de s'exprimer, de se tromper) étouffe l'innovation et la performance.",
      vigilance: [
        "Ne pas confondre exigence et pression excessive",
        "Éviter les critiques publiques ou les comparaisons entre collaborateurs",
        "Ne pas ignorer les signaux de souffrance au travail",
        "Rester cohérent : dire et faire doivent s'aligner",
        "Faire évaluer sa pratique par un tiers (RH, coach) si doute"
      ],
      bibliography: {
        books: [
          {
            title: "Reconnaissance au travail : Enjeux et pratiques",
            author: "Collectif",
            year: "2021",
            publisher: "Paris : Dunod",
            description: "Les leviers de la reconnaissance pour préserver la santé au travail."
          }
        ]
      }
    }
  ];

  const challenge = challengesData.find(c => c.id === Number(id));

  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Target className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600 mb-4">Défi non trouvé</p>
          <button
            onClick={() => navigate('/defis')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retour aux défis
          </button>
        </div>
      </div>
    );
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const pdfFiles = Array.from(files).filter(file => file.type === 'application/pdf');
      if (pdfFiles.length > 0) {
        setUploadedFiles([...uploadedFiles, ...pdfFiles]);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      } else {
        alert('Veuillez sélectionner uniquement des fichiers PDF');
      }
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermédiaire":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Avancé":
        return "bg-pink-100 text-pink-700 border-pink-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/defis')}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-blue-900">{challenge.title}</h1>
          <p className="text-slate-600 mt-1">{challenge.description}</p>
        </div>
      </div>

      {/* Meta Info */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getDifficultyColor(challenge.difficulty)}`}>
              {challenge.difficulty}
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-semibold">{challenge.points} points</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">{challenge.participants} participants</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Award className="w-4 h-4" />
            <span className="text-sm">{challenge.category}</span>
          </div>
        </div>
      </div>

      {/* Définition */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-slate-900">Définition</h2>
        </div>
        <p className="text-slate-700 leading-relaxed">{challenge.definition}</p>
      </div>

      {/* Comment faire ? */}
      <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <ListOrdered className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-purple-900">Comment faire ?</h2>
        </div>
        {challenge.commentFaire && challenge.commentFaire.length > 0 ? (
          <ol className="space-y-3">
            {challenge.commentFaire.map((step, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white text-sm font-medium flex items-center justify-center">
                  {index + 1}
                </span>
                <p className="text-slate-700 leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-slate-600 italic">Les étapes détaillées seront bientôt disponibles.</p>
        )}
      </div>

      {/* Pourquoi est-ce important ? */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-slate-900">Pourquoi est-ce important ?</h2>
        </div>
        <p className="text-slate-700 leading-relaxed">{challenge.importance}</p>
      </div>

      {/* Vigilance */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-slate-900">Points de vigilance</h2>
        </div>
        <ul className="space-y-3">
          {challenge.vigilance.map((point, index) => (
            <li key={index} className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
              <p className="text-slate-700 leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Bibliographie */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-slate-900">Bibliographie</h2>
        </div>
        
        <div className="space-y-6">
          {/* Livres */}
          {challenge.bibliography.books && challenge.bibliography.books.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                Ouvrages de référence
              </h3>
              <div className="space-y-3">
                {challenge.bibliography.books.map((book, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900">• {book.author}. ({book.year}). {book.title}. {book.publisher}.</p>
                    <p className="text-sm text-slate-600 mt-1 ml-4">→ {book.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles professionnels */}
          {challenge.bibliography.articles && challenge.bibliography.articles.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Articles professionnels
              </h3>
              <div className="space-y-3">
                {challenge.bibliography.articles.map((article, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900">• {article.source} – « {article.title} ».</p>
                    <p className="text-sm text-slate-600 mt-1 ml-4">→ {article.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Podcasts */}
          {challenge.bibliography.podcasts && challenge.bibliography.podcasts.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-purple-600" />
                Podcasts et ressources audio
              </h3>
              <div className="space-y-3">
                {challenge.bibliography.podcasts.map((podcast, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900">• {podcast.title}</p>
                    <p className="text-sm text-slate-600 mt-1 ml-4">→ {podcast.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rapports */}
          {challenge.bibliography.reports && challenge.bibliography.reports.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Rapports et guides professionnels
              </h3>
              <div className="space-y-3">
                {challenge.bibliography.reports.map((report, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900">• {report.organization}. {report.title}.</p>
                    <p className="text-sm text-slate-600 mt-1 ml-4">→ {report.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Upload Section - Pièces jointes */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <Upload className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-slate-900">Pièces jointes</h2>
            <p className="text-sm text-slate-600">Téléchargez vos documents PDF (rapports, fiches de synthèse, etc.)</p>
          </div>
        </div>

        {/* Upload Area */}
        <div className="mb-6">
          <label htmlFor="file-upload" className="block">
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-700 font-semibold mb-1">Cliquez pour sélectionner des fichiers PDF</p>
              <p className="text-sm text-slate-500">ou glissez-déposez vos fichiers ici</p>
              <p className="text-xs text-slate-400 mt-2">Format accepté : PDF uniquement</p>
            </div>
            <input
              id="file-upload"
              type="file"
              accept=".pdf,application/pdf"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Success Message */}
        {uploadSuccess && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <Check className="w-5 h-5 text-green-600" />
            <p className="text-green-700 font-semibold">Fichier(s) ajouté(s) avec succès !</p>
          </div>
        )}

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">
              Fichiers téléchargés ({uploadedFiles.length})
            </h3>
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 truncate">{file.name}</p>
                    <p className="text-sm text-slate-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="p-2 hover:bg-red-100 rounded-lg transition-colors group flex-shrink-0"
                  title="Supprimer"
                >
                  <X className="w-5 h-5 text-slate-400 group-hover:text-red-600" />
                </button>
              </div>
            ))}
          </div>
        )}

        {uploadedFiles.length === 0 && (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">Aucun fichier téléchargé pour le moment</p>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">Prêt à relever ce défi ?</h3>
            <p className="text-blue-100">Gagnez {challenge.points} points en complétant ce défi</p>
          </div>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold whitespace-nowrap">
            Relever
          </button>
        </div>
      </div>
    </div>
  );
}
