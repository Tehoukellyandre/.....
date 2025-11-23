import { Car, Mail, Phone, MapPin } from 'lucide-react';
import { Box, Typography, Grid, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

// Note: J'utilise 'Box' et 'Grid' de MUI pour la structure et la sémantique, 
// mais je conserve vos classes Tailwind pour le style (couleur, espacement, etc.).

export function Footer() {
  // Les classes Tailwind sont appliquées via la prop 'className' de MUI/Box/Typography, etc.
  
  return (
    <Box 
      component="footer" 
    //   bg-black border-t border-border py-12 px-4 text-white
      className="bg-[#121212] border-t border-border py-12 px-4 text-white"
    >
      <Box className="container mx-auto max-w-6xl">
        
        {/* Grille principale des quatre colonnes */}
        <Grid container spacing={{ xs: 4, md: 8 }} className="mb-8">
          
          {/* 1. Colonne Logo et Description */}
          <Grid>
            <Box className="flex items-center gap-2 mb-4">
              <Box className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </Box>
              <Typography 
                component="span" 
                className="text-xl font-heading font-bold text-text"
                sx={{ fontFamily: 'yourHeadingFont, sans-serif' }} // Optionnel: pour intégrer le font-heading
              >
                AguilAuto
              </Typography>
            </Box>
            <Box className="text-text text-sm leading-relaxed w-100">
              Nous sommes fiers de vous offrir une expérience d’achat exceptionnelle 
              dans le monde passionnant des voitures d’occasion  d’importées d’allemandes.
            </Box>
          </Grid>
          
          {/* 2. Colonne Navigation */}
          <Grid >
            <Typography component="h3" className="text-text font-semibold mb-4">
              Navigation
            </Typography>
            <List className="space-y-2 p-0 text-sm">
              {['Accueil', 'Services', 'Catalogues', 'Contact'].map((item) => (
                <ListItem key={item} disablePadding className="p-0">
                    <Typography 
                      component="a" 
                      className="text-text-muted hover:text-primary transition-colors cursor-pointer"
                      sx={{ textDecoration: 'none' }}
                    >
                      {item}
                    </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          
          {/* 3. Colonne Services */}
          <Grid>
            <Typography component="h3" className="text-text font-semibold mb-4">
              Services
            </Typography>
              {['Vente de véhicules', 'Livraison à domicile', 'Garantie véhicule'].map((service) => (
                <ListItem key={service} disablePadding className="p-0">
                  <ListItemText primary={service} />
                </ListItem>
              ))}
          </Grid>
          
          {/* 4. Colonne Contact */}
          <Grid>
            <Typography component="h3" className="text-text font-semibold mb-4">
              Contact
            </Typography>
            <List className="space-y-3 p-0 text-sm">
              {/* Email */}
              <ListItem disablePadding className="p-0">
                <ListItemIcon className="min-w-0 mr-2">
                  <Mail className="w-4 h-4 text-white" />
                </ListItemIcon>
                <ListItemText primary="contact@aguilauto.com" className="text-text-muted" />
              </ListItem>
              
              {/* Téléphone */}
              <ListItem disablePadding className="p-0">
                <ListItemIcon className="min-w-0 mr-2">
                  <Phone className="w-4 h-4 text-white" />
                </ListItemIcon>
                <ListItemText primary="+33 1 23 45 67 89" className="text-text-muted" />
              </ListItem>

              {/* Adresse */}
              <ListItem disablePadding className="p-0">
                <ListItemIcon className="min-w-0 mr-2">
                  <MapPin className="w-4 h-4 text-white" />
                </ListItemIcon>
                <ListItemText primary="Paris, France" className="text-text-muted" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        
        {/* Ligne de Copyright */}
        <Box className="border-t border-border pt-8 text-center text-sm text-text-muted">
          <Typography variant="body2">
            © 2025 AguilAuto SAS. Tous droits réservés.
          </Typography>
        </Box>
        
      </Box>
    </Box>
  );
}