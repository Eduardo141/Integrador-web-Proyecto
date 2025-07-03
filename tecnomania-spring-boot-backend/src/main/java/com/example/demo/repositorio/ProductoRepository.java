package com.example.demo.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findByNameContainingIgnoreCase(String name);

    List<Producto> findByColor(String color);

    List<Producto> findByStockGreaterThan(Integer stock);
}
