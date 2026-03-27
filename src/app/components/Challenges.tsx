import { useState } from "react";
import { Target, Clock, Star, TrendingUp, Brain, MessageCircle, Award, Filter, Users } from "lucide-react";
import { useNavigate } from "react-router";

interface Challenge {
  id: number;
  title: string;
  category: string;
  difficulty: "Débutant" | "Intermédiaire" | "Avancé";
  duration: string;
  description: string;
  points: number;
  participants: number;
  completed?: boolean;
}

export function Challenges() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("Tous");

  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Je mène un entretien en bilatérale",
      category: "Communication",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Organisez un entretien individuel structuré avec chaque membre de votre équipe",
      points: 50,
      participants: 342,
    },
    {
      id: 2,
      title: "Je délègue une tâche",
      category: "Délégation",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Identifiez une tâche importante et déléguez-la en suivant les meilleures pratiques",
      points: 75,
      participants: 198,
    },
    {
      id: 3,
      title: "Je gère un conflit d'équipe",
      category: "Gestion des conflits",
      difficulty: "Avancé",
      duration: "1 mois",
      description: "Résolvez un conflit en utilisant des techniques de médiation et communication non-violente",
      points: 100,
      participants: 87,
    },
    {
      id: 4,
      title: "J'organise un atelier de feedback",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      duration: "1 semaine",
      description: "Créez un espace sûr pour des retours constructifs entre collaborateurs",
      points: 75,
      participants: 256,
    },
    {
      id: 6,
      title: "Je pratique l'écoute active quotidienne",
      category: "Communication",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Exercez-vous à l'écoute active dans vos interactions quotidiennes",
      points: 50,
      participants: 421,
    },
    {
      id: 7,
      title: "Je mets en place un plan de développement",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      duration: "1 mois",
      description: "Créez un plan de développement personnalisé pour chaque membre de l'équipe",
      points: 75,
      participants: 176,
    },
    {
      id: 8,
      title: "J'anime une réunion de crise",
      category: "Développement du manager",
      difficulty: "Avancé",
      duration: "1 semaine",
      description: "Menez une réunion de crise avec calme et efficacité",
      points: 100,
      participants: 92,
    },
    {
      id: 9,
      title: "Je propose des réunions sans ordinateurs ni téléphone",
      category: "Communication",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Organisez des réunions où les participants se concentrent uniquement sur l'échange",
      points: 50,
      participants: 234,
    },
    {
      id: 10,
      title: "Je crée des modèles de réponse pour les mails récurrents",
      category: "Gestion du temps",
      difficulty: "Débutant",
      duration: "2 jours",
      description: "Optimisez votre temps en créant des modèles pour vos emails fréquents",
      points: 30,
      participants: 387,
    },
    {
      id: 11,
      title: "Je propose régulièrement de l'aide",
      category: "Développement du manager",
      difficulty: "Débutant",
      duration: "2 semaines",
      description: "Développez une posture de manager-coach en offrant votre soutien proactivement",
      points: 50,
      participants: 298,
    },
    {
      id: 13,
      title: "Je donne régulièrement des feedbacks à mes collaborateurs",
      category: "Communication",
      difficulty: "Intermédiaire",
      duration: "1 mois",
      description: "Instaurez une culture du feedback continu et constructif dans votre équipe",
      points: 75,
      participants: 312,
    },
    {
      id: 14,
      title: "Je propose des réunions courtes en position debout",
      category: "Gestion du temps",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Testez les stand-up meetings pour des réunions plus efficaces et dynamiques",
      points: 50,
      participants: 265,
    },
    {
      id: 15,
      title: "Je pratique le management visuel",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Mettez en place des outils visuels pour améliorer la communication et le suivi d'équipe",
      points: 75,
      participants: 189,
    },
    {
      id: 16,
      title: "Je crée une cartographie des parties prenantes internes et externes",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      duration: "1 semaine",
      description: "Identifiez et cartographiez l'ensemble des parties prenantes de vos projets",
      points: 75,
      participants: 203,
    },
    {
      id: 17,
      title: "Je charge mes collaborateurs de rédiger une cartographie des compétences de l'équipe",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Impliquez votre équipe dans l'identification et la cartographie de leurs compétences",
      points: 75,
      participants: 167,
    },
    {
      id: 18,
      title: "J'organise un « vis mon travail »",
      category: "Développement d'équipe",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Organisez des échanges de poste pour favoriser la compréhension mutuelle",
      points: 50,
      participants: 284,
    },
    {
      id: 19,
      title: "Je propose des formations en ligne à mes collaborateurs adaptées à leurs missions",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      duration: "1 mois",
      description: "Identifiez et proposez des formations en ligne personnalisées pour chaque collaborateur",
      points: 75,
      participants: 221,
    },
    {
      id: 20,
      title: "Je travaille avec mon équipe à la définition d'indicateurs de suivi de leur activité",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Co-construisez des indicateurs de performance pertinents et motivants",
      points: 75,
      participants: 156,
    },
    {
      id: 21,
      title: "Je réalise une cartographie des moyens et des missions de mon service",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Clarifiez l'organisation de votre service en cartographiant missions et ressources",
      points: 75,
      participants: 178,
    },
    {
      id: 22,
      title: "J'accepte de recevoir du feedback",
      category: "Communication",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Développez une posture d'ouverture en sollicitant et accueillant les retours sur votre management",
      points: 50,
      participants: 356,
    },
    {
      id: 23,
      title: "Je remercie, j'apprends à dire merci",
      category: "Communication",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Instaurez une culture de la reconnaissance en remerciant régulièrement vos collaborateurs",
      points: 30,
      participants: 412,
    },
    {
      id: 24,
      title: "Je mets en place une matrice des responsabilités",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      duration: "1 semaine",
      description: "Clarifiez les rôles et responsabilités avec une matrice RACI adaptée à votre équipe",
      points: 75,
      participants: 198,
    },
    {
      id: 25,
      title: "Je définis des règles pour l'usage des courriels",
      category: "Gestion du temps",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Établissez une charte d'utilisation des emails pour améliorer l'efficacité collective",
      points: 50,
      participants: 289,
    },
    {
      id: 26,
      title: "Je participe à l'attractivité de mon service",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      duration: "1 mois",
      description: "Développez des actions pour rendre votre service attractif auprès des candidats potentiels",
      points: 75,
      participants: 167,
    },
    {
      id: 27,
      title: "J'implique mes collaborateurs dans le choix d'un nouveau candidat",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Associez votre équipe au processus de recrutement pour renforcer l'engagement collectif",
      points: 75,
      participants: 143,
    },
    {
      id: 28,
      title: "Je mets en place le Flex office",
      category: "Développement du manager",
      difficulty: "Avancé",
      duration: "1 mois",
      description: "Organisez un système de bureaux partagés adapté aux besoins de votre équipe",
      points: 100,
      participants: 98,
    },
    {
      id: 30,
      title: "J'incite mon équipe à s'inscrire en auto-formation",
      category: "Développement d'équipe",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Encouragez l'apprentissage autonome en proposant des ressources d'auto-formation",
      points: 50,
      participants: 267,
    },
    {
      id: 31,
      title: "Je mets en place le quifaitquoi avec mon équipe",
      category: "Développement du manager",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Créez un document collaboratif qui clarifie les rôles et missions de chacun",
      points: 50,
      participants: 321,
    },
    {
      id: 32,
      title: "Je mets en place un dossier partagé avec des fiches de procédure",
      category: "Gestion du temps",
      difficulty: "Débutant",
      duration: "2 semaines",
      description: "Centralisez les procédures pour faciliter l'autonomie et le partage de connaissances",
      points: 50,
      participants: 298,
    },
    {
      id: 33,
      title: "J'agis pour l'employabilité des agents publics",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      duration: "1 mois",
      description: "Développez les compétences transférables et la mobilité professionnelle de vos collaborateurs",
      points: 75,
      participants: 189,
    },
    {
      id: 34,
      title: "Je mets en place le mentorat comme modalité pour le développement professionnel",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      duration: "1 mois",
      description: "Organisez un système de mentorat pour favoriser la transmission de savoirs",
      points: 75,
      participants: 176,
    },
    {
      id: 35,
      title: "J'optimise mon temps en contexte professionnel",
      category: "Gestion du temps",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Mettez en place des techniques d'organisation personnelle pour gagner en efficacité",
      points: 75,
      participants: 334,
    },
    {
      id: 36,
      title: "Je valorise les compétences extra-professionnelles",
      category: "Développement d'équipe",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Reconnaissez et intégrez les compétences acquises hors du cadre professionnel",
      points: 50,
      participants: 245,
    },
    {
      id: 37,
      title: "Je favorise la cohésion d'équipe à distance",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Créez des rituels et moments de partage adaptés au travail hybride ou à distance",
      points: 75,
      participants: 212,
    },
    {
      id: 38,
      title: "Je prends la parole en public",
      category: "Communication",
      difficulty: "Intermédiaire",
      duration: "1 semaine",
      description: "Développez votre aisance à l'oral en vous entraînant à des prises de parole structurées",
      points: 75,
      participants: 187,
    },
    {
      id: 39,
      title: "Avant d'assigner une tâche, je vérifie la charge de travail de l'agent",
      category: "Délégation",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Prévenez la surcharge en évaluant systématiquement le temps et la disponibilité nécessaires",
      points: 50,
      participants: 367,
    },
    {
      id: 40,
      title: "À la fin d'un projet, je propose un temps informel pour célébrer",
      category: "Développement d'équipe",
      difficulty: "Débutant",
      duration: "3 jours",
      description: "Valorisez les réussites collectives en organisant un moment convivial de clôture",
      points: 30,
      participants: 398,
    },
    {
      id: 41,
      title: "Je ne fixe aucune réunion après 18h",
      category: "Gestion du temps",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Respectez l'équilibre vie professionnelle/personnelle en planifiant les réunions aux horaires adaptés",
      points: 50,
      participants: 423,
    },
    {
      id: 42,
      title: "Je laisse dans mon agenda des créneaux vides pour gérer les imprévus",
      category: "Gestion du temps",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Anticipez les urgences en réservant des plages horaires tampons dans votre planning",
      points: 50,
      participants: 341,
    },
    {
      id: 43,
      title: "Au démarrage d'un projet, j'interroge mon équipe sur leurs espoirs et craintes",
      category: "Communication",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Créez un climat de confiance en recueillant les attentes et appréhensions dès le lancement",
      points: 50,
      participants: 279,
    },
    {
      id: 45,
      title: "J'identifie mes facteurs de stress professionnels",
      category: "Gestion du stress",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Analysez vos sources de stress pour mieux les anticiper et les gérer",
      points: 50,
      participants: 389,
    },
    {
      id: 46,
      title: "Je mets en place des rituels de déconnexion",
      category: "Gestion du stress",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Créez des moments de pause et de transition pour préserver votre équilibre mental",
      points: 75,
      participants: 312,
    },
    {
      id: 48,
      title: "Je développe ma résilience face aux situations difficiles",
      category: "Gestion du stress",
      difficulty: "Avancé",
      duration: "2 mois",
      description: "Renforcez votre capacité à rebondir face aux épreuves professionnelles",
      points: 100,
      participants: 124,
    },
    {
      id: 49,
      title: "Je facilite la montée en compétences de mes collaborateurs",
      category: "Je fais grandir mon équipe",
      difficulty: "Intermédiaire",
      duration: "1 mois",
      description: "Identifiez les besoins de développement et accompagnez la progression de chacun",
      points: 75,
      participants: 267,
    },
    {
      id: 50,
      title: "J'encourage la prise d'initiative et l'autonomie",
      category: "Je fais grandir mon équipe",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Créez un environnement où vos collaborateurs osent proposer et tester de nouvelles idées",
      points: 75,
      participants: 298,
    },
    {
      id: 51,
      title: "Je mets en place un programme de co-développement",
      category: "Je fais grandir mon équipe",
      difficulty: "Avancé",
      duration: "2 mois",
      description: "Organisez des sessions où les collaborateurs s'entraident pour résoudre leurs problématiques",
      points: 100,
      participants: 156,
    },
    {
      id: 52,
      title: "Je crée des opportunités d'apprentissage sur le terrain",
      category: "Je fais grandir mon équipe",
      difficulty: "Débutant",
      duration: "2 semaines",
      description: "Proposez des missions variées qui permettent d'acquérir de nouvelles compétences",
      points: 50,
      participants: 345,
    },
    {
      id: 53,
      title: "J'accompagne mes collaborateurs dans la construction de leur projet professionnel",
      category: "Je fais grandir mon équipe",
      difficulty: "Intermédiaire",
      duration: "1 mois",
      description: "Aidez chaque personne à clarifier ses aspirations et à tracer son parcours d'évolution",
      points: 75,
      participants: 234,
    },
    {
      id: 54,
      title: "Je valorise les réussites et apprentissages de mon équipe",
      category: "Je fais grandir mon équipe",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Célébrez les succès et transformez les échecs en opportunités d'apprentissage",
      points: 50,
      participants: 412,
    },
    {
      id: 55,
      title: "Je découvre les biais cognitifs",
      category: "Développement du manager",
      difficulty: "Intermédiaire",
      duration: "2 semaines",
      description: "Identifiez les biais cognitifs qui influencent vos décisions et apprenez à les reconnaître",
      points: 75,
      participants: 287,
    },
    {
      id: 56,
      title: "Je sors du micro-management",
      category: "Délégation",
      difficulty: "Intermédiaire",
      duration: "1 mois",
      description: "Apprenez à faire confiance et à lâcher prise en donnant plus d'autonomie à vos collaborateurs",
      points: 75,
      participants: 234,
    },
    {
      id: 57,
      title: "Je m'interroge : Le management à distance fragilise-t-il la santé mentale des collaborateurs ?",
      category: "Gestion du stress",
      difficulty: "Intermédiaire",
      duration: "1 semaine",
      description: "Réfléchissez à l'impact du télétravail et du management à distance sur le bien-être des équipes",
      points: 75,
      participants: 178,
    },
    {
      id: 58,
      title: "Je m'interroge : en quoi le style de management peut-il dégrader la santé mentale des collaborateurs ?",
      category: "Gestion du stress",
      difficulty: "Intermédiaire",
      duration: "1 semaine",
      description: "Micro-management, manque de reconnaissance, insécurité psychologique : analysez les facteurs de risque",
      points: 75,
      participants: 156,
    },
    {
      id: 59,
      title: "J'expérimente le rapport d'étonnement avec les nouveaux arrivants",
      category: "Je fais grandir mon équipe",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Favorisez l'intégration des nouveaux collaborateurs en recueillant leur regard neuf sur l'organisation",
      points: 50,
      participants: 203,
    },
    {
      id: 60,
      title: "Je planifie régulièrement des rituels",
      category: "Développement d'équipe",
      difficulty: "Débutant",
      duration: "2 semaines",
      description: "Créez des moments réguliers (réunions de cristallisation, cérémonies, points d'équipe) qui structurent la vie collective",
      points: 50,
      participants: 256,
    },
    {
      id: 61,
      title: "J'incite mes collaborateurs à partager en réunion un article de presse intéressant le service",
      category: "Communication",
      difficulty: "Débutant",
      duration: "1 semaine",
      description: "Encouragez l'échange de connaissances et la curiosité collective en invitant l'équipe à partager des articles pertinents",
      points: 50,
      participants: 189,
    },
  ];

  const categories = ["Tous", "Communication", "Délégation", "Développement d'équipe", "Développement du manager", "Gestion des conflits", "Gestion du stress", "Gestion du temps"];
  const difficulties = ["Tous", "Débutant", "Intermédiaire", "Avancé"];

  const filteredChallenges = challenges.filter((challenge) => {
    const categoryMatch = selectedCategory === "Tous" || challenge.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === "Tous" || challenge.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Communication":
        return MessageCircle;
      case "Leadership":
        return Award;
      case "Délégation":
        return Users;
      case "Gestion des conflits":
        return TrendingUp;
      case "Développement d'équipe":
        return Brain;
      case "Gestion du temps":
        return Clock;
      default:
        return Target;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-blue-900">Défis Managers</h2>
          <p className="text-slate-600 mt-1">
            Relevez des défis concrets pour développer vos compétences
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="font-semibold text-slate-900">350 points</span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-slate-600" />
          <h3 className="font-semibold text-slate-900">Filtres</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Catégorie
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Niveau
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredChallenges.map((challenge) => {
          const Icon = getCategoryIcon(challenge.category);
          return (
            <div
              key={challenge.id}
              className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-1 line-clamp-2">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-slate-600">{challenge.category}</p>
                </div>
              </div>

              <p className="text-slate-700 mb-4 line-clamp-2">{challenge.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {challenge.points} pts
                  </span>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold" onClick={() => navigate(`/defis/${challenge.id}`)}>
                  Relever
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredChallenges.length === 0 && (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600">Aucun défi ne correspond à vos critères</p>
        </div>
      )}
    </div>
  );
}