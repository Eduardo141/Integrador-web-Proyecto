import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import {
  login as loginService,
  register as registerService,
} from "../services/authService";

export const useAuthentication = () => {
  const { login: authLogin, logout: authLogout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginService(username, password);
      authLogin(response.token);
      return true;
    } catch (err) {
      setError(err.error || "Error al iniciar sesión");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      await registerService(username, password);
      return true;
    } catch (err) {
      setError(err.error || "Error al registrarse");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authLogout();
  };

  return { login, register, logout, loading, error };
};
