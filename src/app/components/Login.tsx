import { useState } from "react";
import { useNavigate } from "react-router";
import { LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion
    console.log("Connexion avec:", email, password);
    // Rediriger vers le tableau de bord après connexion
    navigate("/mon-tableau-de-bord");
  };

  return (
    <div className="min-h-[calc(100vh-300px)] flex items-center justify-center py-12">
      <div className="w-full max-w-md">
        {/* Card de connexion */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 overflow-hidden">
          {/* Header avec gradient */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Connexion</h2>
            <p className="text-blue-100 text-sm">
              Accédez à votre espace manager
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="votre.email@interieur.gouv.fr"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="••••••••"
                  required
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
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                  Se souvenir de moi
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
              >
                Mot de passe oublié ?
              </button>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
            >
              Se connecter
            </button>

            {/* Séparateur */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">Ou</span>
              </div>
            </div>

            {/* Bouton d'inscription */}
            <div className="text-center">
              <p className="text-sm text-slate-600 mb-3">
                Vous n'avez pas encore de compte ?
              </p>
              <button
                type="button"
                onClick={() => navigate("/inscription")}
                className="w-full bg-white border-2 border-blue-500 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Créer un compte
              </button>
            </div>
          </form>
        </div>

        {/* Message d'information */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            En vous connectant, vous acceptez nos{" "}
            <a href="#" className="text-blue-600 hover:underline font-semibold">
              conditions d'utilisation
            </a>{" "}
            et notre{" "}
            <a href="#" className="text-blue-600 hover:underline font-semibold">
              politique de confidentialité
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
