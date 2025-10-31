package com.Aymane.parfums.Repository;

import com.Aymane.parfums.Entities.OrderLineEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderLineRepository extends JpaRepository<OrderLineEntity,Long> {
}
