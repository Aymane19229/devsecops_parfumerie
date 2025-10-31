package com.Aymane.parfums.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "ligne de commande")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderLineEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long nombre;
    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonBackReference
    private  OrderEntity order;
}
