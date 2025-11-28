import { Box, Button,  Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';

export function AttractiveCar() {
    return (
      <>
        <Box 
          className='landingPage ' 
          height='100vh' 
        >
            <Box className="animatedText" 
             sx={{ 
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              textAlign: { xs: "center", lg: "left" },
              alignItems: { xs: "center", lg: "flex-start" },   // ➜ CENTRE SUR MOBILE
              paddingTop: { xs: "9rem", lg: "9rem" },
              paddingLeft: { lg: "9rem" }
             }}
            > 
                
                <Typography 
                  variant="h3" 
                  component="h3" 
                  sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)'  }}
                >
                  L'aventure automobile commence ici

                </Typography>
                {/* <br/> */}
                <Typography 
                  // variant="h6" 
                  sx={{ color: "rgba(247, 239, 239, 0.7)", textShadow: '1px 1px 3px rgba(136, 136, 136, 0.7)' , width : {lg :"500px"} }}
                >
                  Chez AguilAuto SAS, nous vous accompagnons dans le choix de votre voiture avec un service de livraison à domicile.

                </Typography>
                <Button color="primary" variant="contained"  sx={{width: "200px" }}>
                    <Link
                      to="/contact"
                      activeProps={{
                        className: 'font-bold',
                      }}
                    >
                    Nous Contacter
                    </Link> 
                </Button>

            </Box>
        </Box>
      </>
    )
}