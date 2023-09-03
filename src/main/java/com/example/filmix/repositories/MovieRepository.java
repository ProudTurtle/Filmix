package com.example.filmix.repositories;

import com.example.filmix.models.Category;
import com.example.filmix.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

    List<Movie> findAll();

    List<Movie> findAllByCategory(Optional<Category> category);

    List<Movie> findAllByIsRecommendedTrue();

    Movie findById(int id);
}
