package com.example.filmix.services;

import com.example.filmix.exceptions.CategoryNotFoundException;
import com.example.filmix.exceptions.MovieNotFoundException;
import com.example.filmix.models.Movie;
import com.example.filmix.repositories.CategoryRepository;
import com.example.filmix.repositories.MovieRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MovieService {
    private final MovieRepository movieRepository;
    private final CategoryRepository categoryRepository;


    public List<Movie> findMovieByCategory(Integer categoryId) {

        return movieRepository.findAllByCategory(Optional.of(categoryRepository
                .findById(categoryId)
                .orElseThrow(() -> new CategoryNotFoundException("Nie znaleziono kategorii"))));
    }

    public Movie findMovieById(Integer movieId){
        return movieRepository.findById(movieId).orElseThrow(() -> new MovieNotFoundException("Nie znaleziono filmu"));
    }

    public List<Movie> findMovieByReleaseDate(){
        return movieRepository.findAllByReleaseDateIsAfter(LocalDateTime.now());
    }

    public List<Movie> findTop10(){
      List<Movie> allMovies = movieRepository.findAll();
        return allMovies.stream()
              .sorted(Comparator.comparing(Movie::getRate).reversed())
              .limit(10)
              .toList();
    }
}
