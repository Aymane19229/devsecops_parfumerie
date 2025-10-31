import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProductsByCategorie } from "../services/productService";
import "./Products.css";

function Packs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const packProducts = await getProductsByCategorie("Pack");
      setProducts(packProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h2>Catalogue - Packs Parfums</h2>
      <div className="grid">
        {products.map((produit) => (
          <ProductCard key={produit.id} produit={produit} />
        ))}
      </div>
    </div>
  );
}

export default Packs;
