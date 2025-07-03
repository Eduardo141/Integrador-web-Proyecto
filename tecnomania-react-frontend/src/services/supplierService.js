import api from "../api/axios";
import { SUPPLIER_ENDPOINTS } from "../api/endpoints";

export const getAllSuppliers = async () => {
  try {
    const response = await api.get(SUPPLIER_ENDPOINTS.GET_ALL);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error al obtener los proveedores" };
  }
};

export const createSupplier = async (supplierData) => {
  try {
    const response = await api.post(SUPPLIER_ENDPOINTS.CREATE, supplierData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error al crear el proveedor" };
  }
};

export const updateSupplier = async (id, supplierData) => {
  try {
    const response = await api.put(
      SUPPLIER_ENDPOINTS.UPDATE + id,
      supplierData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error al actualizar el proveedor" };
  }
};

export const deleteSupplier = async (id) => {
  try {
    const response = await api.delete(SUPPLIER_ENDPOINTS.DELETE + id);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error al eliminar el proveedor" };
  }
};
