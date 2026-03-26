import { useState } from "react";
import { CheckCircle, Circle, ArrowRight, ArrowLeft, Award, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";

interface Question {
  id: number;
  category: string;
  question: string;
  options: { value: number; label: string }[];
}

export function SelfAssessment() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      category: "Communication",
      question: "Je communique clairement mes attentes à mon équipe",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
    {
      id: 2,
      category: "Communication",
      question: "J'écoute activement les préoccupations de mes collaborateurs",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
    {
      id: 3,
      category: "Leadership",
      question: "Je sais inspirer et motiver mon équipe",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
    {
      id: 4,
      category: "Leadership",
      question: "Je prends des décisions difficiles quand c'est nécessaire",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
    {
      id: 5,
      category: "Délégation",
      question: "Je délègue efficacement les tâches à mon équipe",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
    {
      id: 6,
      category: "Délégation",
      question: "Je fais confiance à mes collaborateurs pour mener leurs missions",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
    {
      id: 7,
      category: "Gestion des conflits",
      question: "Je gère les conflits de manière constructive",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
    {
      id: 8,
      category: "Gestion des conflits",
      question: "Je transforme les tensions en opportunités de dialogue",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
    {
      id: 9,
      category: "Développement d'équipe",
      question: "Je consacre du temps au développement de mes collaborateurs",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
    {
      id: 10,
      category: "Développement d'équipe",
      question: "Je donne régulièrement du feedback constructif",
      options: [
        { value: 1, label: "Rarement" },
        { value: 2, label: "Parfois" },
        { value: 3, label: "Souvent" },
        { value: 4, label: "Toujours" },
      ],
    },
  ];

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    const categories: Record<string, { total: number; count: number }> = {};
    
    questions.forEach((q) => {
      if (answers[q.id]) {
        if (!categories[q.category]) {
          categories[q.category] = { total: 0, count: 0 };
        }
        categories[q.category].total += answers[q.id];
        categories[q.category].count += 1;
      }
    });

    return Object.entries(categories).map(([category, data]) => ({
      category,
      score: Math.round((data.total / (data.count * 4)) * 100),
      average: (data.total / data.count).toFixed(1),
    }));
  };

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-green-600";
    if (score >= 50) return "text-orange-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 75) return "Excellent";
    if (score >= 50) return "Bon";
    if (score >= 25) return "À développer";
    return "À améliorer";
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  if (showResults) {
    const results = calculateResults();
    const totalScore = Math.round(
      results.reduce((sum, r) => sum + r.score, 0) / results.length
    );

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-semibold text-blue-900 mb-2">
              Résultats de votre auto-diagnostic
            </h2>
            <p className="text-slate-600">Voici votre profil managérial</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">{totalScore}%</div>
            <div className="text-lg text-slate-700">Score global</div>
          </div>

          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-bold text-slate-900">Détail par compétence</h3>
            {results.map((result, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-900">{result.category}</span>
                  <span className={`font-bold ${getScoreColor(result.score)}`}>
                    {result.score}% - {getScoreLabel(result.score)}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all"
                    style={{ width: `${result.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Recommandations personnalisées
                </h4>
                <ul className="space-y-2 text-slate-700">
                  {results
                    .filter((r) => r.score < 75)
                    .map((r, i) => (
                      <li key={i}>
                        • Explorez les défis liés à <strong>{r.category}</strong> pour progresser
                      </li>
                    ))}
                  {results.every((r) => r.score >= 75) && (
                    <li>• Excellent travail ! Continuez à relever de nouveaux défis</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentStep(0);
                setAnswers({});
              }}
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Refaire le diagnostic
            </button>
            <button
              onClick={() => navigate("/defis")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Découvrir les défis
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900">Auto-diagnostic</h2>
            <span className="text-sm text-slate-600">
              Question {currentStep + 1} sur {questions.length}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="text-sm text-blue-600 font-semibold mb-2">
            {currentQuestion.category}
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center gap-3 ${
                  answers[currentQuestion.id] === option.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                }`}
              >
                {answers[currentQuestion.id] === option.value ? (
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
                <span className="font-medium text-slate-900">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Précédent
          </button>
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {currentStep === questions.length - 1 ? "Voir les résultats" : "Suivant"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}