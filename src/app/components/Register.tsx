import { useState } from "react";
import { useNavigate } from "react-router";
import { UserPlus, Mail, Lock, Eye, EyeOff, User, Building } from "lucide-react";

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    ministry: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const ministries = [
    "Ministère de l'Intérieur",
    "Ministère de l'Économie",
    "Ministère du Travail",
    "Ministère de l'Éducation nationale",
    "Ministère de la Transformation publique",
    "Ministère de la Santé",
    "Ministère de la Justice",
    "Ministère de la Culture",
    "Autre",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation du mot de passe
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    if (formData.password.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    if (!acceptTerms) {
      alert("Vous devez accepter les conditions d'utilisation");
      return;
    }

    // Simulation de création de compte
    console.log("Création de compte avec:", formData);
    
    // Rediriger vers le tableau de bord après inscription
    navigate("/mon-tableau-de-bord");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-[calc(100vh-300px)] flex items-center justify-center py-12">
      <div className="w-full max-w-2xl">
        {/* Card d'inscription */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 overflow-hidden">
          {/* Header avec gradient */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Créer un compte</h2>
            <p className="text-blue-100 text-sm">
              Rejoignez la communauté des managers
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {/* Prénom et Nom */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Prénom
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Jean"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nom
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Dupont"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Adresse email professionnelle
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="jean.dupont@interieur.gouv.fr"
                  required
                />
              </div>
            </div>

            {/* Ministère et Fonction */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ministry" className="block text-sm font-semibold text-slate-700 mb-2">
                  Ministère
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-slate-400" />
                  </div>
                  <select
                    id="ministry"
                    name="ministry"
                    value={formData.ministry}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
                    required
                  >
                    <option value="">Sélectionnez</option>
                    {ministries.map((ministry) => (
                      <option key={ministry} value={ministry}>
                        {ministry}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-2">
                  Fonction
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="block w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Manager d'équipe"
                  required
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Minimum 8 caractères"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Le mot de passe doit contenir au moins 8 caractères
              </p>
            </div>

            {/* Confirmation mot de passe */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 mb-2">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Confirmez votre mot de passe"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Conditions d'utilisation */}
            <div className="flex items-start">
              <input
                id="accept-terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 mt-1"
                required
              />
              <label htmlFor="accept-terms" className="ml-2 block text-sm text-slate-700">
                J'accepte les{" "}
                <a href="#" className="text-blue-600 hover:underline font-semibold">
                  conditions d'utilisation
                </a>{" "}
                et la{" "}
                <a href="#" className="text-blue-600 hover:underline font-semibold">
                  politique de confidentialité
                </a>
              </label>
            </div>

            {/* Bouton d'inscription */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
            >
              Créer mon compte
            </button>

            {/* Lien vers connexion */}
            <div className="text-center pt-2">
              <p className="text-sm text-slate-600">
                Vous avez déjà un compte ?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/connexion")}
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                >
                  Se connecter
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
