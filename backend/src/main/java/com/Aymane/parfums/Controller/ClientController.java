package com.Aymane.parfums.Controller;

import com.Aymane.parfums.Entities.ClientEntity;
import com.Aymane.parfums.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("client")
@CrossOrigin(origins = "http://localhost:5201")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping
    public ClientEntity ajouterClient(@RequestBody ClientEntity client) {
        return clientService.ajouterClient(client);
    }

    @GetMapping
    public List<ClientEntity> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/{id}")
    public Optional<ClientEntity> getClientById(@PathVariable Long id) {
        return clientService.getClientById(id);
    }

    @PutMapping("/{id}")
    public ClientEntity modifierClient(@PathVariable Long id, @RequestBody ClientEntity client) {
        return clientService.modifierClient(id, client);
    }

    @DeleteMapping("/{id}")
    public void supprimerClient(@PathVariable Long id) {
        clientService.supprimerClient(id);
    }
}
