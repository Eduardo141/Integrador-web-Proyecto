import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import BuildIcon from "@mui/icons-material/Build";
import EventIcon from "@mui/icons-material/Event";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar({ open, onClose }) {
  return (
    <>
      {" "}
      {/* Desktop Drawer */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#13191f", // Azul oscuro
            color: "#fff",
            zIndex: 1200, // Menor que el navbar (1300)
            border: "none",
            position: "fixed",
            boxShadow: "4px 0 20px rgba(0,0,0,0.1)",
            top: "64px", // Debajo del navbar
            height: "calc(100vh - 64px)", // Altura completa menos el navbar
          },
        }}
      >
        <List sx={{ px: 1 }}>
          <ListItem
            button
            component={Link}
            to="/"
            sx={{
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              borderRadius: "8px",
              mb: 1,
              transition: "all 0.2s ease",
            }}
          >
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "#FFF" }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/productos"
            sx={{
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              borderRadius: "8px",
              mb: 1,
              transition: "all 0.2s ease",
            }}
          >
            <ListItemIcon>
              <AttachMoneyIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Productos" sx={{ color: "#FFF" }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/proveedores"
            sx={{
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              borderRadius: "8px",
              mb: 1,
              transition: "all 0.2s ease",
            }}
          >
            <ListItemIcon>
              <GroupIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Proveedores" sx={{ color: "#FFF" }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/servicio-tecnico"
            sx={{
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              borderRadius: "8px",
              mb: 1,
              transition: "all 0.2s ease",
            }}
          >
            <ListItemIcon>
              <BuildIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Servicio Técnico" sx={{ color: "#FFF" }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/eventos"
            sx={{
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              borderRadius: "8px",
              mb: 1,
              transition: "all 0.2s ease",
            }}
          >
            <ListItemIcon>
              <EventIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Eventos" sx={{ color: "#FFF" }} />
          </ListItem>
        </List>
      </Drawer>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#13191f", // Azul oscuro
            color: "#fff",
            border: "none",
            zIndex: 1200, // Menor que el navbar
            top: "56px", // Altura del navbar en móvil
            height: "calc(100vh - 56px)",
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={onClose}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "#FFF" }} />
          </ListItem>
          <ListItem button component={Link} to="/productos" onClick={onClose}>
            <ListItemIcon>
              <AttachMoneyIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Productos" sx={{ color: "#FFF" }} />
          </ListItem>
          <ListItem button component={Link} to="/proveedores" onClick={onClose}>
            <ListItemIcon>
              <GroupIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Proveedores" sx={{ color: "#FFF" }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/servicio-tecnico"
            onClick={onClose}
          >
            <ListItemIcon>
              <BuildIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Servicio Técnico" sx={{ color: "#FFF" }} />
          </ListItem>
          <ListItem button component={Link} to="/eventos" onClick={onClose}>
            <ListItemIcon>
              <EventIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Eventos" sx={{ color: "#FFF" }} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
