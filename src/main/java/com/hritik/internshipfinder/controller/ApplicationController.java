package com.hritik.internshipfinder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.hritik.internshipfinder.repository.ApplicationRepository;
import com.hritik.internshipfinder.model.Application;
import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "*")
public class ApplicationController {

    @Autowired
    private ApplicationRepository repo;

    @PostMapping
    public Application apply(@RequestBody Application app) {
        app.setStatus("Applied");
        return repo.save(app);
    }

    @GetMapping("/{userId}")
    public List<Application> getByUser(@PathVariable Long userId) {
        return repo.findByUserId(userId);
    }
}