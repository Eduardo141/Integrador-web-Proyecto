package com.example.demo.servicio;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modelo.Evento;
import com.example.demo.repositorio.EventoRepository;

@Service
public class EventoService {

    private final EventoRepository eventoRepository;

    @Autowired
    public EventoService(EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }

    public List<Evento> obtenerTodos() {
        return eventoRepository.findAll();
    }

    public Optional<Evento> obtenerPorId(Long id) {
        return eventoRepository.findById(id);
    }

    public List<Evento> buscarPorNombre(String name) {
        return eventoRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Evento> obtenerPorUbicacion(String location) {
        return eventoRepository.findByLocation(location);
    }

    public List<Evento> obtenerEntreFechas(LocalDateTime start, LocalDateTime end) {
        return eventoRepository.findByDateBetween(start, end);
    }

    public List<Evento> obtenerEventosProximos() {
        return eventoRepository.findEventosProximos(LocalDateTime.now());
    }

    public Evento guardar(Evento evento) {
        return eventoRepository.save(evento);
    }

    public void eliminar(Long id) {
        eventoRepository.deleteById(id);
    }
}
