import { useNavigate } from "react-router";
import { ArrowLeft, Award, Target, TrendingUp, Calendar, MapPin, Mail, Phone, Star, Trophy, CheckCircle, Clock, Users, Briefcase, Edit } from "lucide-react";

export function UserProfile() {
  const navigate = useNavigate();

  const userProfile = {
    name: "Sophie Dubois",
    role: "Manager d'équipe",
    ministry: "Ministère de l'Intérieur",
    avatar: "https://images.unsplash.com/photo-1565828052994-aa2276b131a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmcmVuY2glMjBtYW5hZ2VyJTIwd29tYW4lMjBvZmZpY2V8ZW58MXx8fHwxNzcyNzQ2MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "Manager Confirmé",
    points: 1250,
    ranking: 8,
    email: "sophie.dubois@interieur.gouv.fr",
    phone: "+33 1 23 45 67 89",
    location: "Paris, France",
    joinDate: "Janvier 2023",
    teamSize: 12,
    bio: "Manager passionnée par le développement des compétences et la transformation managériale. Je crois en un management bienveillant et participatif qui place l'humain au cœur de la performance collective.",
  };

  const achievements = [
    {
      icon: Trophy,
      title: "Top 10 Manager",
      description: "Classement dans le top 10 des managers",
      date: "Mars 2024",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Star,
      title: "Excellence en Communication",
      description: "Score parfait en Communication",
      date: "Février 2024",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Award,
      title: "Manager de l'année",
      description: "Reconnu pour son leadership inspirant",
      date: "Décembre 2023",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Mentor d'excellence",
      description: "A accompagné 5 managers juniors",
      date: "Novembre 2023",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { icon: Target, label: "Défis complétés", value: "18", sublabel: "sur 55 disponibles" },
    { icon: Clock, label: "Défis en cours", value: "3", sublabel: "en progression" },
    { icon: Award, label: "Points totaux", value: "1,250", sublabel: "niveau confirmé" },
    { icon: TrendingUp, label: "Classement", value: "#8", sublabel: "sur 247 managers" },
  ];

  const completedChallenges = [
    { title: "Organiser un feedback 360°", category: "Communication", date: "Il y a 2 jours", points: 200 },
    { title: "Mener un entretien en bilatérale", category: "Communication", date: "Il y a 1 semaine", points: 50 },
    { title: "Définir une vision d'équipe", category: "Leadership", date: "Il y a 2 semaines", points: 100 },
    { title: "Pratiquer l'écoute active", category: "Communication", date: "Il y a 3 semaines", points: 50 },
    { title: "Mettre en place un plan de développement", category: "Développement d'équipe", date: "Il y a 1 mois", points: 75 },
  ];

  const categoryProgress = [
    { name: "Leadership", score: 85, color: "bg-blue-500" },
    { name: "Communication", score: 72, color: "bg-green-500" },
    { name: "Gestion d'équipe", score: 90, color: "bg-purple-500" },
    { name: "Innovation", score: 65, color: "bg-orange-500" },
    { name: "Gestion de conflits", score: 78, color: "bg-pink-500" },
  ];

  return (
    <div className="min-h-screen space-y-6">
      {/* Header avec retour */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/mon-tableau-de-bord')}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <h1 className="text-3xl font-semibold text-blue-900">Profil</h1>
      </div>

      {/* Section principale du profil */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg overflow-hidden border-2 border-blue-500">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="relative group cursor-pointer">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center">
                  <Edit className="w-6 h-6 text-white mx-auto mb-1" />
                  <span className="text-xs text-white font-semibold">Modifier</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-white flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Informations principales */}
            <div className="flex-1 text-slate-800">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-3xl font-semibold mb-1 text-blue-900">{userProfile.name}</h2>
                  <p className="text-slate-600 text-lg">{userProfile.role}</p>
                </div>
                <button className="px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded-lg text-blue-800 font-semibold transition-colors flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Modifier le profil
                </button>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 bg-white backdrop-blur px-3 py-1.5 rounded-full border border-slate-200">
                  <Briefcase className="w-4 h-4 text-slate-600" />
                  <span className="text-sm text-slate-700">{userProfile.ministry}</span>
                </div>
                <div className="flex items-center gap-2 bg-white backdrop-blur px-3 py-1.5 rounded-full border border-slate-200">
                  <Star className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-slate-700">{userProfile.level}</span>
                </div>
                <div className="flex items-center gap-2 bg-white backdrop-blur px-3 py-1.5 rounded-full border border-slate-200">
                  <Users className="w-4 h-4 text-slate-600" />
                  <span className="text-sm text-slate-700">{userProfile.teamSize} collaborateurs</span>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed max-w-3xl">{userProfile.bio}</p>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{userProfile.email}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{userProfile.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{userProfile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Membre depuis {userProfile.joinDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-600">{stat.label}</p>
                  <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">{stat.sublabel}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progression par catégorie */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Progression par catégorie</h3>
          <div className="space-y-4">
            {categoryProgress.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-700">{category.name}</span>
                  <span className="text-sm font-semibold text-slate-900">{category.score}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div
                    className={`${category.color} h-2.5 rounded-full transition-all`}
                    style={{ width: `${category.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Récompenses */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Récompenses & Badges</h3>
          <div className="grid grid-cols-1 gap-4">
            {achievements.slice(0, 4).map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 truncate">{achievement.title}</p>
                    <p className="text-sm text-slate-600 truncate">{achievement.description}</p>
                    <p className="text-xs text-slate-500 mt-1">{achievement.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Défis complétés */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-slate-900">Défis récemment complétés</h3>
          <span className="text-sm text-slate-600">{completedChallenges.length} défis terminés</span>
        </div>
        <div className="space-y-3">
          {completedChallenges.map((challenge, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900">{challenge.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-slate-600">{challenge.category}</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-sm text-slate-500">{challenge.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-semibold text-yellow-700">+{challenge.points}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}