import { Box, Modal as MuiModal } from '@mui/material';

const modalStyle = {
    width: 400,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

export const Modal = ({ open, onClose, title, children }) => {
    return (
        <MuiModal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                {title && <h2>{title}</h2>}
                {children}
            </Box>
        </MuiModal>
    );
};
