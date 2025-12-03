import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone, Send, Facebook } from "lucide-react"
import Contact from '../assets/image/contact.jpg'
import { MaperContact } from "./map"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section style={{ backgroundImage: `url(${Contact})`, backgroundSize: 'cover', backgroundPosition: 'center' , height :"20rem"}}>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-orange-500/20" /> */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-center pt-30">Entrer en contact</h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Contacter nous</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-orange-500 mb-8" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-400">
                      113 AVENUE JEAN JAURES
                      <br />
                      93110 ROSNY-SOUS-BOIS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@aguilauto-sas.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      contact@aguilauto-sas.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+33758340569" className="text-gray-400 hover:text-blue-400 transition-colors">
                      +33 7 58 34 05 69
                    </a>
                  </div>
                 
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                    <MaperContact />
              </div>

              {/* Company Info */}
              <div className="mt-12 p-8 bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">La référence de l'import automobile</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Fondée avec la passion pour l'automobile et l'engagement envers l'excellence, notre entreprise
                  s'efforce de vous fournir des véhicules de qualité supérieure et un service clientèle exceptionnel à
                  chaque étape de votre parcours.
                </p>
                <div className="flex items-center gap-3 text-orange-400">
                  <Facebook className="w-5 h-5" />
                  <span className="font-semibold">Consultez notre catalogue sur Facebook</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl h-fit">
              <h2 className="text-3xl font-bold text-white mb-2">Des questions?</h2>
              <p className="text-gray-400 mb-8">Veuillez remplir le formulaire ci-dessous</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom et Prénom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="+33 X XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-10 py-5 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-2xl border border-primary/20 gradient-shift"
                  // className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-5 h-5" />
                  ENVOYER
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
