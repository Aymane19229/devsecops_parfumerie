package com.Aymane.parfums.Controller;

import com.Aymane.parfums.Entities.ProductEntity;
import com.Aymane.parfums.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:5201") // adapte au port de ton frontend
public class ProductController {

    @Autowired
    private ProductService productService;

    // Récupérer tous les produits
    @GetMapping
    public List<ProductEntity> getAllProducts() {
        return productService.listerProduits();
    }

    // Récupérer les produits par catégorie
    @GetMapping("/categorie/{categorie}")
    public List<ProductEntity> getProductsByCategorie(@PathVariable String categorie) {
        return productService.listerProduitsParCategorie(categorie);
    }

    // Récupérer un produit par ID
    @GetMapping("/{id}")
    public Optional<ProductEntity> getProduct(@PathVariable Long id) {
        return productService.trouverProduitParId(id);
    }

    // Ajouter un produit
    @PostMapping
    public ProductEntity createProduct(@RequestBody ProductEntity product) {
        return productService.ajouterProduit(product);
    }

    // Modifier un produit
    @PutMapping("/{id}")
    public ProductEntity updateProduct(@PathVariable Long id, @RequestBody ProductEntity product) {
        return productService.modifierProduit(id, product);
    }

    // Supprimer un produit
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.supprimerProduit(id);
    }
}
