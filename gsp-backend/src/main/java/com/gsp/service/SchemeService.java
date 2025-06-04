package com.gsp.service;

import com.gsp.exception.SchemeNotFoundException;
import com.gsp.model.Scheme;
import com.gsp.repository.SchemeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchemeService {

    @Autowired
    private SchemeRepository schemeRepository;

    // Save scheme to the database
    @Transactional
    public Scheme saveScheme(Scheme scheme) {
        return schemeRepository.save(scheme);
    }

    // Get all schemes from the database
    public List<Scheme> getAllSchemes() {
        return schemeRepository.findAll();
    }

    // Get paginated schemes
    public Page<Scheme> getSchemesWithPagination(int pageNo, int pageSize) {
        return schemeRepository.findAll(PageRequest.of(pageNo, pageSize, Sort.by("name")));
    }

    // Find schemes by name
    public List<Scheme> findSchemesByName(String name) {
        return schemeRepository.findByNameContainingIgnoreCase(name);
    }

    // Check if a scheme exists by ID
    public boolean existsById(Long id) {
        return schemeRepository.existsById(id);
    }

    // Update scheme
    @Transactional
    public Scheme updateScheme(Long id, Scheme updatedScheme) {
        if (!schemeRepository.existsById(id)) {
            throw new SchemeNotFoundException("Scheme not found with ID: " + id);
        }
        updatedScheme.setId(id); // Ensure the correct scheme ID is set.
        return schemeRepository.save(updatedScheme);
    }

    // Delete scheme by ID
    public void deleteSchemeById(Long id) {
        if (!schemeRepository.existsById(id)) {
            throw new SchemeNotFoundException("Scheme not found with ID: " + id);
        }
        schemeRepository.deleteById(id);
    }
}
