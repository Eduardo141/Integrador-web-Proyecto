import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
import { API_BASE_URL } from "../constants";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false); // Estados para el formulario de productos
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editStock, setEditStock] = useState("");

  useEffect(() => {
    // Obtener productos
    axios
      .get(`${API_BASE_URL}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  // Función para limpiar el formulario
  const clearForm = () => {
    setEditName("");
    setEditPrice("");
    setEditColor("");
    setEditStock("");
    setSelectedProduct(null);
  };
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditName(product.name);
    setEditPrice(product.price);
    setEditColor(product.color);
    setEditStock(product.stock);
    setOpenEditModal(true);
  };
  const handleSaveEdit = () => {
    axios
      .put(`${API_BASE_URL}/products/${selectedProduct.id}`, {
        name: editName,
        price: editPrice,
        color: editColor,
        stock: editStock,
      })
      .then((response) => {
        const updatedProduct = response.data;
        setProducts(
          products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setOpenEditModal(false);
        clearForm();
        alert("Producto actualizado");
      })
      .catch((error) => console.error("Error al actualizar producto:", error));
  };
  const handleDelete = (productId) => {
    axios
      .delete(`${API_BASE_URL}/products/${productId}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
        alert("Producto eliminado");
      })
      .catch((error) => console.error("Error al eliminar producto:", error));
  };
  const handleAddProduct = () => {
    axios
      .post(`${API_BASE_URL}/products`, {
        name: editName,
        price: editPrice,
        color: editColor,
        stock: editStock,
      })
      .then((response) => {
        setProducts([...products, response.data]);
        setOpenAddModal(false);
        clearForm();
        alert("Producto añadido");
      })
      .catch((error) => console.error("Error al añadir producto:", error));
  };

  const formatPrice = (price) => `S/. ${parseFloat(price).toFixed(2)}`;

  return (
    <div>
      <h2>Lista de Productos</h2>{" "}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          clearForm();
          setOpenAddModal(true);
        }}
        sx={{ mb: 2 }}
      >
        Añadir Producto
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nombre</strong>
              </TableCell>
              <TableCell>
                <strong>Precio</strong>
              </TableCell>
              <TableCell>
                <strong>Color</strong>
              </TableCell>
              <TableCell>
                <strong>Stock</strong>
              </TableCell>
              <TableCell>
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>{" "}
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{formatPrice(product.price)}</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEdit(product)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(product.id)}
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
      {/* Modal para editar producto */}
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
          <h2>Editar Producto</h2>
          <TextField
            label="Nombre"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Precio"
            type="number"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Color"
            value={editColor}
            onChange={(e) => setEditColor(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Stock"
            type="number"
            value={editStock}
            onChange={(e) => setEditStock(e.target.value)}
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
      {/* Modal para añadir producto */}
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
          <h2>Añadir Producto</h2>
          <TextField
            label="Nombre"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Precio"
            type="number"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Color"
            value={editColor}
            onChange={(e) => setEditColor(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Stock"
            type="number"
            value={editStock}
            onChange={(e) => setEditStock(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
            sx={{ mt: 2 }}
          >
            Añadir Producto
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductsPage;
