package com.example.demo.repositorio;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.modelo.Evento;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {

    List<Evento> findByDateBetween(LocalDateTime start, LocalDateTime end);

    List<Evento> findByLocation(String location);

    @Query("SELECT e FROM Evento e WHERE e.date >= :fecha ORDER BY e.date ASC")
    List<Evento> findEventosProximos(LocalDateTime fecha);

    List<Evento> findByNameContainingIgnoreCase(String name);
}
