import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Luxury Perfumes</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/homme">Homme</Link></li>
        <li><Link to="/femme">Femme</Link></li>
        <li><Link to="/packs">Packs</Link></li>
      </ul>
      <div className="navbar-cart">
        <button 
          onClick={() => navigate("/checkout")} 
          className="cart-btn"
          data-count={cartItemsCount}
        >
          🛒 Panier ({cartItemsCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;