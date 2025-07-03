import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants";
import {
  Button,
  TextField,
  Modal,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // Estados para el formulario de eventos
  const [editName, setEditName] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editDescription, setEditDescription] = useState("");
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/events`)
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error al obtener eventos:", error));
  }, []);
  const handleAddEvent = () => {
    axios
      .post(`${API_BASE_URL}/events`, {
        name: editName,
        location: editLocation,
        date: editDate,
        description: editDescription,
      })
      .then((response) => {
        setEvents([...events, response.data]);
        setOpenAddModal(false);
        clearForm();
        alert("Evento añadido exitosamente");
      })
      .catch((error) => console.error("Error al añadir evento:", error));
  };
  const handleEditEvent = () => {
    axios
      .put(`${API_BASE_URL}/events/${selectedEvent.id}`, {
        name: editName,
        location: editLocation,
        date: editDate,
        description: editDescription,
      })
      .then((response) => {
        const updatedEvent = response.data;
        setEvents(
          events.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
          )
        );
        setOpenEditModal(false);
        clearForm();
        alert("Evento actualizado exitosamente");
      })
      .catch((error) => console.error("Error al editar evento:", error));
  };

  const handleDeleteEvent = (id) => {
    axios
      .delete(`${API_BASE_URL}/events/${id}`)
      .then(() => {
        setEvents(events.filter((event) => event.id !== id));
        alert("Evento eliminado");
      })
      .catch((error) => console.error("Error al eliminar evento:", error));
  };
  const clearForm = () => {
    setEditName("");
    setEditLocation("");
    setEditDate("");
    setEditDescription("");
    setSelectedEvent(null);
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0]; // Formato YYYY-MM-DD
  };

  return (
    <div>
      <h2>Lista de Eventos</h2>{" "}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          clearForm();
          setOpenAddModal(true);
        }}
        sx={{ mb: 2 }}
      >
        Añadir Evento
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nombre</strong>
              </TableCell>
              <TableCell>
                <strong>Ubicación</strong>
              </TableCell>
              <TableCell>
                <strong>Fecha</strong>
              </TableCell>
              <TableCell>
                <strong>Descripción</strong>
              </TableCell>
              <TableCell>
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>{" "}
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.location}</TableCell>
                <TableCell>{formatDate(event.date)}</TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>
                  {" "}
                  <IconButton
                    onClick={() => {
                      setSelectedEvent(event);
                      setEditName(event.name);
                      setEditLocation(event.location);
                      setEditDate(event.date ? formatDate(event.date) : "");
                      setEditDescription(event.description);
                      setOpenEditModal(true);
                    }}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteEvent(event.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
      <Modal
        open={openAddModal}
        onClose={() => {
          setOpenAddModal(false);
          clearForm();
        }}
      >
        <Box
          sx={{
            width: 400,
            padding: 3,
            backgroundColor: "white",
            borderRadius: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {" "}
          <h2>Añadir Evento</h2>
          <TextField
            label="Nombre del Evento"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Ubicación"
            value={editLocation}
            onChange={(e) => setEditLocation(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Fecha"
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Descripción"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddEvent}
            sx={{ mt: 2 }}
          >
            Añadir Evento
          </Button>
        </Box>
      </Modal>{" "}
      <Modal
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false);
          clearForm();
        }}
      >
        <Box
          sx={{
            width: 400,
            padding: 3,
            backgroundColor: "white",
            borderRadius: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {" "}
          <h2>Editar Evento</h2>
          <TextField
            label="Nombre del Evento"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Ubicación"
            value={editLocation}
            onChange={(e) => setEditLocation(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Fecha"
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Descripción"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditEvent}
            sx={{ mt: 2 }}
          >
            Guardar Cambios
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EventsPage;
