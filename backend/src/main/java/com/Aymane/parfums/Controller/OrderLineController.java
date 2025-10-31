package com.Aymane.parfums.Controller;

import com.Aymane.parfums.Entities.OrderLineEntity;
import com.Aymane.parfums.Service.OrderLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("orderline")
@CrossOrigin(origins = "http://localhost:5201")
public class OrderLineController {

    @Autowired
    private OrderLineService orderLineService;

    @PostMapping
    public OrderLineEntity ajouterOrderLine(@RequestBody OrderLineEntity lignecommande) {
        return orderLineService.ajouterOrderLine(lignecommande);
    }

    @GetMapping
    public List<OrderLineEntity> getAllOrderLines() {
        return orderLineService.getAllOrderLines();
    }

    @GetMapping("/{id}")
    public Optional<OrderLineEntity> getById(@PathVariable Long id) {
        return orderLineService.getByIdOrderLine(id);
    }

    @PutMapping("/{id}")
    public OrderLineEntity modifierLigneDeCommande(@PathVariable Long id, @RequestBody OrderLineEntity lignecommande) {
        return orderLineService.modifierLigneDeCommande(id, lignecommande);
    }

    @DeleteMapping("/{id}")
    public void supprimerLigneDeCommande(@PathVariable Long id) {
        orderLineService.supprimerLigneDeCommande(id);
    }
}
