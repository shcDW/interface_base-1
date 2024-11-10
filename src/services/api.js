import axios from 'axios';

// Configuración básica de Axios para la API de coches BMW
const api = axios.create({
  baseURL: 'https://api.bmw.com/v1/cars', // URL de ejemplo
  timeout: 10000, // Tiempo máximo de espera
});

export const getCarsData = async () => {
  try {
    const response = await api.get('/');
    return response.data; // Devuelve los datos de los coches
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    return [];
  }
};