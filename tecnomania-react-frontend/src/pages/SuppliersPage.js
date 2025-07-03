import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { API_BASE_URL } from "../constants";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [name, setName] = useState("");
  const [phones, setPhones] = useState("");
  const [status, setStatus] = useState("");

  // Función helper para parsear phones desde el backend
  const parsePhones = (phonesData) => {
    try {
      if (typeof phonesData === "string") {
        return JSON.parse(phonesData || "[]");
      }
      return phonesData || [];
    } catch (error) {
      console.error("Error parsing phones:", error);
      return [];
    }
  };
  // Función helper para formatear phones para el backend
  const formatPhones = (phonesString) => {
    const phonesArray = phonesString
      .split(",")
      .map((phone) => phone.trim())
      .filter((phone) => phone);
    return JSON.stringify(phonesArray);
  };

  // Función para limpiar el formulario
  const clearForm = () => {
    setName("");
    setPhones("");
    setStatus("");
  };

  // Obtener la lista de proveedores desde el backend
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/suppliers`)
      .then((response) => setSuppliers(response.data))
      .catch((error) => console.error("Error al obtener proveedores:", error));
  }, []);
  const handleEdit = (supplier) => {
    setSelectedSupplier(supplier);
    setName(supplier.name);
    setPhones(parsePhones(supplier.phones).join(","));
    setStatus(supplier.status);
    setOpenEditModal(true);
  };
  const handleSaveEdit = () => {
    const updatedSupplier = {
      name,
      phones: formatPhones(phones),
      status,
    };

    axios
      .put(`${API_BASE_URL}/suppliers/${selectedSupplier.id}`, updatedSupplier)
      .then((response) => {
        setSuppliers(
          suppliers.map((supplier) =>
            supplier.id === selectedSupplier.id ? response.data : supplier
          )
        );
        setOpenEditModal(false);
        clearForm();
        alert("Proveedor actualizado");
      })
      .catch((error) => console.error("Error al actualizar proveedor:", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_BASE_URL}/suppliers/${id}`)
      .then(() => {
        setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
        alert("Proveedor eliminado");
      })
      .catch((error) => console.error("Error al eliminar proveedor:", error));
  };
  const handleAddSupplier = () => {
    const newSupplier = {
      name,
      phones: formatPhones(phones),
      status,
    };

    axios
      .post(`${API_BASE_URL}/suppliers`, newSupplier)
      .then((response) => {
        setSuppliers([...suppliers, response.data]);
        setOpenAddModal(false);
        clearForm();
        alert("Proveedor añadido");
      })
      .catch((error) => console.error("Error al añadir proveedor:", error));
  };

  return (
    <div>
      <h2>Lista de Proveedores</h2>{" "}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          clearForm();
          setOpenAddModal(true);
        }}
        sx={{ mb: 2 }}
      >
        Añadir Proveedor
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nombre</strong>
              </TableCell>
              <TableCell>
                <strong>Celulares</strong>
              </TableCell>
              <TableCell>
                <strong>Estado</strong>
              </TableCell>
              <TableCell>
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>{" "}
          <TableBody>
            {suppliers.map((supplier) => (
              <TableRow key={supplier.id}>
                {" "}
                <TableCell>{supplier.name}</TableCell>
                <TableCell>{parsePhones(supplier.phones).join(", ")}</TableCell>
                <TableCell>{supplier.status}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEdit(supplier)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(supplier.id)}
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
      {/* Modal para editar proveedor */}
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
          <h2>Editar Proveedor</h2>
          <TextField
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Celulares (separados por coma)"
            value={phones}
            onChange={(e) => setPhones(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Estado"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveEdit}
            sx={{ mt: 2 }}
          >
            Guardar Cambios
          </Button>
        </Box>
      </Modal>{" "}
      {/* Modal para añadir proveedor */}
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
          <h2>Añadir Proveedor</h2>
          <TextField
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Celulares (separados por coma)"
            value={phones}
            onChange={(e) => setPhones(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Estado"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddSupplier}
            sx={{ mt: 2 }}
          >
            Añadir Proveedor
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SuppliersPage;
