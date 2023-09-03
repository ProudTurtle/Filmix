package com.example.filmix.repositories;

import com.example.filmix.models.MovieRating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRatingRepository extends JpaRepository<MovieRating, Integer> {

}
