import { useState } from "react";
import { MessageCircle, ThumbsUp, Reply, TrendingUp, Users, MessageSquare, Award, X } from "lucide-react";

interface Post {
  id: number;
  author: string;
  role: string;
  avatar: string;
  ministry: string;
  time: string;
  content: string;
  likes: number;
  replies: number;
  category: string;
}

export function Community() {
  const [activeTab, setActiveTab] = useState<"discussions" | "membres">("discussions");
  const [showNewDiscussion, setShowNewDiscussion] = useState(false);
  const [newDiscussionTitle, setNewDiscussionTitle] = useState("");
  const [newDiscussionContent, setNewDiscussionContent] = useState("");
  const [newDiscussionCategory, setNewDiscussionCategory] = useState("Communication");

  const posts: Post[] = [
    {
      id: 1,
      author: "Sophie Martin",
      role: "Manager d'équipe · Tech",
      avatar: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG1hbmFnZXJ8ZW58MXx8fHwxNzcyNTY5OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Intérieur",
      time: "il y a 2 heures",
      content: "Comment gérez-vous les entretiens en bilatérale quand votre équipe est en télétravail complet ? Je cherche des bonnes pratiques pour maintenir la proximité.",
      likes: 24,
      replies: 8,
      category: "Communication",
    },
    {
      id: 2,
      author: "Thomas Dubois",
      role: "Directeur de projets",
      avatar: "https://images.unsplash.com/photo-1713946598467-fcf9332c56ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBtYW5hZ2VyfGVufDF8fHx8MTc3MjYyODkwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Économie",
      time: "il y a 5 heures",
      content: "Retour d'expérience sur la mise en place d'espaces de discussion en interne une fois par mois.",
      likes: 45,
      replies: 12,
      category: "Leadership",
    },
    {
      id: 3,
      author: "Marie Lambert",
      role: "Manager · RH",
      avatar: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjU0NjI2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère du Travail",
      time: "il y a 1 jour",
      content: "Question délicate : comment aborder un feedback négatif avec un collaborateur qui a du mal à accepter la critique ?",
      likes: 18,
      replies: 15,
      category: "Gestion des conflits",
    },
    {
      id: 4,
      author: "Pierre Rousseau",
      role: "Directeur d'école",
      avatar: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI1MjIyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de l'Éducation nationale",
      time: "il y a 1 jour",
      content: "Je viens de terminer le défi 'Déléguer une tâche stratégique' et wow, quel apprentissage ! Mon équipe m'a surpris positivement. Merci pour cette plateforme 🙏",
      likes: 52,
      replies: 6,
      category: "Développement d'équipe",
    },
    {
      id: 5,
      author: "Julie Moreau",
      role: "Manager · Commercial",
      avatar: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzI2Mjg5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ministry: "Ministère de la Transformation publique",
      time: "il y a 2 jours",
      content: "Ressource à partager : j'ai trouvé cet article sur la communication non-violente particulièrement utile. Ça a transformé mes interactions avec l'équipe.",
      likes: 31,
      replies: 4,
      category: "Communication",
    },
  ];

  const topMembers = [
    { name: "Sophie Martin", points: 125, challenges: 24, avatar: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG1hbmFnZXJ8ZW58MXx8fHwxNzcyNTY5OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080", ministry: "Ministère de l'Intérieur" },
    { name: "Thomas Dubois", points: 118, challenges: 22, avatar: "https://images.unsplash.com/photo-1713946598467-fcf9332c56ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBtYW5hZ2VyfGVufDF8fHx8MTc3MjYyODkwNXww&ixlib=rb-4.1.0&q=80&w=1080", ministry: "Ministère de l'Économie" },
    { name: "Marie Lambert", points: 105, challenges: 20, avatar: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjU0NjI2MXww&ixlib=rb-4.1.0&q=80&w=1080", ministry: "Ministère du Travail" },
    { name: "Pierre Rousseau", points: 98, challenges: 18, avatar: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI1MjIyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080", ministry: "Ministère de l'Éducation nationale" },
    { name: "Julie Moreau", points: 92, challenges: 17, avatar: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzI2Mjg5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080", ministry: "Ministère de la Transformation publique" },
  ];

  const stats = [
    { icon: Users, label: "Membres actifs", value: "125+" },
    { icon: MessageSquare, label: "Discussions", value: "32+" },
    { icon: TrendingUp, label: "Défis relevés", value: "85+" },
  ];

  const categories = [
    "Communication",
    "Leadership",
    "Gestion des conflits",
    "Développement d'équipe",
    "Délégation",
    "Organisation",
  ];

  const handleSubmitDiscussion = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique pour soumettre la discussion
    console.log("Nouvelle discussion créée:", {
      title: newDiscussionTitle,
      content: newDiscussionContent,
      category: newDiscussionCategory,
    });
    // Réinitialiser le formulaire
    setNewDiscussionTitle("");
    setNewDiscussionContent("");
    setNewDiscussionCategory("Communication");
    setShowNewDiscussion(false);
  };

  return (
    <div className="min-h-screen space-y-8 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 p-8 rounded-xl">
      <div>
        <h2 className="text-3xl font-semibold text-blue-900">Communauté</h2>
        <p className="text-slate-600 mt-1">
          Échangez avec d'autres managers et partagez vos expériences
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colors = [
            "from-blue-300 to-blue-400",
            "from-sky-300 to-sky-400",
            "from-cyan-300 to-cyan-400"
          ];
          return (
            <div key={index} className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${colors[index]} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur rounded-xl shadow-sm border border-blue-200/50 overflow-hidden">
        <div className="border-b border-blue-200/50 bg-gradient-to-r from-blue-100/50 via-sky-100/50 to-cyan-100/50">
          <div className="flex">
            <button
              onClick={() => setActiveTab("discussions")}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === "discussions"
                  ? "text-blue-700 border-b-2 border-blue-600 bg-blue-100/70"
                  : "text-slate-600 hover:bg-blue-50/50"
              }`}
            >
              Discussions
            </button>
            <button
              onClick={() => setActiveTab("membres")}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === "membres"
                  ? "text-blue-700 border-b-2 border-blue-600 bg-blue-100/70"
                  : "text-slate-600 hover:bg-blue-50/50"
              }`}
            >
              Top Membres
            </button>
          </div>
        </div>

        {activeTab === "discussions" && (
          <div className="p-6 bg-gradient-to-br from-blue-50/30 via-sky-50/30 to-cyan-50/30">
            <div className="mb-6">
              <button 
                onClick={() => setShowNewDiscussion(!showNewDiscussion)}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all font-semibold flex items-center gap-2 shadow-md hover:shadow-lg text-sm mx-auto"
              >
                <MessageCircle className="w-4 h-4" />
                Créer une discussion
              </button>
            </div>

            {/* Formulaire de nouvelle discussion */}
            {showNewDiscussion && (
              <div className="mb-6 p-6 bg-white rounded-xl border-2 border-blue-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-900">Nouvelle discussion</h3>
                  <button
                    onClick={() => setShowNewDiscussion(false)}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmitDiscussion} className="space-y-4">
                  {/* Titre */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-2">
                      Titre de la discussion
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={newDiscussionTitle}
                      onChange={(e) => setNewDiscussionTitle(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Ex: Comment améliorer la communication d'équipe ?"
                      required
                    />
                  </div>

                  {/* Catégorie */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-2">
                      Catégorie
                    </label>
                    <select
                      id="category"
                      value={newDiscussionCategory}
                      onChange={(e) => setNewDiscussionCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Contenu */}
                  <div>
                    <label htmlFor="content" className="block text-sm font-semibold text-slate-700 mb-2">
                      Votre message
                    </label>
                    <textarea
                      id="content"
                      value={newDiscussionContent}
                      onChange={(e) => setNewDiscussionContent(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[120px]"
                      placeholder="Partagez votre question ou votre expérience avec la communauté..."
                      required
                    />
                  </div>

                  {/* Boutons */}
                  <div className="flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={() => setShowNewDiscussion(false)}
                      className="px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all shadow-md"
                    >
                      Publier la discussion
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 bg-white/70 backdrop-blur border border-blue-200 rounded-xl hover:border-blue-400 hover:bg-white/90 transition-all shadow-sm"
                >
                  <div className="flex gap-4">
                    <img 
                      src={post.avatar} 
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-blue-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-slate-900">{post.author}</h4>
                          <p className="text-sm text-slate-600">{post.role}</p>
                          <p className="text-xs text-slate-500">{post.ministry}</p>
                        </div>
                        <span className="text-sm text-slate-500">{post.time}</span>
                      </div>
                      <p className="text-slate-700 mb-3">{post.content}</p>
                      <div className="flex items-center gap-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200/50">
                          {post.category}
                        </span>
                        <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">
                          <Reply className="w-4 h-4" />
                          <span className="text-sm">{post.replies} réponses</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "membres" && (
          <div className="p-6 bg-gradient-to-br from-blue-50/30 via-sky-50/30 to-cyan-50/30">
            <div className="space-y-4">
              {topMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur border border-blue-200 rounded-xl hover:border-blue-400 hover:bg-white/90 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="relative">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                      />
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                          <Award className="w-3 h-3 text-yellow-900" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">{member.name}</h4>
                      <p className="text-xs text-slate-500">{member.ministry}</p>
                      <p className="text-sm text-slate-600">
                        {member.challenges} défis relevés
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-blue-600">{member.points}</div>
                      <div className="text-sm text-slate-600">points</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}