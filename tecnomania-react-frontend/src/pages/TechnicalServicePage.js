import React, { useState, useEffect } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TechnicalServicePage = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [editName, setEditName] = useState("");
  const [editSpecialty, setEditSpecialty] = useState("");
  const [editSalary, setEditSalary] = useState("");
  const [editStatus, setEditStatus] = useState("");

  // Función para limpiar el formulario
  const clearForm = () => {
    setEditName("");
    setEditSpecialty("");
    setEditSalary("");
    setEditStatus("");
  };

  // Obtener lista de empleados
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/employees`)
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error al obtener empleados:", error));
  }, []);
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setEditName(employee.name);
    setEditSpecialty(employee.specialty);
    setEditSalary(employee.salary);
    setEditStatus(employee.status);
    setOpenEditModal(true);
  };

  const handleSaveEdit = () => {
    const employeeData = {
      name: editName,
      specialty: editSpecialty,
      salary: parseFloat(editSalary),
      status: editStatus,
    };

    axios
      .put(`${API_BASE_URL}/employees/${selectedEmployee.id}`, employeeData)
      .then((response) => {
        setEmployees(
          employees.map((emp) =>
            emp.id === selectedEmployee.id ? response.data : emp
          )
        );
        setOpenEditModal(false);
        clearForm();
        alert("Empleado actualizado");
      })
      .catch((error) => console.error("Error al actualizar empleado:", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_BASE_URL}/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter((emp) => emp.id !== id));
        alert("Empleado eliminado");
      })
      .catch((error) => console.error("Error al eliminar empleado:", error));
  };
  const handleAddEmployee = () => {
    const employeeData = {
      name: editName,
      specialty: editSpecialty,
      salary: parseFloat(editSalary),
      status: editStatus,
    };

    axios
      .post(`${API_BASE_URL}/employees`, employeeData)
      .then((response) => {
        setEmployees([...employees, response.data]);
        setOpenAddModal(false);
        clearForm();
        alert("Empleado añadido");
      })
      .catch((error) => console.error("Error al añadir empleado:", error));
  };

  const formatSalary = (salary) => `S/. ${parseFloat(salary).toFixed(2)}`;

  return (
    <div>
      <h2>Lista de Empleados</h2>{" "}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          clearForm();
          setOpenAddModal(true);
        }}
        sx={{ mb: 2 }}
      >
        Añadir Empleado
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nombre</strong>
              </TableCell>
              <TableCell>
                <strong>Especialidad</strong>
              </TableCell>
              <TableCell>
                <strong>Sueldo</strong>
              </TableCell>
              <TableCell>
                <strong>Estado</strong>
              </TableCell>
              <TableCell>
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.specialty}</TableCell>
                <TableCell>{formatSalary(employee.salary)}</TableCell>
                <TableCell>{employee.status}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEdit(employee)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(employee.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Modal para editar empleado */}
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
          <h2>Editar Empleado</h2>
          <TextField
            label="Nombre"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Especialidad"
            value={editSpecialty}
            onChange={(e) => setEditSpecialty(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sueldo"
            type="number"
            value={editSalary}
            onChange={(e) => setEditSalary(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Estado"
            value={editStatus}
            onChange={(e) => setEditStatus(e.target.value)}
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
      {/* Modal para añadir empleado */}
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
          <h2>Añadir Empleado</h2>
          <TextField
            label="Nombre"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Especialidad"
            value={editSpecialty}
            onChange={(e) => setEditSpecialty(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sueldo"
            type="number"
            value={editSalary}
            onChange={(e) => setEditSalary(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Estado"
            value={editStatus}
            onChange={(e) => setEditStatus(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddEmployee}
            sx={{ mt: 2 }}
          >
            Añadir Empleado
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default TechnicalServicePage;
