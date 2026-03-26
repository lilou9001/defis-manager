import { useState } from "react";
import { BookOpen, FileText, Video, Download, Search, Newspaper, Mic } from "lucide-react";

interface Resource {
  id: number;
  title: string;
  type: "Article" | "Guide" | "Vidéo" | "Outil" | "Podcast";
  category: string;
  description: string;
  duration?: string;
  downloads?: number;
  rating: number;
  author: string;
  avatar: string;
  ministry: string;
}

export function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("Tous");

  const resources: Resource[] = [
    {
      id: 1,
      title: "Guide complet du feedback constructif",
      type: "Guide",
      category: "Communication",
      description: "Apprenez à donner et recevoir du feedback de manière efficace et bienveillante",
      downloads: 125,
      rating: 4.8,
      author: "Sophie Martin",
      avatar: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNTg4NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Intérieur",
    },
    {
      id: 2,
      title: "Pratiques managériales : le droit à l'erreur n'est plus un tabou",
      type: "Article",
      category: "Leadership",
      description: "Cet article explique que les collectivités territoriales cherchent à développer une culture managériale plus ouverte à l'erreur",
      downloads: 89,
      rating: 4.6,
      author: "Maud Parnaudeau- Gazette des communes",
      avatar: "https://images.unsplash.com/photo-1758691737587-7630b4d31d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxlYWRlciUyMGhlYWRzaG90fGVufDF8fHx8MTc3MjU4ODI0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de la Cohésion des territoires",
    },
    {
      id: 3,
      title: "Masterclass : Gérer les conflits en équipe",
      type: "Vidéo",
      category: "Gestion des conflits",
      description: "Une masterclass de 45 minutes sur la résolution de conflits",
      duration: "45 min",
      rating: 4.9,
      author: "Marie Lambert",
      avatar: "https://images.unsplash.com/photo-1659353218140-7f8f9da943fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtYW5hZ2VyJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcyNjI4NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère du Travail",
    },
    {
      id: 4,
      title: "Outil de plan de développement individuel",
      type: "Outil",
      category: "Développement d'équipe",
      description: "Un modèle prêt à l'emploi pour créer des plans de développement personnalisés",
      downloads: 234,
      rating: 4.7,
      author: "Pierre Rousseau",
      avatar: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjU2ODg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Économie",
    },
    {
      id: 5,
      title: "Guide de délégation efficace",
      type: "Guide",
      category: "Délégation",
      description: "Les étapes clés pour déléguer avec succès et développer l'autonomie",
      downloads: 156,
      rating: 4.5,
      author: "Julie Moreau",
      avatar: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNTg4NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de la Transformation publique",
    },
    {
      id: 6,
      title: "Techniques d'écoute active en pratique",
      type: "Vidéo",
      category: "Communication",
      description: "Des exercices concrets pour améliorer votre écoute",
      duration: "30 min",
      rating: 4.8,
      author: "Sophie Martin",
      avatar: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNTg4NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Intérieur",
    },
    {
      id: 7,
      title: "Matrice de priorisation Eisenhower",
      type: "Outil",
      category: "Leadership",
      description: "Un outil visuel pour prioriser vos tâches et celles de votre équipe",
      downloads: 312,
      rating: 4.9,
      author: "Thomas Dubois",
      avatar: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZXhlY3V0aXZlJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI1NjU3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Éducation nationale",
    },
    {
      id: 8,
      title: "L'art de la communication non-violente",
      type: "Article",
      category: "Communication",
      description: "Principes et applications de la CNV en management",
      downloads: 189,
      rating: 4.7,
      author: "Marie Lambert",
      avatar: "https://images.unsplash.com/photo-1659353218140-7f8f9da943fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtYW5hZ2VyJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcyNjI4NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère du Travail",
    },
    {
      id: 9,
      title: "Podcast : Leadership inclusif au quotidien",
      type: "Podcast",
      category: "Leadership",
      description: "Entretien avec Sophie Martin sur les pratiques concrètes du leadership inclusif",
      duration: "25 min",
      rating: 4.8,
      author: "Sophie Martin",
      avatar: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNTg4NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Intérieur",
    },
    {
      id: 10,
      title: "Podcast : Gérer le stress et les émotions",
      type: "Podcast",
      category: "Bien-être",
      description: "Techniques et astuces pour maintenir son équilibre émotionnel en tant que manager",
      duration: "32 min",
      rating: 4.7,
      author: "Pierre Rousseau",
      avatar: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjU2ODg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Économie",
    },
    {
      id: 11,
      title: "Podcast : Transformation digitale et management",
      type: "Podcast",
      category: "Innovation",
      description: "Comment accompagner ses équipes dans la transition numérique avec succès",
      duration: "28 min",
      rating: 4.9,
      author: "Thomas Dubois",
      avatar: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZXhlY3V0aXZlJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI1NjU3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Éducation nationale",
    },
  ];

  const types = ["Tous", "Article", "Guide", "Vidéo", "Outil", "Podcast"];

  const filteredResources = resources.filter((resource) => {
    const typeMatch = selectedType === "Tous" || resource.type === selectedType;
    const searchMatch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && searchMatch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Article":
        return FileText;
      case "Guide":
        return BookOpen;
      case "Vidéo":
        return Video;
      case "Outil":
        return Download;
      case "Podcast":
        return Mic;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Article":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Guide":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Vidéo":
        return "bg-pink-100 text-pink-700 border-pink-200";
      case "Outil":
        return "bg-green-100 text-green-700 border-green-200";
      case "Podcast":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-blue-900">Centre de Ressources</h2>
        <p className="text-slate-600 mt-1">
          Accédez à des guides, articles et outils pour développer vos compétences managériales
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher une ressource..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === type
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center gap-2 mb-4">
          <Newspaper className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-blue-900">Les dernières actualités</h3>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-blue-600">Aujourd'hui</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Nouvelle formation sur Mentor le management bienveillant est disponible
                </h4>
                <p className="text-sm text-slate-600 line-clamp-2">
                  Découvrez notre nouveau parcours certifiant pour développer un leadership inclusif et bienveillant au sein de vos équipes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-blue-600">Il y a 2 jours</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Rencontre avec Soulmaz Alavinia de la DITP
                </h4>
                <p className="text-sm text-slate-600 line-clamp-2">
                  Un an après son lancement, le Campus de la transformation publique s'impose comme un levier majeur de l'internalisation des compétences au sein de l'État.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-blue-600">Il y a 5 jours</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  5 nouveaux défis ajoutés
                </h4>
                <p className="text-sm text-slate-600 line-clamp-2">
                  De nouveaux défis en gestion du changement et transformation digitale sont maintenant disponibles sur la plateforme.
                </p>
              </div>
            </div>
          </div>

          <button className="w-full py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            Voir toutes les actualités →
          </button>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredResources.map((resource) => {
          const Icon = getTypeIcon(resource.type);
          return (
            <div
              key={resource.id}
              className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={resource.avatar} 
                  alt={resource.author}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-1 line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-700 font-medium">{resource.author}</p>
                  <p className="text-xs text-slate-500">{resource.ministry}</p>
                </div>
              </div>

              <p className="text-slate-700 mb-4 line-clamp-2">{resource.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(resource.type)}`}>
                  {resource.type}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  {resource.category}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  {resource.downloads && (
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {resource.downloads}
                    </span>
                  )}
                </div>
                <button className="px-4 py-2 bg-blue-200 text-blue-700 rounded-lg hover:bg-blue-300 transition-colors text-sm font-semibold">
                  {resource.type === "Vidéo" ? "Regarder" : resource.type === "Podcast" ? "Écouter" : "Télécharger"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600">Aucune ressource ne correspond à votre recherche</p>
        </div>
      )}
    </div>
  );
}