import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HoverCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  padding: theme.spacing(2),
  transition: theme.transitions.create(['transform', 'box-shadow']),

  // Styles pour l'animation au survol
  '&:hover': {
    // Soulèvement (léger décalage vers le haut)
    transform: 'translateY(-4px)',
    // Augmentation de l'ombre
    boxShadow: theme.shadows[10],
  },
}));

// --- Composant Carte Thème Bleu (Financement) ---
// Utilisation de styles différents pour la carte centrale
const BlueCard = styled(HoverCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Couleur primaire de MUI
  color: theme.palette.common.white,
  
  // Surcharge des styles au survol pour garder le look bleu
  '&:hover': {
    transform: 'translateY(-4px)',
    // Utilisation d'une ombre blanche ou plus intense pour l'effet
    boxShadow: '0px 10px 15px rgba(255, 255, 255, 0.99)', 
  },
}));


const Separator = ({ color }: { color: string }) => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      my: 2 
    }}
  >
    <Box 
      sx={{ 
        height: '4px', 
        width: '60px', 
        backgroundColor: color, 
        borderRadius: '2px',
        borderTop: `4px dashed ${color}`,
        borderBottom: `4px dashed ${color}`,
      }} 
    />
  </Box>
);

// --- Les données de vos cartes ---
const cardData = [
  {
    title: "Inspection et Certification",
    content: "Chez AGUILAUTO SAS avant d'être présentées à la vente, toutes nos voitures d'occasion en provenance d'Allemagne sont soumises à une inspection rigoureuse effectuée par nos techniciens qualifiés. Nous vérifions chaque aspect du véhicule pour garantir sa qualité, sa fiabilité et sa sécurité. De plus, nous offrons des certifications pour vous assurer de la condition optimale de chaque voiture.",
    isBlue: false,
  },
  {
    title: "Financement Personnalisé",
    content: "Nous comprenons que l'achat d'une voiture peut être un investissement important, c'est pourquoi nous proposons des solutions de financement flexibles et personnalisées. Notre équipe financière est là pour vous aider à trouver le plan qui correspond le mieux à vos besoins et à votre budget, afin que vous puissiez conduire la voiture de vos rêves sans souci.",
    isBlue: true, // La carte centrale est la carte bleue
  },
  {
    title: "Assistance à l'Importation",
    content: "Acheter une voiture d'occasion en provenance d'Allemagne peut être un processus complexe, mais nous sommes là pour vous aider à chaque étape du chemin. Nous proposons une assistance complète à l'importation, y compris la recherche et la sélection de voitures, la coordination de l'inspection et de la livraison, et la gestion de tous les aspects administratifs et logistiques.",
    isBlue: false,
  },
];

// --- Composant Principal d'Affichage ---
export function QualiteCards() {
  return (
    <Box 
      sx={{ 
        marginTop : {xs : '40px'} ,
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
        gap: 3, 
        p: 3, // Padding global
        backgroundColor: '#121212' // Pour visualiser les ombres
      }}
    >
      {cardData.map((card, index) => {
        const CardComponent = card.isBlue ? BlueCard : HoverCard;
        const separatorColor = card.isBlue ? 'white' : 'primary.main';

        return (
          <CardComponent key={index} elevation={3}>
            <CardContent>
              <Typography 
                variant="h5" 
                component="div" 
                fontWeight="bold"
                sx={{ mb: 1 }}
              >
                {card.title}
              </Typography>
              
              <Separator color={separatorColor} />

              <Typography 
                variant="body1" 
                sx={{ 
                  textAlign: card.isBlue ? 'center' : 'left', 
                  fontSize: '0.95rem' 
                }}
              >
                {card.content}
              </Typography>
            </CardContent>
          </CardComponent>
        );
      })}
    </Box>
  );
}

