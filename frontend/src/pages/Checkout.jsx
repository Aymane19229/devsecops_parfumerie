import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [step, setStep] = useState("cart");
  const [client, setClient] = useState({
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Envoi de la commande au backend
  const handleSubmitOrder = async () => {
    if (!client.nom || !client.email || !client.telephone || !client.adresse) {
      alert("⚠️ Merci de remplir toutes les informations client !");
      return;
    }

    setLoading(true);
    try {
      // 1️⃣ Sauvegarde du client
      const clientRes = await fetch("http://localhost:8080/client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
      });
      const savedClient = await clientRes.json();

      // 2️⃣ Sauvegarde de la commande
      const orderRes = await fetch("http://localhost:8080/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: new Date().toISOString(),
          total: getTotalPrice(),
          client: savedClient,
        }),
      });
      const savedOrder = await orderRes.json();

      // 3️⃣ Sauvegarde des lignes de commande
      for (const item of cartItems) {
        await fetch("http://localhost:8080/orderline", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            quantity: item.quantity,
            price: item.prix,
            productName: item.nom,
            order: savedOrder,
          }),
        });
      }

      alert("✅ Commande validée avec succès !");
      clearCart();
      setStep("cart");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("❌ Erreur lors de la validation de la commande !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      {/* 🔝 Header avec bouton retour */}
      <div className="checkout-header">
        <h2 className="checkout-title">🛍️ Votre Panier</h2>
        <button className="back-btn" onClick={() => navigate("/")}>
          ⬅ Retour au catalogue
        </button>
      </div>

      {/* 🛒 Étape 1 : Panier */}
      {step === "cart" && (
        <>
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h3>Votre panier est vide</h3>
              <p>Ajoutez des produits pour commencer votre commande.</p>
              <button
                className="continue-shopping"
                onClick={() => navigate("/")}
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.nom}
                        className="cart-img"
                      />
                    )}
                    <div className="cart-details">
                      <h4>{item.nom}</h4>
                      <p>Prix: {item.prix} MAD</p>
                      <p>Quantité: {item.quantity}</p>
                      <button onClick={() => removeFromCart(item.id)}>
                        ❌ Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                Total : <span>{getTotalPrice()} MAD</span>
              </div>

              <button className="confirm-btn" onClick={() => setStep("form")}>
                ✅ Passer la commande
              </button>
            </>
          )}
        </>
      )}

      {/* 📝 Étape 2 : Formulaire Client */}
      {step === "form" && (
        <div className="client-form">
          <h3>Informations client</h3>

          <input
            type="text"
            placeholder="Nom complet"
            value={client.nom}
            onChange={(e) => setClient({ ...client, nom: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={client.email}
            onChange={(e) => setClient({ ...client, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Téléphone"
            value={client.telephone}
            onChange={(e) => setClient({ ...client, telephone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Adresse"
            value={client.adresse}
            onChange={(e) => setClient({ ...client, adresse: e.target.value })}
          />

          <h3>Total à payer : {getTotalPrice()} MAD</h3>

          <button
            className="confirm-btn"
            onClick={handleSubmitOrder}
            disabled={loading}
          >
            {loading ? "⏳ Envoi en cours..." : "💳 Valider la commande"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
