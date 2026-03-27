package com.hritik.internshipfinder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.hritik.internshipfinder.repository.InternshipRepository;
import com.hritik.internshipfinder.model.Internship;
import java.util.List;


@RestController
@RequestMapping("/api/internships")
@CrossOrigin(origins = "*")
public class InternshipController {

    @Autowired
    private InternshipRepository repo;

    @GetMapping
    public List<Internship> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Internship add(@RequestBody Internship i) {
        return repo.save(i);
    }
}