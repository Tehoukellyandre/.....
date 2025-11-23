import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import garage from "../assets/image/garage.webp"
import { QualiteCards } from './choix_session';

// ⚠️ Assurez-vous d'avoir installé framer-motion : npm install framer-motion

// --- Données des fonctionnalités ---
const features = [
  'Plus grand portail automobile d\'Allemagne',
  'Qualité des voitures certifiée',
  'Transparence et évidence des faits',
  'Service client dédié et réactif',
  'Financement personnalisé disponible',
  'Reprise de votre ancien véhicule',
];

// --- Variants pour l'animation Framer Motion ---

// Variant de base pour les éléments qui glissent vers le haut
const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.7,
        }
    },
} ;


// Variant pour les éléments de la liste (apparition en décalé)
const listContainerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1, 
        }
    },
    hidden: {},
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

// --- Composant Principal ---
export function FeaturesSection() {
    
    const ACCENT_BLUE = '#4A90E2'; // Bleu accentué
    const BG_DARK_LUXE = '#121212'; // Arrière-plan noir de luxe / Charbon très foncé
    const TEXT_MUTED_COLOR = '#A0AEC0'; // Gris clair pour le texte secondaire

    return (
        // APPLIQUÉ : Utilisation du fond noir luxe
        <section className={`py-20 md:py-32 px-4`} style={{ backgroundColor: BG_DARK_LUXE }}>
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Colonne Gauche : Texte et Liste des fonctionnalités */}
                    <motion.div
                        variants={slideUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-white" // Couleur du texte principal en blanc
                    >
                        {/* Sous-titre */}
                        <span 
                            className="text-sm font-semibold uppercase tracking-wider"
                            style={{ color: '#808081ff' }}
                        >
                            Pourquoi nous choisir
                        </span>
                        
                        {/* Titre principal */}
                        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-balance leading-tight">
                            Une expérience d'achat automobile unique
                        </h2>
                        
                        {/* Paragraphe d'introduction */}
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: TEXT_MUTED_COLOR }}>
                            Nous faisons partie du plus grand portail automobile d'Allemagne, 
                            qui facilite l'achat d'une voiture d'occasion aussi fluide et 
                            agréable que possible.
                        </p>
                        
                        {/* Liste des fonctionnalités animée */}
                        <motion.div 
                            className="space-y-4"
                            variants={listContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {features.map((feature) => (
                                <motion.div
                                    key={feature}
                                    variants={listItemVariants}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: ACCENT_BLUE }} />
                                    {/* Texte de la liste en gris très clair */}
                                    <span className="font-medium" style={{ color: TEXT_MUTED_COLOR }}>{feature}</span> 
                                </motion.div>
                            ))}
                        </motion.div>
                        
                        {/* Bouton d'appel à l'action */}
                        <button 
                            className="mt-10 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                            style={{ backgroundColor: ACCENT_BLUE }}
                        >
                            Découvrir nos catalogues
                        </button>
                    </motion.div>
                    
                    {/* Colonne Droite : Image et Carte de stats */}
                    <motion.div 
                        variants={slideUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative"
                    >
                        {/* Conteneur de l'image (Remplacé par un placeholder pour la compatibilité) */}
                        <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            {/* Utilisation d'une image placeholder */}
                            <img
                                src={garage}
                                alt="Showroom de voitures de luxe"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* APPLIQUÉ : Carte flottante des statistiques en mode sombre */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 md:w-5/6 lg:w-full bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-2xl">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-3xl font-extrabold" style={{ color: ACCENT_BLUE }}>100%</div>
                                    <div className="text-xs mt-1" style={{ color: TEXT_MUTED_COLOR }}>Notre Fiabilité</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-extrabold" style={{ color: ACCENT_BLUE }}>98%</div>
                                    <div className="text-xs mt-1" style={{ color: TEXT_MUTED_COLOR }}>Qualité et performances de nos vehicules</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-extrabold" style={{ color: ACCENT_BLUE }}>99%</div>
                                    <div className="text-xs mt-1" style={{ color: TEXT_MUTED_COLOR }}>Notre Rapidité  </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Ajout d'espace supplémentaire pour la carte flottante */}
            <div className='pb-16 lg:pb-0'>
                <QualiteCards />    
            </div> 
        </section>
    );
}