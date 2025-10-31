package com.Aymane.parfums.Service;

import com.Aymane.parfums.Entities.ClientEntity;
import com.Aymane.parfums.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public ClientEntity ajouterClient(ClientEntity client) {
        return clientRepository.save(client);
    }

    public List<ClientEntity> getAllClients() {
        return clientRepository.findAll();
    }

    public Optional<ClientEntity> getClientById(Long id) {
        return clientRepository.findById(id);
    }

    public void supprimerClient(Long id) {
        clientRepository.deleteById(id);
    }

    public ClientEntity modifierClient(Long id, ClientEntity nouveauClient) {
        return clientRepository.findById(id)
                .map(c -> {
                    c.setNom(nouveauClient.getNom());
                    c.setEmail(nouveauClient.getEmail());
                    c.setAdresse(nouveauClient.getAdresse());
                    c.setTelephone(nouveauClient.getTelephone());
                    return clientRepository.save(c);
                })
                .orElseThrow(() -> new RuntimeException("Client non trouvé avec id " + id));
    }
}
