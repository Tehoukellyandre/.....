import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/material/styles';
import Routier from '../assets/image/routier.webp'
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from '@tanstack/react-router';


// --- Composant Conteneur de la Section Hero (Pour les styles de base) ---
const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '600px', // Hauteur minimale pour l'effet visuel
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Empiler les colonnes sur mobile/tablette
    minHeight: 'auto',
  },
}));

// --- Composant Colonne de Contenu Gauche (Gris Sombre) ---
const ContentColumn = styled(Box)(({ theme }) => ({
  width: '40%', // 40% de la largeur sur desktop
  backgroundColor: '#121212', // Gris foncé
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  gap : '1.5rem',
  justifyContent: 'center',
  padding: theme.spacing(8),
  
  [theme.breakpoints.down('md')]: {
    width: '100%', // Pleine largeur sur mobile/tablette
    padding: theme.spacing(4),
  },
}));

// --- Composant Colonne de l'Image (60% du côté droit) ---
const ImageColumn = styled(Box)(({ theme }) => ({
  width: '60%',
  backgroundImage: `url(${Routier})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',     // nécessaire pour placer InfoCard
  overflow: 'hidden',        // évite débordement de la carte

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '400px',        // hauteur lisible sur mobile
  },

  [theme.breakpoints.down('sm')]: {
    height: '300px',        // un peu plus compact
  },
}));


// --- Composant Carte d'Information (Orange en bas à droite) ---
const InfoCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#f2913e',
  padding: theme.spacing(3),
  position: 'absolute',  // toujours absolu
  bottom: 0,
  right: 0,
  width: '50%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,  // toujours au-dessus de l’image

  [theme.breakpoints.down('md')]: {
    width: '100%',  // 100% sur mobile
    bottom: 0,
    right: 0,
    padding: theme.spacing(2.5),
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));


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

const features = [
  'Plus de 1000 véhicules disponibles immédiatement. Une sélection minutieuse de voitures d’occasion en provenance d’Allemagne',
  'Tous les véhicules sont entretenus en concession et vendu avec la garantie constructeur.',
  'Le marché Allemand propose des véhicules d’occasions à des prix très abordables',
];
export function HeroSection() {
    const ACCENT_BLUE = '#4A90E2'; 
    const TEXT_MUTED_COLOR = '#A0AEC0'; 
  return (
    <HeroContainer>
      
      {/* 1. Colonne de Contenu Gauche */}
      <ContentColumn>
        <Typography 
          variant="h3" 
          component="h1" 
          fontWeight="bold"
          gutterBottom // Ajoute une marge en bas
        >
          La référence de l'import automobile
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 4 }}>
          Fondée avec la passion pour l'automobile et l'engagement envers l'excellence, notre entreprise s'efforce de vous fournir des véhicules de qualité supérieure et un service clientèle exceptionnel à chaque étape de votre parcours.
        </Typography>
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
        {/* <br /> */}
        <Link 
          to="/conditions"
          className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-10 py-5 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-2xl border border-primary/20 gradient-shift"
          activeProps={{
          className: 'font-bold',
          }}
        >
         NOS CONDITIONS
        </Link>
        
      </ContentColumn>
      
      {/* 2. Colonne de l'Image Droite */}
      <ImageColumn>
        
        {/* Carte d'Information Orange Positionnée Absolue */}
        <InfoCard>
          <Box className='flex items-center gap-4'>
            <Box>
                <Typography 
                variant="h5" 
                component="div" 
                fontWeight="bold"
                sx={{ lineHeight: 1 }} // Resserre le titre
                >
                AGUILAUTO SAS
                </Typography>
                <Typography variant="body2">
                Consultez notre catalogue sur Facebook
                </Typography>
            </Box>
            
            <IconButton 
                color="inherit" // Utilise la couleur du parent (blanc par défaut)
                sx={{ 
                backgroundColor: '#0d9af1', // Couleur Facebook Blue ou similaire
                color: 'white',
                '&:hover': { backgroundColor: '#0c84d1' },
                p: 1.5, // Padding pour rendre le bouton plus grand
                }}
                aria-label="Voir le catalogue Facebook"
            >
                <FacebookIcon fontSize="large" />
            </IconButton>
          </Box>
          
        </InfoCard>
        
      </ImageColumn>
      
    </HeroContainer>
  );
}

// export default HeroSection;