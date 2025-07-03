import api from "../api/axios";
import { AUTH_ENDPOINTS } from "../api/endpoints";

export const login = async (username, password) => {
  try {
    const response = await api.post(AUTH_ENDPOINTS.LOGIN, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error de conexión" };
  }
};

export const register = async (username, password) => {
  try {
    const response = await api.post(AUTH_ENDPOINTS.REGISTER, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Error de conexión" };
  }
};
