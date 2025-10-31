import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ produit }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      {produit.imageUrl && (
        <img
          src={produit.imageUrl}
          alt={produit.nom}
          className="product-image"
        />
      )}
      <h3 className="product-name">{produit.nom}</h3>
      <p className="product-price">{produit.prix} DH</p>
      {produit.description && (
        <p className="product-description">{produit.description}</p>
      )}
      <button
        className="buy-btn"
        onClick={() => {
          addToCart({
            id: produit.id,
            nom: produit.nom,
            prix: produit.prix,
            imageUrl: produit.imageUrl,
            description: produit.description,
          });
          navigate("/checkout");
        }}
      >
        Ajouter au Panier
      </button>
    </div>
  );
}

export default ProductCard;