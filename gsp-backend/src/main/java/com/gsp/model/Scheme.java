package com.gsp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Version;
import jakarta.persistence.Column;

@Entity
public class Scheme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Automatically generates ID
    private Long id;

    @Version
    private Long version; // Used for optimistic locking

    private String name;
    private String description;
    private String eligibility;
    private String applicationProcess;

    @Column(name = "apply_link") // New column for the scheme link
    private String applyLink;

    // Default constructor (for JPA)
    public Scheme() {}

    // Parameterized constructor (optional, for easier initialization)
    public Scheme(String name, String description, String eligibility, String applicationProcess, String applyLink) {
        this.name = name;
        this.description = description;
        this.eligibility = eligibility;
        this.applicationProcess = applicationProcess;
        this.applyLink = applyLink;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEligibility() {
        return eligibility;
    }

    public void setEligibility(String eligibility) {
        this.eligibility = eligibility;
    }

    public String getApplicationProcess() {
        return applicationProcess;
    }

    public void setApplicationProcess(String applicationProcess) {
        this.applicationProcess = applicationProcess;
    }

    public String getApplyLink() {
        return applyLink;
    }

    public void setApplyLink(String applyLink) {
        this.applyLink = applyLink;
    }

    @Override
    public String toString() {
        return "Scheme{" +
                "id=" + id +
                ", version=" + version +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", eligibility='" + eligibility + '\'' +
                ", applicationProcess='" + applicationProcess + '\'' +
                ", applyLink='" + applyLink + '\'' +
                '}';
    }
}
