import { Box,   Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';

export function AttractiveCar() {
    return (
      <>
        <Box 
          className='landingPage ' 
          height={{lg : '100vh' , xs : '80vh' }} 
        >
            <Box className="animatedText" 
             sx={{ 
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              textAlign: { xs: "center", lg: "left" },
              alignItems: { xs: "center", lg: "flex-start" },   //  CENTRE SUR MOBILE
              paddingTop: { xs: "7rem", lg: "9rem" },
              paddingLeft: { lg: "9rem" }
             }}
            > 
                
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                    whiteSpace: 'nowrap',          
                    fontSize: 'clamp(18px, 5vw, 36px)', // Ajuste la taille automatiquement selon l'écran
                  }}
                >
                  L'aventure automobile commence ici

                </Typography>
                <Typography 
                  sx={{ color: "rgba(247, 239, 239, 0.7)", textShadow: '1px 1px 3px rgba(136, 136, 136, 0.7)' , width : {lg :"500px"} }}
                >
                  Chez AguilAuto SAS, nous vous accompagnons dans le choix de votre voiture avec un service de livraison à domicile.

                </Typography>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-10 py-5 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-2xl border border-primary/20 gradient-shift"
                      activeProps={{
                        className: 'font-bold',
                      }}
                    >
                    Nous Contacter
                    </Link> 

            </Box>
        </Box>
      </>
    )
}