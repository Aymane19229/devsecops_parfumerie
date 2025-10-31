import ProductCard from "./ProductCard";
import "./ProductCard.css";

function Products({ produits }) {
  return (
    <div className="products-grid">
      {produits.map((produit) => (
        <ProductCard key={produit.id} produit={produit} />
      ))}
    </div>
  );
}

export default Products;
