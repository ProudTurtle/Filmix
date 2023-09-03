package com.example.filmix.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    private String title;
    private LocalDateTime releaseDate;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(columnDefinition = "TINYINT(1)")
    private boolean isRecommended;

    private Integer duration;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String description;

    private String shortDescription;

    private String url;

    private String originalTitle;
}
