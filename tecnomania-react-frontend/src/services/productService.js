import api from "../api/axios";
import { PRODUCT_ENDPOINTS } from "../api/endpoints";

export const getAllProducts = async () => {
  try {
    const response = await api.get(PRODUCT_ENDPOINTS.GET_ALL);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error al obtener los productos" };
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await api.post(PRODUCT_ENDPOINTS.CREATE, productData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error al crear el producto" };
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await api.put(PRODUCT_ENDPOINTS.UPDATE + id, productData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error al actualizar el producto" };
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(PRODUCT_ENDPOINTS.DELETE + id);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error al eliminar el producto" };
  }
};
