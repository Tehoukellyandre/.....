import { Typography , Box, TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';

export function SuiviCommande({ open, handleClose, handleOpen } :{ open: boolean, handleClose: ()=> void, handleOpen: ()=> void }) {

  return (
    <div>
      <MenuItem onClick={handleOpen}>
        SUIVI DE COMMANDE
      </MenuItem>

      <Modal open={open} onClose={handleClose}>
        <Box
          className="
            flex flex-col gap-4 
            backdrop-blur-xl bg-white/10 
            shadow-2xl border border-white/20
            rounded-3xl p-6 
            transition-all duration-300
          "
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 420 },
          }}
        >
          <Typography
            variant="h6"
            className="text-white text-center mb-2"
          >
            Suivre votre commande
          </Typography>

          <TextField
            fullWidth
            label="Entrez votre numéro de suivi"
           
          />

          <div className="flex justify-between mt-3">
            <Button
              variant="contained"
              className="rounded-xl px-6 py-2"
              sx={{
                background: "white",
                color: "#000",
                fontWeight: "bold",
                "&:hover": { background: "#f0f0f0" }
              }}
            >
              Suivre
            </Button>

            <Button
              variant="outlined"
              onClick={handleClose}
              className="rounded-xl px-6 py-2"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "white", background: "white/20" }
              }}
            >
              Annuler
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
