import { Link } from "react-router";
import { Target, TrendingUp, Award, Clock, CheckCircle, ArrowRight, Star, Users, BookOpen, Calendar, BarChart3, Heart, Smile, Battery, MessageSquare } from "lucide-react";

export function ManagerDashboard() {
  const managerProfile = {
    name: "Sophie Dubois",
    role: "Manager d'équipe",
    ministry: "Ministère de l'Intérieur",
    avatar: "https://images.unsplash.com/photo-1565828052994-aa2276b131a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVuY2glMjBtYW5hZ2VyJTIwd29tYW4lMjBvZmZpY2V8ZW58MXx8fHwxNzcyNzQ2MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "Manager Confirmé",
    points: 1250,
    ranking: 8,
  };

  const personalStats = [
    { icon: Target, label: "Défis complétés", value: "18", color: "from-blue-300 to-blue-400" },
    { icon: Clock, label: "Défis en cours", value: "3", color: "from-sky-300 to-sky-400" },
    { icon: Award, label: "Points totaux", value: "1,250", color: "from-cyan-300 to-cyan-400" },
    { icon: TrendingUp, label: "Classement", value: "#8", color: "from-indigo-300 to-indigo-400" },
  ];

  const ongoingChallenges = [
    {
      id: 1,
      title: "Déléguer une tâche",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      progress: 60,
      dueDate: "Dans 3 jours",
      color: "blue",
    },
    {
      id: 2,
      title: "Organiser un atelier créatif",
      category: "Innovation",
      difficulty: "Avancé",
      progress: 30,
      dueDate: "Dans 5 jours",
      color: "purple",
    },
    {
      id: 3,
      title: "Donner un feedback positif quotidien",
      category: "Communication",
      difficulty: "Débutant",
      progress: 80,
      dueDate: "Dans 2 jours",
      color: "green",
    },
  ];

  const categoryProgress = [
    { name: "Leadership", score: 85, max: 100 },
    { name: "Communication", score: 72, max: 100 },
    { name: "Gestion d'équipe", score: 90, max: 100 },
    { name: "Innovation", score: 65, max: 100 },
    { name: "Gestion de conflits", score: 78, max: 100 },
  ];

  const recommendedChallenges = [
    {
      title: "Mettre en place un rituel d'équipe",
      category: "Gestion d'équipe",
      difficulty: "Intermédiaire",
      points: 150,
      icon: Users,
    },
    {
      title: "Animer une réunion de résolution de problèmes",
      category: "Innovation",
      difficulty: "Avancé",
      points: 200,
      icon: Target,
    },
    {
      title: "Créer un plan de développement individuel",
      category: "Développement d'équipe",
      difficulty: "Intermédiaire",
      points: 180,
      icon: TrendingUp,
    },
  ];

  const recentActivities = [
    {
      type: "challenge_completed",
      title: "Défi complété : Organiser un feedback 360°",
      date: "Il y a 2 jours",
      points: "+200 points",
      icon: CheckCircle,
      color: "green",
    },
    {
      type: "comment",
      title: "Commentaire sur la discussion : Gestion du télétravail",
      date: "Il y a 3 jours",
      icon: Users,
      color: "blue",
    },
    {
      type: "resource",
      title: "Ressource consultée : Guide de la délégation efficace",
      date: "Il y a 5 jours",
      icon: BookOpen,
      color: "orange",
    },
    {
      type: "event",
      title: "Inscription à : Webinaire - Leadership transformationnel",
      date: "Il y a 1 semaine",
      icon: Calendar,
      color: "purple",
    },
  ];

  const teamWellbeing = {
    overallScore: 78,
    indicators: [
      { label: "Moral de l'équipe", value: 82, icon: Smile, color: "from-green-400 to-emerald-500" },
      { label: "Niveau d'énergie", value: 75, icon: Battery, color: "from-yellow-400 to-orange-500" },
      { label: "Communication", value: 80, icon: MessageSquare, color: "from-blue-400 to-cyan-500" },
      { label: "Satisfaction générale", value: 76, icon: Heart, color: "from-pink-400 to-rose-500" },
    ],
    lastUpdate: "Mis à jour il y a 2 jours",
    trend: "+5% vs. mois dernier",
  };

  return (
    <div className="min-h-screen space-y-8 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 p-8 rounded-xl">
      {/* Header avec profil */}
      <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-sm border-2 border-blue-500">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <Link to="/profil" className="group">
            <img
              src={managerProfile.avatar}
              alt={managerProfile.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-blue-400 transition-all cursor-pointer"
            />
          </Link>
          <div className="flex-1">
            <Link to="/profil" className="hover:text-blue-600 transition-colors">
              <h1 className="text-3xl font-semibold mb-2 text-blue-900">{managerProfile.name}</h1>
            </Link>
            <p className="text-slate-700 mb-1">{managerProfile.role}</p>
            <p className="text-slate-600 text-sm">{managerProfile.ministry}</p>
          </div>
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg mb-2 border border-blue-200">
              <Star className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-slate-800">{managerProfile.level}</span>
            </div>
            <p className="text-sm text-slate-600">Vous êtes dans le top 10% des managers !</p>
          </div>
        </div>
      </div>

      {/* Statistiques personnelles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {personalStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-sm border border-blue-100">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-semibold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Défis en cours */}
      <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 rounded-xl shadow-sm border border-blue-200/50 overflow-hidden">
        <div className="px-6 py-4 border-b border-blue-200/50 bg-white/60 backdrop-blur flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Mes défis en cours</h2>
          <Link
            to="/defis"
            className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
          >
            Voir tous les défis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="p-6 space-y-4">
          {ongoingChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white/60 backdrop-blur border border-blue-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">{challenge.title}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-600">{challenge.category}</span>
                    <span className="text-slate-400">•</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      challenge.difficulty === "Débutant"
                        ? "bg-cyan-100 text-cyan-700"
                        : challenge.difficulty === "Intermédiaire"
                        ? "bg-sky-100 text-sky-700"
                        : "bg-indigo-100 text-indigo-700"
                    }`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-semibold text-blue-600">{challenge.progress}%</div>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${
                    challenge.color === "blue"
                      ? "from-blue-400 to-blue-500"
                      : challenge.color === "purple"
                      ? "from-indigo-400 to-indigo-500"
                      : "from-cyan-400 to-cyan-500"
                  } transition-all duration-300`}
                  style={{ width: `${challenge.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Progression par catégorie */}
        <div className="bg-white/80 backdrop-blur rounded-xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-slate-900">Progression par catégorie</h2>
          </div>
          <div className="p-6 space-y-5">
            {categoryProgress.map((category, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">{category.name}</span>
                  <span className="text-sm font-semibold text-slate-900">{category.score}/{category.max}</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 transition-all duration-300"
                    style={{ width: `${(category.score / category.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Défis recommandés */}
        <div className="bg-white/80 backdrop-blur rounded-xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50">
            <h2 className="text-xl font-semibold text-slate-900">Défis recommandés pour vous</h2>
          </div>
          <div className="p-6 space-y-4">
            {recommendedChallenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div key={index} className="border border-blue-200 rounded-lg p-4 hover:border-blue-400 hover:bg-blue-50/50 transition-colors cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 mb-1">{challenge.title}</h4>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-slate-600">{challenge.category}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-blue-600 font-semibold">{challenge.points} pts</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <Link
              to="/defis"
              className="block w-full text-center py-3 border-2 border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Découvrir plus de défis
            </Link>
          </div>
        </div>
      </div>

      {/* Activité récente */}
      <div className="bg-white/80 backdrop-blur rounded-xl shadow-sm border border-blue-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50">
          <h2 className="text-xl font-semibold text-slate-900">Activité récente</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-blue-100 last:border-0 last:pb-0">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.color === "green"
                      ? "bg-cyan-100"
                      : activity.color === "blue"
                      ? "bg-blue-100"
                      : activity.color === "orange"
                      ? "bg-sky-100"
                      : "bg-indigo-100"
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      activity.color === "green"
                        ? "text-cyan-600"
                        : activity.color === "blue"
                        ? "text-blue-600"
                        : activity.color === "orange"
                        ? "text-sky-600"
                        : "text-indigo-600"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-900 font-medium">{activity.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-slate-500">{activity.date}</p>
                      {activity.points && (
                        <>
                          <span className="text-slate-400">•</span>
                          <span className="text-sm font-semibold text-cyan-600">{activity.points}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bien-être de l'équipe */}
      <div className="bg-white/80 backdrop-blur rounded-xl shadow-sm border border-blue-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-blue-100 bg-gradient-to-r from-pink-50 to-rose-50 flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-600" />
          <h2 className="text-xl font-semibold text-slate-900">Bien-être de mon équipe</h2>
        </div>
        <div className="p-6">
          {/* Score global */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-slate-600 mb-1">Score global de bien-être</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-semibold text-slate-900">{teamWellbeing.overallScore}%</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">{teamWellbeing.trend}</span>
                </div>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">{teamWellbeing.lastUpdate}</p>
          </div>

          {/* Indicateurs détaillés */}
          <div className="space-y-4">
            {teamWellbeing.indicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 bg-gradient-to-br ${indicator.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-700">{indicator.label}</span>
                        <span className="text-sm font-semibold text-slate-900">{indicator.value}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${indicator.color} transition-all duration-300`}
                          style={{ width: `${indicator.value}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}