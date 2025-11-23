import { Box, Typography } from '@mui/material';

export function AttractiveCar() {
    return (
      <>
        <Box 
          className='landingPage' 
          height='100vh' 
        >
            <Box className="animatedText" sx={{  textAlign: {xs : 'center' , lg: 'left'} , paddingTop : '9rem' , paddingLeft : {lg : '9rem' }}}> 
                
                <Typography 
                  variant="h4" 
                  component="h4" 
                  sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'  }}
                >
                  Découvrez la Puissance.
                </Typography>
                
                <Typography 
                  variant="h6" 
                  sx={{ color: 'white', textShadow: '1px 1px 3px rgba(136, 136, 136, 0.7)' }}
                >
                  Une nouvelle ère commence.
                </Typography>

            </Box>
        </Box>
      </>
    )
}