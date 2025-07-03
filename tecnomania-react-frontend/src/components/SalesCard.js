import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function SalesCard({ title, value, percentage }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
        <Typography color={percentage > 0 ? 'green' : 'red'}>
          {percentage}% Desde el mes pasado
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SalesCard;
