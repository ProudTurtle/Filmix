package com.example.filmix.services;

import com.example.filmix.exceptions.MovieNotFoundException;
import com.example.filmix.models.DTOs.MovieRatingDTO;
import com.example.filmix.models.Movie;
import com.example.filmix.models.MovieRating;
import com.example.filmix.repositories.MovieRatingRepository;
import com.example.filmix.repositories.MovieRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class MovieRatingService {
    private final MovieRatingRepository movieRatingRepository;
    private final MovieRepository movieRepository;

    public Movie addRate(MovieRatingDTO movieRatingDTO) {
        Movie movie = movieRepository.findById(movieRatingDTO.getMovieId());
        MovieRating movieRating = new MovieRating();
        movieRating.setMovie(movie);
        movieRating.setRate(movieRatingDTO.getRate());
        movieRatingRepository.save(movieRating);
        return movie;
    }

}
