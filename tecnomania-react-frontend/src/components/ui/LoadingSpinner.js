import { Box, CircularProgress } from '@mui/material';

export const LoadingSpinner = ({ size = 40 }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <CircularProgress size={size} />
        </Box>
    );
};
