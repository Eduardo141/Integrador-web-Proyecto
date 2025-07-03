import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FlagIcon from "@mui/icons-material/Flag";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

function Navbar({ onLogout, onMenuClick, sidebarOpen, drawerWidth }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    handleMenuClose();
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1199, // Valor inferior al del Drawer
        width: "100%",
        left: 0,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            TechnoMania
          </Typography>
        </Box>{" "}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {" "}
          <IconButton color="inherit">
            <Badge
              badgeContent={3}
              sx={{ "& .MuiBadge-badge": { bgcolor: "#b22234" } }}
            >
              <ChatBubbleIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge
              badgeContent={7}
              sx={{ "& .MuiBadge-badge": { bgcolor: "#b22234" } }}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <FlagIcon style={{ color: "#b22234" }} />
          </IconButton>
          <IconButton onClick={handleMenuClick}>
            <Avatar alt="Usuario" src="" />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
