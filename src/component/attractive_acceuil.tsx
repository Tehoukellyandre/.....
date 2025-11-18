import { Box, Typography } from '@mui/material'; // N'oubliez pas d'importer Typography

export function AttractiveCar() {
    return (
      <>
        {/* Le conteneur principal centré */}
        <Box 
          className='landingPage' 
          height='100vh' 
        >
            <Box className="animatedText" sx={{ textAlign: 'center' }}> 
                
                {/* Utilisez Typography de MUI pour votre texte */}
                <Typography 
                  variant="h2" 
                  component="h2" 
                  sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
                >
                  Découvrez la Puissance.
                </Typography>
                
                <Typography 
                  variant="h4" 
                  sx={{ color: 'white', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
                >
                  Une nouvelle ère commence.
                </Typography>

            </Box>
        </Box>
      </>
    )
}