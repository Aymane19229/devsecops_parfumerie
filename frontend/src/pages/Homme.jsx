import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProductsByCategorie } from "../services/productService";
import "./Products.css";

function Homme() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const hommeProducts = await getProductsByCategorie("Homme");
      setProducts(hommeProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h2>Catalogue - Parfums Homme</h2>
      <div className="grid">
        {products.map((produit) => (
          <ProductCard key={produit.id} produit={produit} />
        ))}
      </div>
    </div>
  );
}

export default Homme;
