package com.Aymane.parfums.Service;

import com.Aymane.parfums.Entities.ProductEntity;
import com.Aymane.parfums.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ProductEntity ajouterProduit(ProductEntity produit) {
        return productRepository.save(produit);
    }

    public List<ProductEntity> listerProduits() {
        return productRepository.findAll();
    }

    public List<ProductEntity> listerProduitsParCategorie(String categorie) {
        return productRepository.findAll()
                .stream()
                .filter(p -> p.getCategorie().equalsIgnoreCase(categorie))
                .collect(Collectors.toList());
    }

    public Optional<ProductEntity> trouverProduitParId(Long id) {
        return productRepository.findById(id);
    }

    public ProductEntity modifierProduit(Long id, ProductEntity nouveauProduit) {
        return productRepository.findById(id)
                .map(p -> {
                    p.setNom(nouveauProduit.getNom());
                    p.setPrix(nouveauProduit.getPrix());
                    p.setDescription(nouveauProduit.getDescription());
                    p.setQuantite(nouveauProduit.getQuantite());
                    p.setCategorie(nouveauProduit.getCategorie());
                    p.setImageUrl(nouveauProduit.getImageUrl());
                    return productRepository.save(p);
                })
                .orElseThrow(() -> new RuntimeException("Produit non trouvé avec id " + id));
    }

    public void supprimerProduit(Long id) {
        productRepository.deleteById(id);
    }
}
