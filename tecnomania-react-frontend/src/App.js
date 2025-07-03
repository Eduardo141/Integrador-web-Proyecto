import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AuthProvider, useAuthContext } from "./context/AuthContext";
import DashboardPage from "./pages/DashboardPage";
import EventsPage from "./pages/EventsPage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import RegisterPage from "./pages/RegisterPage";
import SuppliersPage from "./pages/SuppliersPage";
import TechnicalServicePage from "./pages/TechnicalServicePage";

const drawerWidth = 240;

const AppContent = () => {
  const { isAuthenticated, logout } = useAuthContext();
  const theme = useTheme(); // Usar el tema
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile); // Abierto en escritorio por defecto

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#f5f5f5", // Fondo gris claro
      }}
    >
      <Navbar
        onLogout={logout}
        onMenuClick={toggleSidebar}
        sidebarOpen={sidebarOpen}
        drawerWidth={drawerWidth}
      />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: "100%",
          mt: { xs: "50px", sm: "70px" }, // Altura del AppBar
          minHeight: { xs: "100dvh" },
        }}
      >
        <Container maxWidth={false} sx={{}}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/proveedores" element={<SuppliersPage />} />
            <Route
              path="/servicio-tecnico"
              element={<TechnicalServicePage />}
            />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
