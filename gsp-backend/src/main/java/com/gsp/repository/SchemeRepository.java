package com.gsp.repository;

import com.gsp.model.Scheme;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchemeRepository extends JpaRepository<Scheme, Long> {
    List<Scheme> findByNameContainingIgnoreCase(String name);
}
