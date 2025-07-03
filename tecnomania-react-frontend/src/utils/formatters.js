/**
 * Formatea un número a moneda peruana (soles)
 * @param {number} value - Valor a formatear
 * @returns {string} Valor formateado como moneda (S/. XXX.XX)
 */
export const formatCurrency = (value) => {
  return `S/. ${parseFloat(value).toFixed(2)}`;
};

/**
 * Formatea una fecha en formato legible (DD/MM/YYYY)
 * @param {string|Date} date - Fecha a formatear
 * @returns {string} Fecha formateada
 */
export const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Valida si un correo electrónico tiene formato válido
 * @param {string} email - Correo electrónico a validar
 * @returns {boolean} true si es válido, false si no
 */
export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Trunca un texto si supera cierta longitud
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado con '...' si superaba la longitud
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};
