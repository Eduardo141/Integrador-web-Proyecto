package com.example.demo.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Empleado;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {

    List<Empleado> findByStatus(String status);

    List<Empleado> findBySpecialty(String specialty);

    List<Empleado> findByNameContainingIgnoreCase(String name);
}
