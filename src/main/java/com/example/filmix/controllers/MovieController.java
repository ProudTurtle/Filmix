package com.example.filmix.controllers;

import com.example.filmix.repositories.MovieRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/movies")
@AllArgsConstructor
public class MovieController {
    private final MovieRepository movieRepository;

    @GetMapping
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(movieRepository.findAll());
    }
}
