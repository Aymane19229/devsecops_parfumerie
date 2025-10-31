import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProductsByCategorie } from "../services/productService";
import "./Products.css";

function Femme() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const femmeProducts = await getProductsByCategorie("Femme");
      setProducts(femmeProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h2>Catalogue - Parfums Femme</h2>
      <div className="grid">
        {products.map((produit) => (
          <ProductCard key={produit.id} produit={produit} />
        ))}
      </div>
    </div>
  );
}

export default Femme;
