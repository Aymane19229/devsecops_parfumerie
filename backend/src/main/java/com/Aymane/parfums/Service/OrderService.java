package com.Aymane.parfums.Service;

import com.Aymane.parfums.Entities.OrderEntity;
import com.Aymane.parfums.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public OrderEntity ajouterCommande(OrderEntity commande) {
        return orderRepository.save(commande);
    }

    public Optional<OrderEntity> getById(Long id) {
        return orderRepository.findById(id);
    }

    public List<OrderEntity> getAllOrders() {
        return orderRepository.findAll();
    }

    public void supprimerCommande(Long id) {
        orderRepository.deleteById(id);
    }

    public OrderEntity modifierCommande(Long id, OrderEntity commande) {
        return orderRepository.findById(id)
                .map(existing -> {
                    existing.setDate(commande.getDate());
                    existing.setTotal(commande.getTotal());
                    existing.getCommandes().clear();
                    if (commande.getCommandes() != null) {
                        existing.getCommandes().addAll(commande.getCommandes());
                    }

                    return orderRepository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Commande non trouvée avec id " + id));
    }
}
