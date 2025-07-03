import { Alert } from '@mui/material';

export const ErrorMessage = ({ error, severity = 'error' }) => {
    if (!error) return null;

    return (
        <Alert severity={severity} sx={{ mb: 2 }}>
            {error}
        </Alert>
    );
};
