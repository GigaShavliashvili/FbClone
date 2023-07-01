import { Box, Modal, Typography } from "@mui/material";
import React from "react";

interface RegistrationModalProps {
  open: boolean;
  handlerClose: () => void;
}

const RegisterView: React.FC<RegistrationModalProps> = (props) => {
  return (
    <Modal
      open={true}
      /*  onClose={handleClose} */
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box /* sx={style} */>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default RegisterView;
