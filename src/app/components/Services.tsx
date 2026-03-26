import { UserCheck, Users, Handshake, Clock, CheckCircle, ArrowRight, Mail, Calendar, Lightbulb } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: UserCheck,
      title: "Coaching Professionnel",
      subtitle: "Accompagnement personnalisé",
      description: "Bénéficiez d'un accompagnement individuel sur-mesure pour développer votre leadership et atteindre vos objectifs managériaux.",
      features: [
        "Sessions individuelles de 60 minutes",
        "Plan de développement personnalisé",
        "Suivi régulier de vos progrès",
        "Outils et méthodologies éprouvées",
        "Confidentialité totale garantie",
      ],
      duration: "3 à 6 mois",
      frequency: "Séances bi-mensuelles",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Handshake,
      title: "Médiation Professionnelle",
      subtitle: "Résolution de conflits",
      description: "Faites appel à un médiateur expert pour résoudre les conflits d'équipe et restaurer un climat de travail serein et productif.",
      features: [
        "Intervention neutre et impartiale",
        "Gestion des conflits interpersonnels",
        "Facilitation de la communication",
        "Restauration de la confiance",
        "Solutions durables et consensuelles",
      ],
      duration: "2 à 4 semaines",
      frequency: "Sessions selon besoins",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: Users,
      title: "Co-développement",
      subtitle: "Intelligence collective",
      description: "Rejoignez un groupe de pairs pour partager vos défis, bénéficier de regards croisés et trouver des solutions innovantes ensemble.",
      features: [
        "Groupes de 6 à 8 managers",
        "Méthodologie structurée",
        "Diversité des perspectives",
        "Apprentissage par les pairs",
        "Animation par un facilitateur certifié",
      ],
      duration: "6 à 12 mois",
      frequency: "Séances mensuelles de 3h",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Laboratoires d'Innovation Publique",
      subtitle: "Transformation et innovation",
      description: "Participez à des espaces collaboratifs dédiés à l'expérimentation de nouvelles méthodes et à la modernisation des pratiques managériales dans le secteur public.",
      features: [
        "Méthodologies d'innovation participative",
        "Design thinking et prototypage rapide",
        "Accompagnement aux projets de transformation",
        "Mutualisation des bonnes pratiques",
        "Réseau de laboratoires partenaires",
      ],
      duration: "Selon projet",
      frequency: "Ateliers et sprints thématiques",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-900">
          Nos services d'accompagnement
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Développez votre leadership et vos compétences managériales avec nos services personnalisés
        </p>
      </section>

      {/* Services Grid */}
      <section className="space-y-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-[2fr,1fr]">
                {/* Main Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-semibold text-slate-900 mb-2">
                        {service.title}
                      </h2>
                      <p className={`text-lg font-semibold ${service.textColor}`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 ${service.textColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">
                        <strong>Durée :</strong> {service.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm">
                        <strong>Fréquence :</strong> {service.frequency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Sidebar */}
                <div className={`${service.bgColor} p-8 md:p-10 flex flex-col justify-center`}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Intéressé(e) ?
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Contactez-nous pour discuter de vos besoins et planifier un premier échange.
                  </p>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors border-2">
                      <Calendar className="w-5 h-5" />
                      Planifier un appel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            Pourquoi choisir nos services ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Experts certifiés</h3>
              <p className="text-sm text-slate-600">
                Tous nos accompagnateurs sont certifiés et possèdent une solide expérience terrain
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Approche personnalisée</h3>
              <p className="text-sm text-slate-600">
                Chaque accompagnement est adapté à vos besoins spécifiques et votre contexte
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Résultats mesurables</h3>
              <p className="text-sm text-slate-600">
                Nous mettons en place des indicateurs pour suivre et mesurer vos progrès
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center space-y-6 py-8">
        <h3 className="text-3xl font-semibold text-slate-900">
          Prêt à franchir une nouvelle étape ?
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Nos experts sont à votre écoute pour vous accompagner dans votre développement professionnel
        </p>
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
          <Mail className="w-5 h-5" />
          Contactez-nous
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
}