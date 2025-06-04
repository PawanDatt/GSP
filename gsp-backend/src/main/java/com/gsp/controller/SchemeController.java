package com.gsp.controller;

import com.gsp.model.Scheme;
import com.gsp.service.SchemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5500") // Allowing cross-origin requests from the frontend
@RestController
@RequestMapping("/api/schemes")
public class SchemeController {

    @Autowired
    private SchemeService schemeService; // Using service class for business logic

    // Get all schemes
    @GetMapping
    public List<Scheme> getAllSchemes() {
        return schemeService.getAllSchemes();
    }

    // Create a new scheme
    @PostMapping
    public Scheme createScheme(@RequestBody Scheme scheme) {
        return schemeService.saveScheme(scheme);
    }

    // Delete scheme by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteScheme(@PathVariable Long id) {
        if (!schemeService.existsById(id)) {
            return ResponseEntity.status(404).body("Scheme not found");
        }
        schemeService.deleteSchemeById(id); // Deleting scheme by ID
        return ResponseEntity.ok("Scheme deleted successfully");
    }
}
