package com.Aymane.parfums.Controller;

import com.Aymane.parfums.Entities.OrderEntity;
import com.Aymane.parfums.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "order")
@CrossOrigin(origins = "http://localhost:5201")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public OrderEntity AddOrder(@RequestBody OrderEntity commande){
        return orderService.ajouterCommande(commande);
    }

    @GetMapping("/{id}")
    public Optional<OrderEntity> getbyid(@PathVariable Long id){
        return orderService.getById(id);
    }

    @GetMapping
    public List<OrderEntity> getorder(){
        return orderService.getAllOrders();
    }

    @DeleteMapping("/{id}")
    public void deletebyid(@PathVariable Long id){
         orderService.supprimerCommande(id);
    }

    @PutMapping("/{id}")
    public OrderEntity updateorder(@PathVariable Long id,@RequestBody OrderEntity commande){
        return orderService.modifierCommande(id,commande);
    }
}
