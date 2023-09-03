package com.example.filmix.controllers;

import com.example.filmix.models.DTOs.MovieRatingDTO;
import com.example.filmix.models.MovieRating;
import com.example.filmix.repositories.MovieRatingRepository;
import com.example.filmix.services.MovieRatingService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/add-rate")
@AllArgsConstructor
public class MovieRatingController {
    private final MovieRatingService movieRatingService;

    @PostMapping()
    public ResponseEntity<?> addRate(@RequestBody MovieRatingDTO movieRating){
        return ResponseEntity.ok(movieRatingService.addRate(movieRating));

    }
}
