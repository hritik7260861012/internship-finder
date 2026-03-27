package com.hritik.internshipfinder.repository;

import com.hritik.internshipfinder.model.Internship;
import org.springframework.data.jpa.repository.JpaRepository;


public interface InternshipRepository extends JpaRepository<Internship, Long> {
}