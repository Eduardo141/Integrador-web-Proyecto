// src/components/ProductSalesChartAndStore.js
import React from 'react';
import { Grid, Paper, Typography, Container } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import TopStoreTable from './TopStoreTable'; // Importamos la tabla

// Datos de celulares más vendidos
const phonesData = {
  labels: ['iPhone 14', 'Samsung Galaxy S23', 'Xiaomi 13', 'OnePlus 11', 'Google Pixel 7'],
  datasets: [
    {
      label: 'Unidades Vendidas',
      data: [150, 200, 130, 180, 120],
      backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
    },
  ],
};

const ProductSalesChartAndStore = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {/* Gráfico de celulares más vendidos */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Celulares Más Vendidos
            </Typography>
            <Bar
              data={phonesData}
              options={{
                responsive: true,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </Paper>
        </Grid>

        {/* Tabla del local con mayores ventas */}
        <Grid item xs={12} md={4}>
          <TopStoreTable /> {/* Llamada al nuevo componente */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductSalesChartAndStore;
