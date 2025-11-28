import { Box, Typography } from '@mui/material';

export function AttractiveCar() {
    return (
      <>
        <Box 
          className='landingPage' 
          height='100vh' 
        >
            <Box className="animatedText" sx={{  textAlign: {xs : 'center' , lg: 'left'} , paddingTop : { xs : '12rem', lg : '9rem'} , paddingLeft : {lg : '9rem' }}}> 
                
                <Typography 
                  variant="h5" 
                  component="h5" 
                  sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'  }}
                >
                  L'aventure automobile commence ici

                </Typography>
                
                <Typography 
                  // variant="h6" 
                  sx={{ color: 'white', textShadow: '1px 1px 3px rgba(136, 136, 136, 0.7)' }}
                >
                  Chez AguilAuto SAS, nous vous accompagnons dans le choix de votre voiture avec un service de livraison à domicile.

                </Typography>

            </Box>
        </Box>
      </>
    )
}