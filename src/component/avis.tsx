import { Link } from "@tanstack/react-router"
import { Star, Quote, TrendingUp, Users, Award, CheckCircle2} from "lucide-react"

export function AvisPage() {
  const reviews = [
    {
      author: "Jean Alain",
      text: "J'ai récemment acheté une voiture d'occasion chez AGUILAUTO SAS et je suis extrêmement satisfait de mon expérience. Le processus d'achat était transparent et sans stress, et l'équipe était incroyablement professionnelle et serviable. La voiture que j'ai achetée était exactement comme décrite, et je me sens confiant dans mon achat. Je recommande vivement AGUILAUTO SAS à quiconque recherche une voiture d'occasion de haute qualité avec un service client exceptionnel.",
    },
    {
      author: "Marie Martin",
      text: "Je suis ravi de ma nouvelle voiture achetée chez AGUILAUTO SAS. Le processus d'achat était simple et rapide, et j'ai été impressionné par la qualité de service fournie par l'équipe. Ils ont répondu à toutes mes questions et ont rendu le processus aussi transparent que possible. Je recommande vivement V à tous ceux qui recherchent une expérience d'achat de voiture sans tracas.",
    },
    {
      author: "Pierre Lambert",
      text: "AGUILAUTO SAS a dépassé toutes mes attentes en matière de service client. L'équipe était sympathique, compétente et prête à répondre à toutes mes questions. Ils ont pris le temps de m'écouter et de comprendre mes besoins, et m'ont aidé à trouver la voiture parfaite pour moi. Je suis très reconnaissant pour leur assistance et je recommande vivement AGUILAUTO SAS à tous mes amis et ma famille.",
    },
    {
      author: "Sarah Tremblay",
      text: "Mon expérience avec AGUILAUTO SAS a été tout simplement fantastique. J'ai été impressionné par leur professionnalisme, leur transparence et leur dévouement à fournir un service exceptionnel. Ils ont pris le temps de répondre à toutes mes questions et de m'orienter vers la voiture parfaite pour moi. Je recommande vivement AGUILAUTO SAS à tous ceux qui recherchent une expérience d'achat de voiture sans tracas.",
    },
    {
      author: "Thomas Leclerc",
      text: "Je suis très satisfait de mon achat chez AGUILAUTO SAS. Non seulement j'ai trouvé la voiture parfaite pour mes besoins, mais j'ai également été impressionné par la qualité de leur service client. Ils ont rendu le processus d'achat aussi simple et transparent que possible, et je me sens confiant dans mon choix. Merci AGUILAUTO SAS pour une expérience aussi agréable !",
    },
    {
      author: "Martin Girard",
      text: "Je ne pourrais pas être plus heureux de mon expérience avec AGUILAUTO SAS. Leur équipe était non seulement compétente et professionnelle, mais aussi extrêmement sympathique et serviable. Ils ont rendu tout le processus d'achat aussi fluide que possible, et je suis très satisfait de ma nouvelle voiture. Je recommande vivement AGUILAUTO SAS à tous ceux qui recherchent une expérience d'achat de voiture exceptionnelle.",
    },
    {
      author: "Émilie Bergeron",
      text: "AGUILAUTO SAS est tout simplement exceptionnel. Leur équipe était incroyablement serviable et compétente, et ils ont rendu le processus d'achat de ma voiture d'occasion aussi facile que possible. Je suis très satisfait de mon achat et je recommande vivement AGUILAUTO SAS à tous ceux qui recherchent une expérience d'achat de voiture de qualité.",
    },
    {
      author: "Dérick Orson",
      text: "Véhicule livré conforme à la description, propre avec tous les papiers en mon nom, préparés à l'avance et biens classés. Par contre,0 négociation possible sur le prix, mais en contrepartie le service est de qualité avec une procédure d'achat facile du début jusqu'à la fin et une livraison à domicile par un mandataire attentif et qui a passer le temps nécessaire pour répondre a tout mes questions.",
    },
  ]

  const stats = [
    { icon: Star, value: "4.8", label: "Note moyenne", suffix: "/5" },
    { icon: Users, value: "2,394", label: "Avis clients" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction" },
    { icon: Award, value: "500+", label: "Voitures livrées" },
  ]

  return (
    <div className="min-h-screen bg-[#121212]">
    

      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 gradient-shift"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pulse-glow"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-light px-4 py-2 rounded-full mb-6 scale-in">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">Certifié Excellence Service</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-8 text-balance slide-up leading-tight">
              Témoignages{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent gradient-shift">
                Clients
              </span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed slide-up animate-delay-1 max-w-2xl mx-auto">
              Découvrez pourquoi nos clients nous font confiance pour réaliser leurs rêves automobiles
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </section>

      <section className="py-12 -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-surface-elevated/50 backdrop-blur-xl rounded-2xl p-8 border border-border shadow-2xl hover-lift text-center count-up group border-glow"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div
                      className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl inline-flex mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 float"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}
                      {stat.suffix && <span className="text-2xl text-text-muted">{stat.suffix}</span>}
                    </div>
                    <div className="text-sm text-text-muted font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1a1a1a] relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl pulse-glow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-surface-elevated/80 to-surface-elevated/40 backdrop-blur-2xl rounded-3xl p-12 md:p-16 border border-border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl float"></div>
              <div
                className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl float"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="text-center lg:text-left flex-1 slide-in-left">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                    Vérifié par Google
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading">
                    Excellence sur Google
                  </div>
                  <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                    Des milliers de clients satisfaits témoignent de la qualité de notre service et de notre engagement
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-10 shadow-2xl min-w-[280px] text-center border-4 border-primary/20 border-glow slide-in-right">
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-8 h-8 fill-accent text-accent drop-shadow-lg bounce-in"
                        style={{ animationDelay: `${star * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <div className="text-7xl font-bold text-[#121212] mb-3 font-heading count-up">4.8</div>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 gradient-shift"></div>
                  <div className="text-text-secondary font-semibold mb-2">Basé sur</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text gradient-shift">
                    2,394 avis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#121212] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Paroles de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent gradient-shift">
                  Clients
                </span>
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                Chaque témoignage reflète notre passion pour l'automobile et notre engagement envers l'excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-surface-elevated/80 to-surface-elevated/40 backdrop-blur-xl rounded-3xl p-8 border border-border shadow-xl hover-lift group ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"} relative overflow-hidden`}
                  style={{ animationDelay: `${(index % 4) * 0.15}s` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity gradient-shift"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Quote className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-accent text-accent group-hover:scale-110 transition-transform"
                          style={{ transitionDelay: `${star * 0.05}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-8 text-[15px] relative z-10">{review.text}</p>

                  <div className="flex items-center gap-4 pt-6 border-t border-border relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">{review.author}</div>
                      <div className="text-sm text-text-muted flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        Client vérifié
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#121212] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl pulse-glow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-surface-elevated/80 to-surface-elevated/40 backdrop-blur-2xl rounded-3xl p-12 md:p-16 border border-border shadow-2xl text-center bounce-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Rejoignez Notre Communauté de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent gradient-shift">
                  Clients Satisfaits
                </span>
              </h2>
              <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Fondée avec la passion pour l'automobile et l'engagement envers l'excellence, notre entreprise s'efforce
                de vous fournir des véhicules de qualité supérieure et un service clientèle exceptionnel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    to="/conditions"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-10 py-5 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-2xl border border-primary/20 gradient-shift"
                    activeProps={{
                    className: 'font-bold',
                    }}
                >
                Nos Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
