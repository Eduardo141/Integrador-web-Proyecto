/**
 * Guarda un objeto en localStorage
 * @param {string} key - Clave para almacenar
 * @param {any} value - Valor a almacenar
 */
export const setLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
};

/**
 * Recupera un objeto de localStorage
 * @param {string} key - Clave para recuperar
 * @param {any} defaultValue - Valor por defecto si no existe la clave
 * @returns {any} El valor recuperado o el valor por defecto
 */
export const getLocalStorage = (key, defaultValue = null) => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return defaultValue;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error("Error al recuperar de localStorage:", error);
    return defaultValue;
  }
};

/**
 * Elimina una clave de localStorage
 * @param {string} key - Clave a eliminar
 */
export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error al eliminar de localStorage:", error);
  }
};
