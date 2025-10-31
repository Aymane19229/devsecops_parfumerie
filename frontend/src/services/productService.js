import axios from "axios";

const API_URL = "http://localhost:8080/product";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProductsByCategorie = async (categorie) => {
  const response = await axios.get(API_URL);
  return response.data.filter(
    (p) => p.categorie && p.categorie.toLowerCase() === categorie.toLowerCase()
  );
};
