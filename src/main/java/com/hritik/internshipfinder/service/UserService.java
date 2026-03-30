package com.hritik.internshipfinder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hritik.internshipfinder.repository.UserRepository;
import com.hritik.internshipfinder.model.User;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User user) {
        return repo.save(user);
    }
// My name is is ritik singh
    public User login(String email, String password) {
        return repo.findByEmailAndPassword(email, password);
    }
}