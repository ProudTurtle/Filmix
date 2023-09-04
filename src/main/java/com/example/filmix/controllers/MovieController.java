package com.example.filmix.controllers;

import com.example.filmix.repositories.MovieRepository;
import com.example.filmix.services.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/movies")
@AllArgsConstructor
public class MovieController {
    private final MovieRepository movieRepository;
    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(movieRepository.findAll());
    }

    @GetMapping("/byCategory")
    public ResponseEntity<?> getByCategory(@RequestParam("category") Integer categoryId) {
        return ResponseEntity.ok(movieService.findMovieByCategory(categoryId));
    }

    @GetMapping("/recommended")
    public ResponseEntity<?> getRecommendedMovie() {
       return ResponseEntity.ok(movieRepository.findAllByIsRecommendedTrue());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMovieById(@PathVariable int id){
        return ResponseEntity.ok(movieService.findMovieById(id));
    }

    @GetMapping("/upcoming-movies")
    public ResponseEntity<?> getUpcomingMovies(){
        return ResponseEntity.ok(movieService.findMovieByReleaseDate());
    }

    @GetMapping("/get-top")
    public ResponseEntity<?> getTop10Movies(){
        return ResponseEntity.ok(movieService.findTop10());
    }
}
