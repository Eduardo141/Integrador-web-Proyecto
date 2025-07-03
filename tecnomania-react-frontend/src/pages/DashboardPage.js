import { Box, Grid, Paper, Typography } from "@mui/material";
import MapComponent from "../components/MapComponent";
import RevenueChart from "../components/RevenueChart";
import SalesCard from "../components/SalesCard";
import TelefonosChart from "../components/Telefonos";
import VMensuales from "../components/VMensuales";

const DashboardPage = () => {
  return (
    <>
      <Box sx={{ p: 2, mt: 2, mb: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <SalesCard title="Ventas Hoy" value="2.532" percentage={26} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SalesCard title="Visitantes" value="170.212" percentage={-14} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SalesCard
              title="Ganancias Totales"
              value="S/.24.300"
              percentage={18}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SalesCard title="Órdenes Pendientes" value="45" percentage={-9} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ p: 2 }}>
              <RevenueChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Visitas Mensuales
              </Typography>
              <VMensuales />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Locales en Perú
              </Typography>
              <MapComponent />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Celulares Más Vendidos
              </Typography>
              <TelefonosChart />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardPage;
