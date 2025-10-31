import { Link } from "react-router-dom";
import "./App.css";
// Import des images
import cadeauHommeParfum from "./assets/cadeau-homme-parfum.jpg";
import cadeauFemmeParfum from "./assets/R.jpeg";
import packsParfum from "./assets/OIP.webp";

function App() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Luxury Perfumes</h1>
        <p className="subtitle">Découvrez l'essence du luxe</p>
      </header>
      
      <div className="cards-vertical">
        <Link 
          to="/homme" 
          className="card-vertical homme-card"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cadeauHommeParfum})` }}
        >
          <div className="card-content">
            <h2>Parfums Homme</h2>
            <p className="card-description">Des fragrances boisées et sophistiquées</p>
            <span className="card-cta">Découvrir →</span>
          </div>
        </Link>
        
        <Link 
          to="/femme" 
          className="card-vertical femme-card"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cadeauFemmeParfum})` }}
        >
          <div className="card-content">
            <h2>Parfums Femme</h2>
            <p className="card-description">Des essences florales et envoûtantes</p>
            <span className="card-cta">Découvrir →</span>
          </div>
        </Link>
        
        <Link 
          to="/packs" 
          className="card-vertical packs-card"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${packsParfum})` }}
        >
          <div className="card-content">
            <h2>Packs Parfums</h2>
            <p className="card-description">Coffrets cadeaux et collections exclusives</p>
            <span className="card-cta">Découvrir →</span>
          </div>
        </Link>
      </div>
      
      <footer className="footer">
        <p>© 2023 Luxury Perfumes. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;