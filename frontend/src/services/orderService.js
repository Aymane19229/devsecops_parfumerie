import axios from "axios";

const API_URL = "http://localhost:8080"; // ton backend Spring Boot

// Ajouter une commande
export const addOrder = async (orderData) => {
  const response = await axios.post(`${API_URL}/order`, orderData);
  return response.data;
};

// Ajouter une ligne de commande
export const addOrderLine = async (orderLineData) => {
  const response = await axios.post(`${API_URL}/orderline`, orderLineData);
  return response.data;
};
