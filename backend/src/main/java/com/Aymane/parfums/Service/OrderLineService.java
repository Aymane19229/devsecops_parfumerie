package com.Aymane.parfums.Service;

import com.Aymane.parfums.Entities.OrderLineEntity;
import com.Aymane.parfums.Repository.OrderLineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderLineService {

    @Autowired
    private OrderLineRepository orderLineRepository;

    public OrderLineEntity ajouterOrderLine(OrderLineEntity lignecommande) {
        return orderLineRepository.save(lignecommande);
    }

    public List<OrderLineEntity> getAllOrderLines() {
        return orderLineRepository.findAll();
    }

    public void supprimerLigneDeCommande(Long id) {
        orderLineRepository.deleteById(id);
    }

    public Optional<OrderLineEntity> getByIdOrderLine(Long id) {
        return orderLineRepository.findById(id);
    }

    public OrderLineEntity modifierLigneDeCommande(Long id, OrderLineEntity lignedecommande) {
        return orderLineRepository.findById(id)
                .map(existing -> {
                    existing.setNombre(lignedecommande.getNombre());
                    existing.setOrder(lignedecommande.getOrder());
                    return orderLineRepository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Ligne de commande non trouvée avec id " + id));
    }
}
