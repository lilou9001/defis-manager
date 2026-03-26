import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Video, CheckCircle, ChevronLeft, ChevronRight, List, CalendarDays } from "lucide-react";

interface Event {
  id: number;
  title: string;
  type: "Webinaire" | "Atelier" | "Formation" | "Conférence";
  date: string;
  time: string;
  duration: string;
  format: "En ligne" | "Présentiel" | "Hybride";
  location?: string;
  speaker: string;
  description: string;
  participants: number;
  maxParticipants: number;
  registered?: boolean;
}

export function Events() {
  const [selectedFormat, setSelectedFormat] = useState<string>("Tous");
  const [viewMode, setViewMode] = useState<"list" | "calendar">("calendar");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events: Event[] = [
    {
      id: 1,
      title: "Webinaire : Les clés du feedback efficace",
      type: "Webinaire",
      date: "2026-03-15",
      time: "14:00",
      duration: "1h30",
      format: "En ligne",
      speaker: "Sophie Martin",
      description: "Découvrez comment donner et recevoir du feedback de manière constructive pour développer vos équipes",
      participants: 45,
      maxParticipants: 100,
    },
    {
      id: 2,
      title: "Atelier : Gérer les situations de conflit",
      type: "Atelier",
      date: "2026-03-20",
      time: "09:00",
      duration: "3h",
      format: "Présentiel",
      location: "Paris, 15e arrondissement",
      speaker: "Thomas Dubois",
      description: "Un atelier pratique avec des mises en situation pour apprendre à désamorcer et résoudre les conflits",
      participants: 12,
      maxParticipants: 15,
      registered: true,
    },
    {
      id: 3,
      title: "Formation : Leadership transformationnel",
      type: "Formation",
      date: "2026-03-25",
      time: "09:00",
      duration: "2 jours",
      format: "Hybride",
      location: "Lyon",
      speaker: "Marie Lambert",
      description: "Une formation complète sur les principes du leadership transformationnel et leur application concrète",
      participants: 18,
      maxParticipants: 25,
    },
    {
      id: 4,
      title: "Conférence : L'avenir du management",
      type: "Conférence",
      date: "2026-04-05",
      time: "18:00",
      duration: "2h",
      format: "En ligne",
      speaker: "Pierre Rousseau",
      description: "Table ronde avec des experts sur les nouvelles tendances et défis du management moderne",
      participants: 230,
      maxParticipants: 500,
    },
    {
      id: 5,
      title: "Atelier : Délégation et autonomie",
      type: "Atelier",
      date: "2026-04-10",
      time: "14:00",
      duration: "2h",
      format: "En ligne",
      speaker: "Julie Moreau",
      description: "Apprenez à déléguer efficacement tout en développant l'autonomie de vos collaborateurs",
      participants: 38,
      maxParticipants: 50,
    },
    {
      id: 6,
      title: "Webinaire : Communication non-violente",
      type: "Webinaire",
      date: "2026-04-18",
      time: "12:00",
      duration: "1h",
      format: "En ligne",
      speaker: "Sophie Martin",
      description: "Introduction aux principes de la CNV et leur application dans le contexte professionnel",
      participants: 67,
      maxParticipants: 100,
    },
  ];

  const formats = ["Tous", "En ligne", "Présentiel", "Hybride"];

  const filteredEvents = events.filter((event) => {
    const formatMatch = selectedFormat === "Tous" || event.format === selectedFormat;
    return formatMatch;
  });

  const upcomingEvents = filteredEvents.filter(
    (event) => new Date(event.date) >= new Date()
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Webinaire":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Atelier":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Formation":
        return "bg-green-100 text-green-700 border-green-200";
      case "Conférence":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const getAvailabilityPercentage = (participants: number, max: number) => {
    return ((participants / max) * 100).toFixed(0);
  };

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const getEventsForDay = (day: number, month: number, year: number) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === month &&
        eventDate.getFullYear() === year
      );
    });
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);
  const monthName = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(currentMonth);
  const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-semibold text-blue-900">Calendrier des Événements</h2>
          <p className="text-slate-600 mt-1">
            Participez à des webinaires, ateliers et formations pour développer vos compétences
          </p>
        </div>
        
        {/* View Toggle */}
        <div className="flex gap-2 bg-white rounded-lg p-1 border shadow-sm">
          <button
            onClick={() => setViewMode("calendar")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
              viewMode === "calendar"
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <CalendarDays className="w-4 h-4" />
            Calendrier
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
              viewMode === "list"
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <List className="w-4 h-4" />
            Liste
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="font-semibold text-slate-900 mb-4">Format</h3>
        <div className="flex gap-2 flex-wrap">
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => setSelectedFormat(format)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFormat === format
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {format}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar View */}
      {viewMode === "calendar" && (
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {/* Calendar Header */}
          <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center justify-between">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-white rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              <h3 className="text-xl font-bold text-slate-900 capitalize">
                {monthName}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-white rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center font-semibold text-slate-600 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {/* Empty cells for days before month starts */}
              {Array.from({ length: startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1 }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square" />
              ))}

              {/* Days of the month */}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const dayEvents = getEventsForDay(day, month, year);
                const isToday =
                  day === new Date().getDate() &&
                  month === new Date().getMonth() &&
                  year === new Date().getFullYear();

                return (
                  <div
                    key={day}
                    className={`aspect-square border rounded-lg p-2 transition-all hover:border-blue-300 hover:shadow-md ${
                      isToday ? "border-blue-500 bg-blue-50" : "border-slate-200"
                    }`}
                  >
                    <div className={`text-sm font-semibold mb-1 ${isToday ? "text-blue-600" : "text-slate-900"}`}>
                      {day}
                    </div>
                    <div className="space-y-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <div
                          key={event.id}
                          className={`text-xs px-1.5 py-0.5 rounded truncate ${getTypeColor(event.type)}`}
                          title={event.title}
                        >
                          {event.time} {event.title.substring(0, 15)}...
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-slate-500 font-medium">
                          +{dayEvents.length - 2} autre{dayEvents.length - 2 > 1 ? "s" : ""}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="p-6 border-t bg-slate-50">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Légende</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div>
                <span className="text-sm text-slate-600">Webinaire</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded"></div>
                <span className="text-sm text-slate-600">Atelier</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
                <span className="text-sm text-slate-600">Formation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-100 border border-orange-200 rounded"></div>
                <span className="text-sm text-slate-600">Conférence</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Events List */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all ${
                event.registered ? "border-green-300 bg-green-50/30" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Date Card */}
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 text-white text-center w-24">
                  <div className="text-3xl font-bold">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-sm">
                    {new Intl.DateTimeFormat("fr-FR", { month: "short" }).format(
                      new Date(event.date)
                    )}
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">{event.speaker}</p>
                    </div>
                    {event.registered && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        Inscrit
                      </div>
                    )}
                  </div>

                  <p className="text-slate-700 mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time} · {event.duration}
                    </div>
                    {event.format === "En ligne" ? (
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        {event.format}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location || event.format}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="w-4 h-4" />
                      <span>
                        {event.participants} / {event.maxParticipants} participants
                      </span>
                      <span className="text-xs text-slate-500">
                        ({getAvailabilityPercentage(event.participants, event.maxParticipants)}% rempli)
                      </span>
                    </div>
                    {!event.registered && (
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        S'inscrire
                      </button>
                    )}
                  </div>

                  {event.registered && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                      <strong>Vous êtes inscrit !</strong> Un lien de connexion vous sera envoyé par email 24h avant l'événement.
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {upcomingEvents.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border">
              <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600">Aucun événement à venir pour ce format</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}