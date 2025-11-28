import { Card, CardActionArea, CardContent, Typography, Box as MuiBox } from '@mui/material';
import { Car as CarIcon, Shield as ShieldIcon, Clock as ClockIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';
import { motion } from 'framer-motion'; 

const cardServices = [
    {
        icon: CarIcon,
        title: "Véhicules d'Occasion",
        description:
            "Large sélection de véhicules d'occasion de qualité provenant d'Allemagne, inspectés et certifiés.",
    },
    {
        icon: ShieldIcon,
        title: 'Garantie Véhicule',
        description: "Garantie de 24 à 48 mois sur chaque véhicule pour votre tranquillité d'esprit.",
    },
    {
        icon: ClockIcon,
        title: 'Livraison Rapide',
        description: "Livraison assurée à domicile sous 5 jours ouvrés après l'achat.",
    },
    {
        icon: TrendingUpIcon,
        title: 'Politique de Retour',
        description:
            "14 jours de rétractation accordés sur chaque vente de véhicule avec remboursement intégral.",
    },
];

// --- Variants pour l'animation Framer Motion ---

// Variants pour le titre/header (animation de base)
const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6, // Animation rapide pour le titre
        }
    },
};

// Variants pour le conteneur des cartes (pour déclencher l'animation en décalé)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Décalage de 0.1s entre chaque carte
        },
    },
};

// Variants pour chaque carte (effet de glissement vers le haut)
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            y: {
                stiffness: 100,
                damping: 10,
            },
            opacity: { duration: 0.3 }
        }
    }
} ;



// --- Composant Principal ---
export function ServicesSection() {
    
    // La couleur d'accentuation bleue utilisée pour les icônes et le sous-titre
    const ACCENT_BLUE = '#0f1011ff'; 

    return (
        // 1. Section Hero & Service (fond noir)
        <section 
            id="services" 
            className="bg-[#121212] py-20 md:py-32 px-4" // CHANGÉ : Le fond est maintenant noir pur
        >
            <div className="container mx-auto max-w-6xl">
                
                {/* 2. Bloc de titre stylisé comme la section Hero, maintenant animé */}
                <motion.div
                    className="text-center text-white mb-20"
                    variants={headerVariants} // Utilisation des nouveaux variants
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Déclencheur
                >
                    <span 
                        className="text-sm font-semibold uppercase tracking-widest"
                        style={{ color: '#808081ff' }} 
                    >
                        Nos Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-balance leading-tight">
                        {/* L'aventure commence ici */}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto text-pretty">
                        {/* Chez AguilAuto SAS, nous vous accompagnons dans le choix de votre voiture avec un service de livraison à domicile. */}
                    </p>
                </motion.div>

                {/* 3. Conteneur des Cartes (MuiBox enveloppé dans motion.div) */}
                <MuiBox
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Déclencheur de l'animation lors de l'apparition dans la vue
                    viewport={{ once: true, amount: 0.2 }} 
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            lg: 'repeat(4, 1fr)',
                        },
                        gap: 3,
                        // Les cartes restent blanches pour un contraste maximal sur le fond noir
                        '& > div > .MuiPaper-root': {
                            backgroundColor: 'white',
                            color: 'black',
                        }
                    }}
                >
                    {cardServices.map((card) => {
                        const IconComponent = card.icon;
                        return (
                            // Wrapper motion.div pour chaque carte
                            <motion.div key={card.title} variants={cardVariants}>
                                <Card elevation={8} sx={{ height: '100%', borderRadius: 3 }}>
                                    <CardActionArea
                                        sx={{
                                            height: '100%',
                                            padding: '16px',
                                            transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)', // Légèrement plus foncé au survol
                                                transform: 'translateY(-5px)', // Léger soulèvement au survol
                                            },
                                        }}
                                    >
                                        <CardContent
                                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
                                        >
                                            {/* Icône */}
                                            <IconComponent size={36} style={{ color: ACCENT_BLUE }} />

                                            {/* Titre */}
                                            <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
                                                {card.title}
                                            </Typography>

                                            {/* Description */}
                                            <Typography variant="body2" color="text.secondary">
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </motion.div>
                        );
                    })}
                </MuiBox>
            </div>
        </section>
    );
}
